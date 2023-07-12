<template>
  <div :class="$styles.LoginSection">
		<div :class="$styles.LoginSection__Wrapper">
			<h1 :class="$styles.LoginSection__Title">Авторизация</h1>
			<loginForm/>
		</div>
	</div>
</template>

<script>
import loginForm from '@/components/LoginForm/LoginForm.vue'

import styles from '@/components/LoginSection/LoginSection.module.scss'

export default {
	name: 'LoginSection',
	components: {
		loginForm,
	},
	data() {
		return {
			$styles: styles,
		}
	}
}
</script>