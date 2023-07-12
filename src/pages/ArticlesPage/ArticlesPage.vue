<template>
  <div :class="$styles.ArticlesPage">
		<headerSection/>
		<allArticles/>
	</div>
</template>

<script>
import headerSection from '@/components/HeaderSection/HeaderSection.vue'
import allArticles from '@/components/AllArticles/AllArticles.vue'

import styles from '@/pages/ArticlesPage/ArticlesPage.module.scss'

export default {
	name: 'ArticlesPage',
	components: {
		headerSection,
		allArticles,
	},
	data() {
		return {
			$styles: styles,
		}
	}
}
</script>