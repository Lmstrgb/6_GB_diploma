import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import Blog from '@/views/Blog.vue';
import BlogDetails from '@/views/BlogDetails.vue';
import Project from '@/views/Project.vue';
import ProjectDetails from '@/views/ProjectDetails.vue';
import NotFound from '@/views/NotFound.vue';
import Contacts from '@/views/Contacts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog/:pageNumber?',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blogdetails/:tag?',
    name: 'BlogDetails',
    component: BlogDetails
  },
  {
    path: '/project/:category?/:pageNumber?',
    name: 'Project',
    component: Project
  },
  {
    path: '/projectdetails/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFound
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

//Этот был рабочий если адрес нужен https://lmstrgb.github.io/6_GB_diploma/
// const router = createRouter({
//   history: createWebHistory(process.env.NODE_ENV === 'production'
//     ? '/6_GB_diploma/'
//     : '/'),
//   routes
// })

const router = createRouter({
  history: createWebHistory('/6_GB_diploma/ReserveService/'),  // Фиксированный базовый путь
  routes
})


export default router;
