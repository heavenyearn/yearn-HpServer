<template>
    <div class="card">
      <div class="title">
        <div class="headLogo" id="headLogo">
        </div>
        <div class="sexIcon">

        </div>
      </div>
      <div class="content">

      </div>
      <div class="footer">
        <div class="heart">

        </div>
        <div class="comment">

        </div>
        <div class="police">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Card",
      mounted(){
        (function () {
          let headLogo=document.getElementById('headLogo');
          headLogo.style.background="url('../.')"
        })();
      }
    }
</script>

<style scoped lang="less">
  @import "./Card.less";
</style>
