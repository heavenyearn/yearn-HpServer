<template>
  <div class="modalShadow" :style="modalShadowStyle">
    <div class="modal" :style="modalStyle">
      <div class="closeIcon" v-show="showCloseIcon" @click="closeModal">
        <svg-icon icon-class="close"></svg-icon>
      </div>
      <slot name="bodyHtml"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal.vue",
    props: {
      modalHeight:{
        type:[Number,String],
        default(){
          return '300px'
        }
      },
      modalShadowOpacity:{
        type:String,
        default(){
          return 'rgba(0,0,0,.3)'
        }
      },
      modalBoxShadow:{
        type:String,
        default(){
          return '2px 2px 20px 1px'
        }
      },
      modalBackground:{
        type:String,
        default(){
          return '#FFFFFF'
        }
      },
      modalWidth:{
        type:[Number,String],
        default(){
          return '80%'
        }
      },
      modalRadius:{
        type:String,
        default(){
          return '16px'
        }
      },
      showCloseIcon: {
        type: String,
        default() {
          return 'true';
        }
      }
    },
    methods:{
      closeModal(){
        this.$emit('close')
      }
    },
    computed:{
      modalStyle(){
        console.log('computing');
        let style={};
        style.height=this.modalHeight;
        style.background=this.modalBackground;
        style.width=this.modalWidth;
        style.borderRadius=this.modalRadius;
        style.boxShadow=this.modalBoxShadow;
        return style;
      },
      modalShadowStyle(){
        let style={};
        style.background=this.modalShadowOpacity;
        return style;
      }
    }
  }
</script>

<style scoped lang="less">
  @import './Modal.less';
</style>
