<template>
  <div class="ProfileSection">
		<div class="ProfileSection__Info">
			<h1 class="ProfileSection__Title">Профиль</h1>
			<div class="ProfileSection__Image">
				<img src="../image/profile.jpg" alt="Профиль">
			</div>
			<div class="ProfileSection__Auth">
				<p class="ProfileSection__Login">Логин: {{ user }}</p>
				<p class="ProfileSection__Password">Пароль: {{ password }}</p>
			</div>
		</div>
		<div class="ProfileSection__MyArticles">
			<h2 class="ProfileSection__MyArticles--Title">Мои сохраненные статьи</h2>
			<div class="ProfileSection__MyArticles--Articles">
				<articleItem
					class="ProfileSection__ArticleItem"
					v-for="article in myArticles"
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

				myArticles: [
					{
						id: "1",
						image: "1.jpg",
						title:
							"В Сети появилось видео со слоненком, гоняющим коров на плантации в Сочи",
					},

					{
						id: "2",
						image: "2.jpg",
						title: "Три капибары родились в Московском зоопарке",
					},
        ],
			}
		}
	}
</script>

<style lang="scss">
	.ProfileSection {
		display: flex;
    column-gap: 30px;
    margin: 0 auto;
    justify-content: space-between;

		&__Info {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 20px;
		}

		&__Title {
			font-size: 25px;
			font-weight: 600;
			text-align: center;
		}

		&__Image img {
			max-width: 300px;
			height: auto;
		}

		&__Auth {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 10px;
			border: 1px solid ;
			padding: 10px;
		}

		&__MyArticles {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 20px;
		}

		&__MyArticles--Title {
			font-size: 25px;
			font-weight: 600;
			text-align: center;
		}

		&__MyArticles--Articles {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			column-gap: 20px;
			row-gap: 20px;
		}
	}
</style>