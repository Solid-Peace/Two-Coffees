import Vue from 'vue'
import App from './App.vue'
import css from 'CSS/style.scss'
import back from 'Images/background1.jpg'


console.log('hello world');

console.log('App');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ el: '#app', render: h => h(App) });