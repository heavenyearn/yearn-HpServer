<template>
  <div class="card" id="cardPane" :style="cardStyle">
    <div class="title">
      <div class="headLogo" id="headLogo">
        <div class="sexIcon">
          <svg-icon v-if="isFemale" icon-class="female"></svg-icon>
          <svg-icon v-else="isFemale" icon-class="male"></svg-icon>
        </div>
      </div>
      <div class="name">
        孙笑川蔡徐坤啊
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
            background:'#e7cd64'
          }
        }
      }
    },
    data() {
      return {
        hasHeart: false,
        isFemale: true
      }
    },
    methods: {
      addHeart() {
        this.hasHeart = !this.hasHeart;
        //在此处添加向接口传递heart值的代码
      },
      goForComment(event) {
        event.stopPropagation();
      }

    },
    computed: {
      cardStyle(){
        let style={};
        style.marginLeft=this.styleList.left;
        style.marginTop=this.styleList.top;
        style.background=this.styleList.background;
        return style;
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./Card.less";
</style>
