<template>
  <div class="ArticlesItemPage">
		<headerSection/>
		<detailedArticle/>
	</div>
</template>

<script>

	import headerSection from '@/components/HeaderSection.vue'
	import detailedArticle from '@/components/DetailedArticle.vue'

	export default {
		name: 'ArticlesItemPage',
		components: {
			headerSection,
			detailedArticle,
		},
		data () {
			return {
				
			}
		}
	}
</script>

<style>
</style>