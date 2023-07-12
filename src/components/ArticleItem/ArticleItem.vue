<template>
  <div :class="$styles.ArticleItem">
    <div v-if="article__data.image" :class="$styles.ArticleItem__Image">
      <img :src="require('@/image/' + article__data.image)" alt="" />
    </div>
    <router-link :to="'/article/' + article__data.id">
			<p :class="$styles.ArticleItem__Title">{{ article__data.title }}</p>
		</router-link>
  </div>
</template>

<script>
import styles from '@/components/ArticleItem/ArticleItem.module.scss'

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
		return {
			$styles: styles,
		}
	}
}
</script>