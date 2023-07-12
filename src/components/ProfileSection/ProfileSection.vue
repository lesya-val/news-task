<template>
  <div :class="$styles.ProfileSection">
    <div :class="$styles.ProfileSection__Info">
      <h1 :class="$styles.ProfileSection__Title">Профиль</h1>
      <div :class="$styles.ProfileSection__Image">
        <img src="@/image/profile.jpg" alt="Профиль">
      </div>
      <div :class="$styles.ProfileSection__Auth">
        <p :class="$styles.ProfileSection__Auth_Login">Логин: {{ user }}</p>
        <p :class="$styles.ProfileSection__Auth_Password">Пароль: {{ password }}</p>
      </div>
			<button :class="$styles.ProfileSection__Button" @click="logout">Выйти</button>
    </div>
    <div :class="$styles.ProfileSection__MyArticles">
      <h2 :class="$styles.ProfileSection__MyArticles_Title">Мои сохраненные статьи</h2>
      <div :class="$styles.ProfileSection__MyArticles_Articles">
        <articleItem
          :class="$styles.ProfileSection__ArticleItem"
          v-for="article in articles"
          :key="article.id"
          :article__data="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
import articleItem from '@/components/ArticleItem/ArticleItem.vue'

import styles from '@/components/ProfileSection/ProfileSection.module.scss'

export default {
	name: 'ProfileSection',
	components: {
		articleItem,
	},
	data () {
		return {
			user: 'User',
			password: '12345',
			$styles: styles,
			articles: [
				{
					id: "1",
					image: "1.jpg",
					title: "В Сети появилось видео со слоненком, гоняющим коров на плантации в Сочи",
				},
				{
					id: "2",
					image: "2.jpg",
					title: "Три капибары родились в Московском зоопарке",
				},
				{
					id: "3",
					image: "5.jpg",
					title: "В Пермском крае спасли медвежонка-сироту",
				},
			],
		}
	},
	methods: {
		logout() {
			localStorage.removeItem('isAuthenticated');
			this.$router.push('/login');
		},
	},
}
</script>