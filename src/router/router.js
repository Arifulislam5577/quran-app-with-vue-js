import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Quran from "../views/Quran.vue";
import Shop from "../views/shop/Shop.vue";
import ProductDetails from "../views/shop/ProductDetails.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/quran", name: "Quran", component: Quran },
  { path: "/shop", name: "Shop", component: Shop },
  {
    path: "/productDetails/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
