<template>
  <div class="card" :style="cardStyle" @touchstart="setStart($event)">
    <div class="title">
      <div class="headLogo" id="headLogo" :style="headLogoStyle">
        <div class="sexIcon">
          <svg-icon v-if="item.isFemale" icon-class="female"></svg-icon>
          <svg-icon v-else="item.isFemale" icon-class="male"></svg-icon>
        </div>
      </div>
      <div class="name">
        {{item.userName}}
      </div>

    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <div class="heart" @touchstart="addHeart">
        <svg-icon v-if="hasHeart" icon-class="heart-block"></svg-icon>
        <svg-icon v-else="hasHeart" icon-class="heart-line"></svg-icon>
      </div>
      <div class="detail" @touchstart="goForComment($event)">
        <svg-icon icon-class="comment"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      styleList: {
        type: Object,
        default() {
          return {
            top: '10%',
            left: '1%',
            background: '#e7cd64'
          }
        }
      },
      item: {
        type: Object,
        default() {
          return {
            headLogo: 'http://i2.tiimg.com/691981/ef617bbacda2a44b.jpg',
            userName: 'UserPne',
            content: '明天起，做一个幸福的人\n' +
              '喂马，劈柴，周游世界\n' +
              '从明天起，关心粮食和蔬菜\n' +
              '我有一所房子，面朝大海，春暖花开\n' +
              '从明天起，和每一个亲人通信\n' +
              '告诉他们我的幸福\n' +
              '那幸福的闪电告诉我的\n' +
              '我将告诉每一个人\n' +
              '给每一条河每一座山取一个温暖的名字\n' +
              '陌生人，我也为你祝福\n' +
              '愿你有一个灿烂的前程\n' +
              '愿你有情人终成眷属\n' +
              '愿你在尘世获得幸福\n' +
              '我只愿面朝大海，春暖花开',
            isFemale: false,
            cardId: '0',
            userId: '0'
          }
        }
      }
    },
    data() {
      return {
        hasHeart: false,
      }
    },
    mounted() {
    },
    methods: {
      addHeart() {
        this.hasHeart = !this.hasHeart;
        //在此处添加向接口传递heart值的代码
      },
      goForComment(event) {
        event.stopPropagation();
      },
      setStart(event) {
        var self=this;
        let id = event.currentTarget.id;
        console.log(id);
        if (id === "Card4") {
          let obj = document.getElementById(id);
          // 如果这个元素的位置内只有一个手指的话
          if (event.targetTouches.length === 1) {
            let touch = event.targetTouches[0];
            console.log('startLeft:' + obj.offsetLeft);
            let startLeft = obj.offsetLeft;
            let touchStartPoint = touch.pageX;
            let width = obj.offsetWidth;
            // 把元素放在手指所在的位置
            obj.addEventListener('touchmove', move);

            function move(event) {
              event.preventDefault();
              let touch2 = event.targetTouches[0];
              let l = startLeft + touch2.pageX - touchStartPoint - width / 2;
              obj.style.left = l + 'px';
              let range=obj.offsetLeft-startLeft;
              if (obj.offsetLeft < startLeft)
                obj.style.opacity = '' + (obj.offsetLeft + width) / (startLeft + width);
              else
                obj.style.opacity = '' + (startLeft + width) / (obj.offsetLeft + width);
              obj.style.transform="rotate("+range/5+'deg)';
            }

            obj.addEventListener('touchend', touchEnd);

            function touchEnd(event) {

              let stance = obj.offsetLeft - startLeft;

              function ratio() {
                return Math.abs(stance) / width;
              }

              if (ratio() > 0.7) {
                console.log('disappear');
                  self.$emit('deleteAndAdd');
                  obj.style.opacity='1';
                  obj.style.transform='rotate(0deg)';
                  obj.style.left='0';
              } else {
                obj.style.opacity='1';
                $('#Card4').addClass('turn_Back');
                $('#Card4').on('animationend webkitAnimationEnd',function t(e){
                  $('#Card4').removeClass('turn_Back');
                  obj.style.left='0';
                  obj.style.transform='rotate(0deg)';
                });
              }
              obj.removeEventListener('touchmove', move);
              obj.removeEventListener('touchend', touchEnd);
            }
          }
        }
      }
    },
    computed: {
      cardStyle() {
        let style = {};
        style.marginLeft = this.styleList.left;
        style.marginTop = this.styleList.top;
        style.background = this.styleList.background;
        return style;
      },
      headLogoStyle() {
        let style = {};
        style.backgroundImage = 'url(' + this.item.headLogo + ')';
        return style;
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./Card.less";
</style>
