<template>
  <div :class="$styles.LoginPage">
		<headerSection/>
		<loginSection/>
	</div>
</template>

<script>
import headerSection from '@/components/HeaderSection/HeaderSection.vue'
import loginSection from '@/components/LoginSection/LoginSection.vue'

import styles from '@/pages/LoginPage/LoginPage.module.scss'

export default {
	name: 'LoginPage',
	components: {
		headerSection,
		loginSection
	},
	data() {
		return {
			$styles: styles
		}
	}
}
</script>