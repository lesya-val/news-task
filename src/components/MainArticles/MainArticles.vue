<template>
  <div :class="$styles.MainArticles">
    <div :class="$styles.MainArticles__Wrapper">
      <articleItem
				:class="$styles.MainArticles__ArticleItem"
        v-for="article in articles"
        :key="article.id"
        :article__data="article"
      />
    </div>
  </div>
</template>

<script>
import articleItem from "@/components/ArticleItem/ArticleItem.vue"

import styles from '@/components/MainArticles/MainArticles.module.scss'

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
          title:
            "В Сети появилось видео со слоненком, гоняющим коров на плантации в Сочи",
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
          image: null,
          title: "В Дагестане спасли застрявшего в вентиляционной шахте котенка",
        },

        {
          id: "5",
          image: null,
          title: "Выставку-пристройство животных из приютов на ВДНХ перенесли в помещение",
        },

        {
          id: "6",
          image: null,
          title: "С начала года на севере Китая родились более 30 амурских тигрят",
        },

        {
          id: "7",
          image: null,
          title: "В Ачинске полицейские спасли забежавшую в магазин перепуганную косулю",
        },

        {
          id: "8",
          image: null,
          title: "В аэропорту Внуково нашелся сбежавший неделю назад из переноски кот",
        },

        {
          id: "9",
          image: null,
          title: "Пеликаны впервые после зимы вышли на пруд в Московском зоопарке",
        },
      ],
			$styles: styles,
    }
  },
}
</script>