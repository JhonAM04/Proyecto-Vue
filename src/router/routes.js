import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Products from "../views/Products.vue"
import Product from "../views/Product.vue"

const routes = [
    { path: "/", component: Home},
    { path: "/products", component: Products},
    { path: "/product/:id", component: Product}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router