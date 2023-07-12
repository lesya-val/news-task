<template>
  <div :class="$styles.MainSection">
		<mainArticles/>
		<mainNews/>
	</div>
</template>

<script>
import mainArticles from '@/components/MainArticles/MainArticles.vue'
import mainNews from '@/components/MainNews/MainNews.vue'

import styles from '@/components/MainSection/MainSection.module.scss'

export default {
	name: 'MainSection',
	components: {
		mainArticles,
		mainNews,
	},
	data() {
		return {
			$styles: styles,
		}
	}
}
</script>