<template>
  <div class="MainArticles">
		<div class="MainArticles__Wrapper">
			<articlePicture
			class="MainArticles__ArticlePicture"
      v-for="article in articles"
      :key="article.id"
      :article__data="article"
			/>
			<articleText
				class="MainArticles__ArticleText"
				v-for="articleText in articlesText"
				:key="articleText.id"
				:articleText__data="articleText"
			/>
		</div>
  </div>
</template>

<script>

  import articlePicture from '@/components/ArticlePicture.vue'
  import articleText from '@/components/ArticleText.vue'

export default {
  name: 'MainArticles',
  components: {
    articlePicture,
    articleText,
  },
  data () {
    return {
      "articles": [
        {
          id: "1",
          image: "1.jpg",
          title: "В Сети появилось видео со слоненком, гоняющим коров на плантации в Сочи"
        },

        {
          id: "2",
          image: "2.jpg",
          title: "Три капибары родились в Московском зоопарке"
        },

        {
          id: "3",
          image: "3.jpg",
          title: "На Ямале спасли замерзшую сову"
        },
      ],

      "articlesText": [
        {
          id: "1",
          title: "Красноярцы выберут имя маленькому альпаку"
        },

        {
          id: "2",
          title: "Выставку-пристройство животных из приютов на ВДНХ перенесли в помещение"
        },

        {
          id: "3",
          title: "С начала года на севере Китая родились более 30 амурских тигрят"
        },

        {
          id: "4",
          title: "В Пермском крае спасли медвежонка-сироту"
        },

        {
          id: "5",
          title: "В казанском зоопарке родился детеныш лемура"
        },

        {
          id: "6",
          title: "Пеликаны впервые после зимы вышли на пруд в Московском зоопарке"
        },
      ]
    }
  }
}
</script>

<style lang='scss'>
  .MainArticles {
		&__Wrapper {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			column-gap: 30px;
			row-gap: 30px;

			border-right: 1px solid #3B170683;
		}
  }
</style>