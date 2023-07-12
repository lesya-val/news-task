<template>
  <div class="ProfileSection">
    <div class="ProfileSection__Info">
      <h1 class="ProfileSection__Title">Профиль</h1>
      <div class="ProfileSection__Image">
        <img src="../image/profile.jpg" alt="Профиль">
      </div>
      <div class="ProfileSection__Auth">
        <p class="ProfileSection__Auth--Login">Логин: {{ user }}</p>
        <p class="ProfileSection__Auth--Password">Пароль: {{ password }}</p>
      </div>
			<button class="ProfileSection__Button" @click="logout">Выйти</button>
    </div>
    <div class="ProfileSection__MyArticles">
      <h2 class="ProfileSection__MyArticles--Title">Мои сохраненные статьи</h2>
      <div class="ProfileSection__MyArticles--Articles">
        <articleItem
          class="ProfileSection__ArticleItem"
          v-for="article in articles"
          :key="article.id"
          :article__data="article"
        />
      </div>
    </div>
  </div>
</template>

<script>

import articleItem from '@/components/ArticleItem.vue'

export default {
	name: 'ProfileSection',
	components: {
		articleItem,
	},
	data () {
		return {
			user: 'User',
			password: '12345',

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