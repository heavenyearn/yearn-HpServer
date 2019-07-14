<template>
  <div class="ReadPane">
    <Card v-for="(item,index) in dataList" @deleteAndAdd="deleteCard" :key="index" :id="'Card'+index" :styleList="styleList[index]" :item="item">
      <div slot="content">
        {{item.content}}
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
        styleList: [],
        backgroundList:['#ffd2f4','#ff9e50','#a5ffcb','#ffc424','#ffeb13'],
        dataList:[
          {
            headLogo:'http://i1.fuimg.com/691981/d4a9ca034dfb32f6.jpg',
            userName:'UserOne',
            content: '111',
            isFemale:false,
            cardId:'1',
            userId:'1'
          },
          {
            headLogo:'http://i2.tiimg.com/691981/cfbdd0d600a5aaaa.jpg',
            userName:'UserTwo',
            content:
              '2222',
            isFemale:false,
            cardId:'2',
            userId:'2'
          },
          {
            headLogo:'http://i2.tiimg.com/691981/a359afbd7a42fea9.jpg',
            userName:'UserThree',
            content:
              '333',
            isFemale:true,
            cardId:'3',
            userId:'3'
          },
          {
            headLogo:'http://i2.tiimg.com/691981/1cac5a64c4a7d9cf.jpg',
            userName:'UserFour',
            content:
              '444',
            isFemale:false,
            cardId:'4',
            userId:'4'
          },
          {
            headLogo:'http://i2.tiimg.com/691981/b7f77c1a938a9688.jpg',
            userName:'UserFive',
            content:
              '5555',
            isFemale:true,
            cardId:'5',
            userId:'5'
          }
        ]
      }
    },
    mounted() {
      this.computeBackGround();
    },
    methods:{
      computeBackGround(){
        this.styleList=[];
        for (let i = 0; i < 5; i++) {
          let str=this.backgroundList[i];
          let p = {top: (10 + (i+1)*3) + '%', left: (5+(i+1)*4) + '%',background:str};
          this.styleList.push(p);
        }
        console.log(this.styleList)
      },
      deleteCard(){
        this.dataList.pop();
        this.dataList.unshift(
          {
            headLogo:'http://i1.fuimg.com/691981/d4a9ca034dfb32f6.jpg',
            userName:'UserSix',
            content:
              '66666',
            isFemale:false,
            cardId:'6',
            userId:'6'
          },
        );
        let obj=this.backgroundList.pop();
        this.backgroundList.unshift(obj);
        this.computeBackGround();
        console.log(this.backgroundList);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./Read.less";
</style>
