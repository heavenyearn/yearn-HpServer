<template>
  <div id="app" @touchstart.prevent>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer";
export default {
  name: 'App',
  components: {Footer}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  background: #fee8bc;
}
*{
  -webkit-tap-highlight-color:transparent;
}
</style>
