<template>
    <div class="ReadPane">
        <Card>
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
      data(){
        return {
          content: '千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻千与千寻'
        }
      },
    }
</script>

<style scoped lang="less">
  @import "./Read.less";
</style>
