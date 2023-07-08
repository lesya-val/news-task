<template>
  <div class="ArticleItem">
    <div v-if="article__data.image" class="ArticleItem__Image">
      <img :src="require('../image/' + article__data.image)" alt="" />
    </div>
    <router-link :to="'/article/' + article__data.id">
			<p class="ArticleItem__Title">{{ article__data.title }}</p>
		</router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    article__data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>