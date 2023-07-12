<template>
  <div :class="$styles.DetailedArticlePage">
		<headerSection/>
		<detailedArticle/>
	</div>
</template>

<script>
import headerSection from '@/components/HeaderSection/HeaderSection.vue'
import detailedArticle from '@/components/DetailedArticle/DetailedArticle.vue'

import styles from '@/pages/DetailedArticlePage/DetailedArticlePage.module.scss'

export default {
	name: 'DetailedArticlePage',
	components: {
		headerSection,
		detailedArticle,
	},
	data() {
		return {
			$styles: styles,
		}
	}
}
</script>