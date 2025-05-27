import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Gallery from '@/components/gallery/Gallery.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Repertuar from '@/components/Repertuar.vue' // <--- NOWO DODANE

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/gallery', name: 'Gallery', component: Gallery },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/repertuar', name: 'Repertuar', component: Repertuar } // <--- NOWO DODANE
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
