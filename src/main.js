import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/style.scss'
import components from '@/components/UI'
import router from '@/router/router'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

app
	.use(router)
	.mount('#app')