import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add/Add'
import Read from "@/components/Read/Read";
import Message from "@/components/Message/Message";
import Mine from "@/components/Mine/Mine";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Add',
      component: Add
    },
    {
      path:'/read',
      name:'Read',
      component:Read
    },
    {
      path:'/message',
      name:'Message',
      component:Message
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    }
  ]
})
