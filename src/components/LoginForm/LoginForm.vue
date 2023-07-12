<template>
  <div :class="$styles.LoginForm">
		<form :class="$styles.LoginForm__Form" @submit.prevent="login">
			<div :class="$styles.LoginForm__Item">
				<label for="login">Логин:</label>
				<input id="login" v-model="username" type="text" placeholder="Введите логин" required>
			</div>
			<div :class="$styles.LoginForm__Item">
				<label for="password">Пароль:</label>
				<input id="password" v-model="password" type="password" placeholder="Введите пароль" required>
			</div>
			<div v-if="error" :class="$styles.LoginForm__ErrorMessage">
				{{ error }}
			</div>
			<button type="submit" :class="$styles.LoginForm__Button">Войти</button>
		</form>
	</div>
</template>

<script>
import styles from '@/components/LoginForm/LoginForm.module.scss'

export default {
  data() {
		return {
			username: '',
			password: '',
			error: '',
			$styles: styles,
		}
	},
	methods: {
		login() {
			if (this.username === 'User' && this.password === '12345') {
				localStorage.setItem('isAuthenticated', true)
				this.$router.push('/profile')
			} else {
				this.error = 'Имя пользователя или пароль введены неверно'
			}
		}
	}
}
</script>