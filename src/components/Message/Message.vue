<template>
  <div>
    <button @click="()=>this.$router.push({ path: '/sendRec'})">跳转</button>
  </div>
</template>

<script>
  import Modal from "@/components/Modal/Modal";

  export default {
    name: "Message",
    components: {Modal},
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style>
  .modalTest {
    height: 100px;
    width: 100%;
    background: red;
  }
</style>
