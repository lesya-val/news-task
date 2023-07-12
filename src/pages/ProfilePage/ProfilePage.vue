<template>
  <div :class="$styles.ProfilePage">
		<headerSection/>
		<profileSection/>
	</div>
</template>

<script>
import headerSection from '@/components/HeaderSection/HeaderSection.vue'
import profileSection from '@/components/ProfileSection/ProfileSection.vue'

import styles from '@/pages/ProfilePage/ProfilePage.module.scss'

export default {
	name: 'ProfilePage',
	components: {
		headerSection,
		profileSection,
	},
	data() {
		return {
			$styles: styles,
		}
	}
}
</script>