import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from'jquery';
import './icon.js';
import VModal from 'vue-js-modal';
import {fb} from './firebase';
// import VueFirestore from 'vue-firestore'

Vue.use(VModal);
// Vue.use(VueFirestore);

window.$ = window.jQuery = jQuery;

import 'popper.js';
import './assets/app.scss'

Vue.component('navbar', require('./components/Navbar.vue').default)
Vue.component('homemenu', require('./components/HomeMenu.vue').default)
Vue.component('popular', require('./components/Popular.vue').default)
Vue.component('wakafooter', require('./components/Wakafooter.vue').default)
Vue.component('navmap', require('./components/Navmap.vue').default)
Vue.component('gmaps', require('./components/Gmaps.vue').default)
Vue.component('herotwo', require('./components/HeroTwo.vue').default)
Vue.component('pagetitle', require('./components/PageTitle.vue').default)
Vue.component('callus', require('./components/CallUs.vue').default)
Vue.component('cargoinfo', require('./components/CargoInfo.vue').default)
Vue.component('airportslink', require('./components/AirportsLink.vue').default)
Vue.component('airportpage', require('./components/AirportPage.vue').default)
Vue.component('whenempty', require('./components/WhenEmpty.vue').default)
Vue.component('modallogin', require('./components/ModalLogin.vue').default)
Vue.component('modalregister', require('./components/ModalRegister.vue').default)

Vue.config.productionTip = false;

let app = '';


fb.auth().onAuthStateChanged(function(user) {
  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
    
  }


});

