import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      todos: [
        {id: 1, text: '...', done: true},
        {id: 2, text: '...', done: false}
      ],
      count: 0
    },
    getters: {
      doneTodos: (state) =>id=> {
        return state.todos.filter(todo => {
          return todo.id===id;
        })
      }
    },
    mutations: {
      increment: (state,param) => state.count+=param.num,
      decrement: (state,param) => state.count*=param.num,
    },
    actions:{
      actionsA:({commit})=> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('increment',{num:10});
            resolve()
          }, 1000)
        })
      }
    }
  }
)
