<template>
  <div class="dropDownList" @click="onDplClick($event)" @mouseleave="onBlur($event)">
    <ul v-dpl>
      <li @click="onListClick(index,$event)">
        <svg-icon icon-class="choosed-line"></svg-icon>不接受私聊
      </li>
      <li @click="onListClick(index,$event)">
        <svg-icon icon-class="choosed-line"></svg-icon>不可评论
      </li>
    </ul>
    <svg-icon icon-class="send-line"></svg-icon>
  </div>
</template>

<script>
    export default {
      name: "SendPop",
      methods:{
        onDplClick(event){
          let ul = event.currentTarget.children[0];
          if(ul.style.display==='block')
            ul.style.display='none';
          else
            ul.style.display='block';
        },
        onBlur(event){
          let ul = event.currentTarget.children[0];
          ul.style.display = "none";
        },
        onListClick(index){
          event.stopPropagation();
          let path = event.path || (event.composedPath && event.composedPath()) //兼容火狐和safari
          path[1].style.display = "none";
          this.$emit("change", {
            index:index
          });
        }
      },
      directives:{
        dpl:{
          bind(el){
            el.style.display = "none";
          }
        }
      },
    }
</script>

<style scoped lang="less">
@import "./SendPop.less";
</style>
