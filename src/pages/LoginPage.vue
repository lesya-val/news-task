<template>
  <div class="LoginPage">
		<headerSection/>
		<div class="LoginPage__Wrapper">
			<h1 class="LoginPage__Title">Авторизация</h1>
			<loginForm/>
		</div>
	</div>

</template>

<script>

import headerSection from '@/components/HeaderSection.vue';
import loginForm from '@/components/LoginForm.vue'

export default {
	name: 'LoginPage',
	components: {
		headerSection,
		loginForm,
	}
}

</script>