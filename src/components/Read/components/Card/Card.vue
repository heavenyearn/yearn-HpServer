<template>
    <div class="card">
      <div class="title">
        <div class="headLogo" id="headLogo">
          <div class="sexIcon"></div>
        </div>
        <div class="name">
           孙笑川蔡徐坤啊
        </div>

      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <div class="heart">
          <svg-icon v-if=true icon-class="heart-block"></svg-icon>
          <svg-icon v-else=false icon-class="heart-line"></svg-icon>
        </div>
        <div class="detail">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Card",
      mounted(){

      }
    }
</script>

<style scoped lang="less">
  @import "./Card.less";
</style>
