import {createRouter, createWebHistory} from 'vue-router'

import Home from "@/views/Home";
import Catalog from "@/views/catalog/Catalog";
import Profile from "@/views/profile/Profile";
import Product from "@/views/catalog/Product";
import Cart from "@/views/cart/Cart";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/catalog",
        name: "catalog",
        component: Catalog,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },
    {
        path: "/product",
        name: "product",
        component: Product,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;