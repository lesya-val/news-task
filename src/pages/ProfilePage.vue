<template>
  <div class="ProfilePage">
		<headerSection/>
		<profileSection/>
	</div>
</template>

<script>

	import headerSection from '@/components/HeaderSection.vue'
	import profileSection from '@/components/ProfileSection.vue'

	export default {
		name: 'ProfilePage',
		components: {
			headerSection,
			profileSection,
		}
	}

</script>