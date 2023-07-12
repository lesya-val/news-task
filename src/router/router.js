import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'
import ArticlesPage from '@/pages/ArticlesPage.vue'
import ArticlesItemPage from '@/pages/ArticlesItemPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/articles',
		component:ArticlesPage,
	},
	{
		path: '/article/:id',
		component: ArticlesItemPage,
	},
	{
		path: '/profile',
		component: ProfilePage,
		meta: { requiresAuth: true },
	},
	{
		path: '/login',
		component: LoginPage,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

router.beforeEach((to, from, next) => {
	const isAuthenticated = localStorage.getItem('isAuthenticated')
  
	if (to.meta.requiresAuth && !isAuthenticated) {
		next('/login')
	} else {
		next()
	}
})

export default router;