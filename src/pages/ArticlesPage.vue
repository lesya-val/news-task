<template>
  <div class="ArticlesPage">
		<headerSection/>
		<allArticles/>
	</div>
</template>

<script>


	import headerSection from '@/components/HeaderSection.vue'
	import allArticles from '@/components/AllArticles.vue'

	export default {
		name: 'ArticlesPage',
		components: {
			headerSection,
			allArticles,
		},
		data () {
			return {
				
			}
		}
	}
</script>

<style>
</style>