import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(fas)

// Method 1
import VCalendar from 'v-calendar';
createApp(App)
    .use(router)
    .use(VCalendar, {})
    .component("fa-icon", FontAwesomeIcon)
    .use(VueAxios, axios)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"