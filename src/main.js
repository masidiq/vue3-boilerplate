import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Method 1
import VCalendar from 'v-calendar';
createApp(App)
    .use(router)
    .use(VCalendar, {})
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"