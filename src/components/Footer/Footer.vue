<template>
    <div class="footerBar">
<!--      <div class="addIcon" @click="popChoose">-->
<!--        <svg-icon icon-class="add-line"></svg-icon>-->
<!--      </div>-->
<!--      <modal name="hello-world" classes="v&#45;&#45;modal popModal">-->
<!--        hello, world!-->
<!--      </modal>-->
      <div class="footItem" @touchstart="toAdd">
        <svg-icon v-if="this.$route.path!=='/'" icon-class="add-line"></svg-icon>
        <svg-icon v-if="this.$route.path==='/'" icon-class="add-block"></svg-icon>
      </div>
      <div class="footItem" @touchstart="toRead">
        <svg-icon v-if="this.$route.path!=='/read'" icon-class="card-line"></svg-icon>
        <svg-icon v-else="this.$route.path==='/read'" icon-class="card-block"></svg-icon>
      </div>
      <div class="footItem" @touchstart="toMessage">
        <svg-icon v-if="this.$route.path!=='/message'" icon-class="message-line"></svg-icon>
        <svg-icon v-if="this.$route.path==='/message'" icon-class="message-block"></svg-icon>
      </div>
      <div class="footItem" @touchstart="toMine">
        <svg-icon v-if="this.$route.path!=='/mine'" icon-class="mine-line"></svg-icon>
        <svg-icon v-else="this.$route.path==='/mine'" icon-class="mine-block"></svg-icon>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
      data(){
          return{
          }
        },
        methods: {
          toMine() {
            this.$router.push({ path: '/mine'});
          },
          toAdd(){
            this.$router.push({ path: '/'});
          },
          toMessage(){
            this.$router.push({ path: '/message'});
          },
          toRead(){
            this.$router.push({path:'/read'})
          },
          popChoose(){
            this.$modal.show('hello-world');
          },
        },
      watch:{
      }
    }
</script>

<style scoped lang="less">
@import './Footer.less';
</style>
