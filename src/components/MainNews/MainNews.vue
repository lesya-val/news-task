<template>
  <div :class="$styles.MainNews">
    <div :class="$styles.MainNews__Wrapper">
      <h3 :class="$styles.MainNews__Title">Главные новости</h3>
      <articleItem
				:class="$styles.MainArticles__Item"
        v-for="article in articles"
        :key="article.id"
        :article__data="article"
      />
    </div>
  </div>
</template>

<script>
import articleItem from '@/components/ArticleItem/ArticleItem.vue'

import styles from '@/components/MainNews/MainNews.module.scss'

export default {
	name: 'MainNews',
	components: {
		articleItem,
	},
	data () {
		return {
			articles: [
				{
					id: "1",
					image: null,
					title: "В казанском зоопарке родился детеныш лемура",
				},
				{
					id: "2",
					image: null,
					title: "В Пермском крае спасли медвежонка-сироту",
				},
				{
					id: "3",
					image: null,
					title: "Красноярцы выберут имя маленькому альпаку",
				},
			],
			$styles: styles,
		}
	}
}
</script>