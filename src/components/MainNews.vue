<template>
  <div class="MainNews">
    <div class="MainNews__Wrapper">
      <h3 class="MainNews__Title">Главные новости</h3>
      <articleItem
        class="MainArticles__Item"
        v-for="article in articles"
        :key="article.id"
        :article__data="article"
      />
    </div>
  </div>
</template>

<script>

import articleItem from '@/components/ArticleItem.vue';

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
		}
	}
}

</script>