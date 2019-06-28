<template>
  <div class="ReadPane">
    <Card :styleList="styleList[0]">
      <div slot="content">
        {{content}}
      </div>
    </Card>
    <Card :styleList="styleList[1]">
      <div slot="content">
        {{content}}
      </div>
    </Card>
    <Card :styleList="styleList[2]">
      <div slot="content">
        {{content}}
      </div>
    </Card>
    <Card :styleList="styleList[3]">
      <div slot="content">
        {{content}}
      </div>
    </Card>
    <Card :styleList="styleList[4]">
      <div slot="content">
        {{content}}
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from "@/components/Read/components/Card/Card";

  export default {
    name: "Read",
    components: {Card},
    data() {
      return {
        content: '明天起，做一个幸福的人\n'+
          '喂马，劈柴，周游世界\n' +
          '从明天起，关心粮食和蔬菜\n' +
          '我有一所房子，面朝大海，春暖花开\n'+
          '从明天起，和每一个亲人通信\n' +
          '告诉他们我的幸福\n' +
          '那幸福的闪电告诉我的\n'+
          '我将告诉每一个人\n' +
          '给每一条河每一座山取一个温暖的名字\n' +
          '陌生人，我也为你祝福\n' +
          '愿你有一个灿烂的前程\n' +
          '愿你有情人终成眷属\n' +
          '愿你在尘世获得幸福\n' +
          '我只愿面朝大海，春暖花开',
        styleList: [],
        backgroundList:['#ffac21','#ff9e50','#ffd577','#ffc424','#ffeb13']
      }
    },
    mounted() {
      for (let i = 1; i <= 5; i++) {
        let str=this.backgroundList[i];
        let p = {top: (10 + i*3) + '%', left: (5+i*4) + '%',background:str};
        this.styleList.push(p);
      }
      console.log(this.styleList)
    },
    methods:{
      
    }
  }
</script>

<style scoped lang="less">
  @import "./Read.less";
</style>
