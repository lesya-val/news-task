<template>
  <div class="LoginForm">
		<form class="LoginForm__Form" @submit.prevent="login">
			<div class="LoginForm__Item">
				<label for="login">Логин:</label>
				<input id="login" v-model="username" type="text" placeholder="Введите логин" required>
			</div>
			<div class="LoginForm__Item">
				<label for="password">Пароль:</label>
				<input id="password" v-model="password" type="password" placeholder="Введите пароль" required>
			</div>
			<div v-if="error" class="ErrorMessage">
				{{ error }}
			</div>
			<button type="submit" class="LoginForm__Button">Войти</button>
		</form>
	</div>
</template>

<script>

export default {
  data() {
		return {
			username: '',
			password: '',
			error: ''
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
};
</script>