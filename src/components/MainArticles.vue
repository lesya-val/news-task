<template>
  <div class="MainArticles">
    <div class="MainArticles__Wrapper">
      <articlePicture
        class="MainArticles__ArticlePicture"
        v-for="article in articles"
        :key="article.id"
        :article__data="article"
      />
    </div>
  </div>
</template>

<script>
import articlePicture from "@/components/ArticlePicture.vue";

export default {
  name: "MainArticles",
  components: {
    articlePicture,
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
          title: "Красноярцы выберут имя маленькому альпаку",
        },

        {
          id: "5",
          image: null,
          title:
            "Выставку-пристройство животных из приютов на ВДНХ перенесли в помещение",
        },
        {
          id: "6",
          image: null,
          title: "Красноярцы выберут имя маленькому альпаку",
        },

        {
          id: "7",
          image: null,
          title:
            "Выставку-пристройство животных из приютов на ВДНХ перенесли в помещение",
        },

        {
          id: "8",
          image: null,
          title:
            "С начала года на севере Китая родились более 30 амурских тигрят",
        },

        {
          id: "9",
          image: null,
          title: "В Пермском крае спасли медвежонка-сироту",
        },

        {
          id: "10",
          image: null,
          title: "В казанском зоопарке родился детеныш лемура",
        },

        {
          id: "11",
          image: null,
          title:
            "Пеликаны впервые после зимы вышли на пруд в Московском зоопарке",
        },
      ],
    };
  },
};
</script>