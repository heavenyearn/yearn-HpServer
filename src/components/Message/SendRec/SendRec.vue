<template>
  <div class="mainPane">
    <div class="headerBar">
        <svg-icon icon-class="back-line" ></svg-icon>
        <div>{{username}}</div>
    </div>
    <div class="sendRecPane">

    </div>
    <div class="inputPane">

    </div>
  </div>
</template>

<script>
    export default {
        name: "SendRec"
    }
</script>

<style scoped lang="less">
  @import './SendRec.less';
</style>
