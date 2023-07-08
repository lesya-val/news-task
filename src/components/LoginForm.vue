<template>
  <div class="LoginForm">
		<form class="LoginForm__Form" action="#" method="post">
			<div class="LoginForm__Item">
				<label for="login">Логин:</label>
				<input id="login" type="email" placeholder="Введите E-mail" required>
			</div>
			<div class="LoginForm__Item">
				<label for="password">Пароль:</label>
				<input id="password" type="password" placeholder="Введите пароль" required>
			</div>
			<button class="LoginForm__Button">Войти</button>
		</form>
	</div>
</template>

<script>

	export default {
		name: 'LoginPage',
		components: {
			
		},
		data () {
			return {
				
			}
		}
	}
</script>