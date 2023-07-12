<template>
  <div :class="$styles.HeaderSection">
		<div :class="$styles.HeaderSection__Wrapper">
			<nav :class="$styles.Navigation">
				<div :class="$styles.Navigation__Logo">
					<h2 :class="$styles.Navigation__Logo_Title">
						<a href="/">Лента добра</a>
					</h2>
				</div>
				<ul :class="$styles.Navigation__List">
					<li :class="$styles.Navigation__List_Item">
						<a href="/articles" :class="$styles.Navigation__List_Link">Все статьи</a>
					</li>
					<li :class="$styles.Navigation__List_Item">
						<a href="/profile" :class="$styles.Navigation__List_Link">Профиль</a>
					</li>
				</ul>
			</nav>
			<form>
				<button :class="$styles.HeaderSection__Button" @click="login">
					{{ isAuthenticated ? 'Выйти' : 'Войти' }}
				</button>
			</form>
		</div>
  </div>
</template>

<script>
import styles from '@/components/HeaderSection/HeaderSection.module.scss'

export default {
	name: 'HeaderSection',
	data() {
		return {
			$styles: styles,
			isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
		}
	},
	methods: {
		login() {
			if (this.isAuthenticated) {
				localStorage.removeItem('isAuthenticated');
				this.isAuthenticated = false;
				this.$router.push('/login');
			} else {
				this.$router.push('/login');
			}
    }
	}
}
</script>