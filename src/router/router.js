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
			path: '/articles-id',
			component: ArticlesItemPage,
		},
		{
			path: '/profile',
			component: ProfilePage,
		},
		{
			path: '/login',
			component: LoginPage,
		},
	]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router;