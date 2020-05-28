import Vue from 'vue'
import App from './App.vue'
import css from 'CSS/style.scss'
import {testModule, movingBackground} from 'JS/functions.js'

var test = {
    test() {
        console.log('hello from bundle')
    },
}
testModule();

console.log('hello world');

console.log('App');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ el: '#app', render: h => h(App) });

export {test, testModule, movingBackground}