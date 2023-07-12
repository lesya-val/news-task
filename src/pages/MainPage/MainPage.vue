<template>
  <div :class="$styles.MainPage">
		<headerSection/>
    <mainSection/>
	</div>
</template>

<script>
import headerSection from '@/components/HeaderSection/HeaderSection.vue'
import mainSection from '@/components/MainSection/MainSection.vue'

import styles from '@/pages/MainPage/MainPage.module.scss'

export default {
	name: 'MainPage',
	components: {
		headerSection,
		mainSection,
	},
	data() {
		return {
			$styles: styles,
		}
	}
}
</script>