import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Airport from "../views/Airport.vue";
import Admin from "../admin/Admin.vue";
import Pikangikum from "../airports/Pikangikum.vue";
import PoplarHill from "../airports/PoplarHill.vue";
import DeerLake from "../airports/DeerLake.vue";
import Northspirit from "../airports/Northspirit.vue";
import SandyLake from "../airports/SandyLake.vue";
import Overview from "../admin/AdminOverview.vue";
import MyProfile from "../admin/MyProfile.vue";
import ChangeName from "../admin/ChangeName.vue";
import ChangeEmail from "../admin/ChangeEmail.vue";
import AdminAuth from "../admin/AdminAuth.vue";
import ChangePhone from "../admin/ChangePhone.vue";
import Airports from "../admin/AdminAirports.vue";
import Flights from "../admin/AdminFlights.vue";
import General from "../admin/AdminGeneral.vue";
import Icons from "../admin/AdminIcons.vue";
import Orders from "../admin/AdminOrders.vue";
import Products from "../admin/AdminProducts.vue";
import Tracking from "../admin/AdminTracking.vue";
import addproduct from "../admin/AdminAddProduct.vue";

import {fb} from "../firebase";





Vue.use(VueRouter);

const router = new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/airports",
    name: "Airports",
    component: Airport
  },
  {
    path: "/airports/pikangikum",
    name: "Pikangikum",
    component: Pikangikum
  },
  {
    path: "/airports/poplarhill",
    name: "PoplarHill",
    component: PoplarHill
  },
  {
    path: "/airports/deerlake",
    name: "DeerLake",
    component: DeerLake
  },
  {
    path: "/airports/northspirit",
    name: "Northspirit",
    component: Northspirit
  },
  {
    path: "/airports/sandylake",
    name: "SandyLake",
    component: SandyLake
  },
  
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "myprofile",
        name: "myprofile",
        component: MyProfile,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "myprofile/changename",
        name: "changename",
        component: ChangeName,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "adminauth",
        name: "adminauth",
        component: AdminAuth,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "myprofile/changephone",
        name: "changephone",
        component: ChangePhone,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "myprofile/changeemail",
        name: "changeemail",
        component: ChangeEmail,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "airports",
        name: "airports",
        component: Airports,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "flights",
        name: "flights",
        component: Flights,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "general",
        name: "general",
        component: General,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "orders",
        name: "orders",
        component: Orders,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "products",
        name: "products",
        component: Products,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "addproduct",
        name: "addproduct",
        component: addproduct,
        meta: {hideNavigation: true,requiresAuth: true}
      },
      {
        path: "tracking",
        name: "tracking",
        component: Tracking,
        meta: {hideNavigation: true,requiresAuth: true}
      }
    ],
    meta: {hideNavigation: true,requiresAuth: true}
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  ] 
}) 
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;
