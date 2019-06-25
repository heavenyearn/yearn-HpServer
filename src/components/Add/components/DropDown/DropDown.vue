<template>
  <div class="dropDownList" id="dropDownList" @click="onDplClick">
    <ul v-dpl>
      <li v-for="(item,index) in dataList" :key="index" @click="onListClick(index,$event)">
        <svg-icon icon-class="tag"></svg-icon>
        {{item[labelProperty]}}
      </li>
    </ul>
    <div id="svgDiv">
      <svg-icon icon-class="right-line"></svg-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DropDown",
    props: {
      dataList: {
        type: Array,
        default() {
          return [
            {name: "选项一"},
            {name: "选项二"}
          ]
        }
      },
      labelProperty: {
        type: String,
        default() {
          return "name"
        }
      },
      iconClass: {
        type: String,
        default() {
          return 'right-line';
        }
      },
      iconClassAfter:{
        type: String,
        default() {
          return 'icon-top';
        }
      }
    },
    data() {
      return {
        ulIsClose: true,
      }
    },
    methods: {
      onDplClick(event) {
        let ul = event.currentTarget.children[0];
        let iconSvg=document.getElementById('svgDiv');
        if (!this.ulIsClose) {
          ul.style.display = "none";
          this.ulIsClose = true;
          iconSvg.classList.remove('goTop');
          iconSvg.classList.add('goRight');
          return;
        }
        ul.style.display = "block";
        this.ulIsClose = false;
        iconSvg.classList.remove('goRight');
        iconSvg.classList.add('goTop');
      },
      onListClick(index) {
        event.stopPropagation();
        let path = event.path || (event.composedPath && event.composedPath()) //兼容火狐和safari
        path[1].style.display = "none";
        this.ulIsClose = true;
        let iconSvg=document.getElementById('svgDiv');
        iconSvg.classList.remove('goTop');
        iconSvg.classList.add('goRight');
        this.$emit("change", {
          index: index,
          value: this.dataList[index]
        });
      }
    },
    directives: {
      dpl: {
        bind(el) {
          el.style.display = "none";
        }
      }
    },
    mounted() {
      document.addEventListener('touchstart', function () {
        let ul = document.getElementById('dropDownList').children[0];
        let iconSvg = document.getElementById('svgDiv');
        console.log('你点击了body');
        if (!self.ulIsClose) {
          ul.style.display = "none";
          self.ulIsClose = true;
          iconSvg.classList.remove('goTop');
          iconSvg.classList.add('goRight');
        }
      }, false);
      var self=this;
      document.getElementById('dropDownList').addEventListener('touchstart', function (event) {
        event.stopPropagation();
      })
    }
  }
</script>

<style scoped lang="less">
  @import './DropDown.less';
</style>
