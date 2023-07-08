<template>
  <div class="AllArticles">
    <div class="Articles__Wrapper">
      <articleItem
        class="AllArticles__ArticleItem"
        v-for="article in allArticles"
        :key="article.id"
        :article__data="article"
      />
    </div>
  </div>
</template>

<script>
import articleItem from "@/components/ArticleItem.vue";

export default {
  name: "MainArticles",
  components: {
    articleItem,
  },
  data() {
    return {
      allArticles: [
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
      ],
    };
  },
};
</script>