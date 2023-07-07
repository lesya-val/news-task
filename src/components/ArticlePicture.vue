<template>
  <div class="ArticlePicture">
    <div v-if="article__data.image" class="ArticlePicture__Image">
      <img :src="require('../image/' + article__data.image)" alt="" />
    </div>
    <router-link :to="'/article/' + article__data.id">
			<p class="ArticlePicture__Title">{{ article__data.title }}</p>
		</router-link>
  </div>
</template>

<script>
export default {
  name: "ArticlePicture",
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