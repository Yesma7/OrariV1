require('./bootstrap');
import vue from 'vue';
window.Vue = vue;

import App from './components/App.vue';

//Importe de Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//Importe y configuracion de Vue Router
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';

//Sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);


//Vue Router
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const router = new VueRouter({
    mode:'history',
    routes:routes
});

const app = new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
});
