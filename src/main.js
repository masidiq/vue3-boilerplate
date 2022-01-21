import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'


// Method 1
import VCalendar from 'v-calendar';
createApp(App)
    .use(router)
    .use(VCalendar, {})
    .use(VueAxios, axios)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"