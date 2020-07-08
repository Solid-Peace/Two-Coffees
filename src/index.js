import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import css from 'CSS/style.scss'
import {testModule, movingBackground} from 'JS/functions.js'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ el: '#app', render: h => h(App) });

export {movingBackground}