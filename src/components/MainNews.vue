<template>
  <div class="MainNews">
    <div class="MainNews__Wrapper">
      <h3 class="MainNews__Title">{{title}}</h3>
      <ArticleItem
        class="MainArticles__Item"
        v-for="article in articles"
        :key="article.id"
        :article__data="article"
      />
    </div>
  </div>
</template>

<script>

  import ArticleItem from '@/components/ArticleItem.vue';
  
  export default {
    name: 'MainNews',
    components: {
      ArticleItem,
    },
    data () {
      return {
        title: 'Главные новости',
        articles: [
          {
            id: "1",
            image: null,
            title: "Красноярцы выберут имя маленькому альпаку",
          },

          {
            id: "2",
            image: null,
            title:
              "Выставку-пристройство животных из приютов на ВДНХ перенесли в помещение",
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