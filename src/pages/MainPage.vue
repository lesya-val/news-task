<template>
  <div class="MainPage">
		<headerSection/>
    <mainSection/>
	</div>
</template>

<script>

	import headerSection from '@/components/HeaderSection.vue'
  import mainSection from '@/components/MainSection.vue'

	export default {
		name: 'MainPage',
		components: {
			headerSection,
			mainSection,
		},
		data () {
			return {
				
			}
		}
	}
</script>

<style>
	.MainPage {
		background-color: #FFFFF1;
	}
</style>