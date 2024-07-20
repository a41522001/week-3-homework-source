import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from "../views/Product.vue";
import Optical from '@/views/product/Optical.vue';
import Sunglasses from '@/views/product/Sunglasses.vue';
import Location from "@/views/Location.vue";
import Zhongshan from '@/views/Zhongshan.vue';
import Question from "@/views/Question.vue";
import Blog from "@/views/Blog.vue";
import BlogMore from "@/views/BlogMore.vue";
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: "/product",
    name: "product",
    component: Product,
    children: [
      {
        path: "",
        name: "optical",
        component: Optical
      },
      {
        path: "sunglasses",
        name: "sunglasses",
        component: Sunglasses
      }
    ]
  },
  {
    path: "/location",
    name: "location",
    component: Location
  },
  {
    path: "/zhongshan",
    name: "zhongshan",
    component: Zhongshan
  },
  {
    path: "/question",
    name: "question",
    component: Question
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/blogMore",
    name: "blogMore",
    component: BlogMore
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
