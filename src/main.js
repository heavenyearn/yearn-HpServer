// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import './icons'
import $ from 'jquery'
import VModal from 'vue-js-modal'
import Vuex from 'vuex'
import store from './store/store';

Vue.use(Vuex);
Vue.use(VModal);
Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
