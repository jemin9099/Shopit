import { createRouter, createWebHistory } from "vue-router";
import Home from'@/components/Home.vue'
import ProductList from'@/components/ProductList/ProductList.vue'
import Ragister from '@/components/Ragister.vue'
import Login from'@/components/Login.vue'
import Product from '@/components/Product.vue'

const routes = [
    {
        name:'Ragister',
        path:'/ragister',
        component:Ragister
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'ProductList',
        path:'/product-list',
        component:ProductList
    },
    {
        name:'Product',
        path:'/product',
        component:Product
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;