<template>
  <div>
    <button @click="()=>this.modalOpen=true">点击来打开modal</button>
    <Modal v-show="modalOpen" @close="closeModal" modal-height="auto"
           modal-background="#fffdea" modal-shadow-opacity=" rgba(0,0,0,.2)" >
      <div slot="bodyHtml">
          <div></div>
      </div>
    </Modal>
  </div>
</template>

<script>
  import Modal from "@/components/Modal/Modal";
    export default {
      name: "Message",
      components: {Modal},
      data(){
        return {
          modalOpen:false
        }
      },
      methods:{
          closeModal(){
            this.modalOpen=false;
          }
      }
    }
</script>

<style>
.modalTest{
  height:100px;
  width:100%;
  background:red;
}
</style>
