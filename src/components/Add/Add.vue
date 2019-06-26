<template>
  <div class="hello">
    <div class="inputPane">
      <textarea class="vInput" :placeholder="placeholder" maxlength="500" @input="descInput" v-model="desc"></textarea>
      <div class="tagPane">
        <div v-for="item in chooseTagList" class="tagBlock" @click="showDelete($event)" @mouseleave="hideDelete($event)">
          <svg-icon icon-class="tag-block"></svg-icon><span>{{item}}</span>
          <div class="closeDiv" v-show="false" @click="deleteTag($event)"><svg-icon  icon-class="close"></svg-icon></div>
        </div>
      </div>
      <!--      <div class="addPic" @click="upLoad">-->
      <!--        <div class="addIcon"></div>-->
      <!--      </div>-->
    </div>
    <div class="quote">{{quote}}</div>
    <div class="toolBar">
      <div class="toolBarDiv">
        <svg-icon icon-class="pic-line"></svg-icon>
      </div>
      <div class="toolBarDiv">
          <DropDown :dataList="tagList" @change="tagChoose($event)"></DropDown>
      </div>
      <div class="toolBarDiv" @click="()=>this.modalOpen=true">
        <svg-icon icon-class="send-line"></svg-icon>
      </div>
      <div class="toolBarDiv">
        <svg-icon icon-class="address-line"></svg-icon>
      </div>
      <div class="toolBarDiv">
        {{500-txtVal}}
      </div>
    </div>
    <Modal v-show="modalOpen" @close="closeModal" modal-width="55%" show-close-icon="false" modal-height="auto"
           modal-background="#fffdea" modal-shadow-opacity=" rgba(0,0,0,.2)" >
      <div slot="bodyHtml" class="modalPane">
        <div class="modalBody" id="message" @click="permitListChange($event)">
          <svg-icon v-if="permitList.message" icon-class="choosed-block"></svg-icon>
          <svg-icon v-else="permitList.message" icon-class="choosed-line"></svg-icon>
          不接受私聊
        </div>
        <div class="modalBody" id="comment" @click="permitListChange($event)">
          <svg-icon v-if="permitList.comment" icon-class="choosed-block"></svg-icon>
          <svg-icon v-else="permitList.comment" icon-class="choosed-line"></svg-icon>
          不允许评论
        </div>
        <div class="confirmButton">
          <button>发布</button>
        </div>
      </div>
    </Modal>

  </div>
</template>

<script>
  import DropDown from "@/components/Add/components/DropDown/DropDown";
  import Modal from "@/components/Modal/Modal";
  export default {
    name: 'Add',
    components: {Modal, DropDown},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        placeholder: '别难过，你不是一个人...',
        desc: '',
        txtVal: 0,
        quote: '',
        tagList:[
          {name:'心事'},{name:'疑惑'},{name:'吐槽'},{name:'求助'}],
        chooseTagList:[],
        modalOpen:false,
        permitList:{comment:false,message:false}
      }
    },
    methods: {
      descInput() {
        this.txtVal = this.desc.length;
      },
      showDelete(event){
        event.currentTarget.children[2].style.display='';
        event.currentTarget.style.background='#eeeeee';
      },
      deleteTag(event){
        let name=event.currentTarget.previousElementSibling.textContent;
        this.chooseTagList.splice(this.chooseTagList.findIndex(item => item===name), 1)
      },
      hideDelete(event){
        event.currentTarget.children[2].style.display='none';
        event.currentTarget.style.background='#ffffff';
      },
      tagChoose(v){
        let name=v.value.name;
        if(!this.chooseTagList.includes(name))
          this.chooseTagList.push(name);
        console.log(this.chooseTagList)
      },
      closeModal(){
        this.modalOpen=false;
      },
      permitListChange(event){
        if(event.currentTarget.id==='message'){
          this.permitList.message=!this.permitList.message;
        }
        if(event.currentTarget.id==='comment'){
          this.permitList.comment=!this.permitList.comment;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './Add.less';
</style>
