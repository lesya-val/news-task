<template>
  <div class="LoginPage">
		<h1>Вход</h1>
		<form class="LoginPage__Form">
			<label for="login">Логин:</label>
			<input type="text" id="login" class="LoginPage__Wrapper-Login">
			<label for="password">Пароль:</label>
			<input type="text" id="password" class="LoginPage__Wrapper-Password">
		</form>
		<button class="LoginPage__Button">Войти</button>
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

<style lang="scss">
	.LoginPage {
		&__Wrapper-Login {
			border: 1px solid black;
		}

		&__Wrapper-Password {
			border: 1px solid black;
		}
	}
</style>