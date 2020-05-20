import Vue from 'vue'
import App from './App.vue'
import css from '../public/assets/css/style.scss'


console.log('hello world');

console.log('App');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ el: '#app', render: h => h(App) });