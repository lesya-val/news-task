<template>
  <div :class="$styles.AllArticles">
    <div :class="$styles.AllArticles__Wrapper">
      <articleItem
        :class="$styles.AllArticles__ArticleItem"
        v-for="article in articles"
        :key="article.id"
        :article__data="article"
      />
    </div>
  </div>
</template>

<script>
import articleItem from "@/components/ArticleItem/ArticleItem.vue";

import styles from '@/components/AllArticles/AllArticles.module.scss'

export default {
  name: "MainArticles",
  components: {
    articleItem,
  },
  data() {
    return {
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
          image: "3.jpg",
          title: "На Ямале спасли замерзшую сову",
        },
				{
					id: "4",
					image: "4.jpg",
					title: "В казанском зоопарке родился детеныш лемура",
				},
				{
					id: "5",
					image: "5.jpg",
					title: "В Пермском крае спасли медвежонка-сироту",
				},
				{
					id: "6",
					image: "6.jpg",
					title: "Красноярцы выберут имя маленькому альпаку",
				},
      ],
			$styles: styles,
    };
  },
}
</script>