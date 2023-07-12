<template>
  <div class="DetailedArticlePage">
		<headerSection/>
		<detailedArticle/>
	</div>
</template>

<script>

import headerSection from '@/components/HeaderSection.vue'
import detailedArticle from '@/components/DetailedArticle.vue'

export default {
	name: 'DetailedArticlePage',
	components: {
		headerSection,
		detailedArticle,
	}
}

</script>