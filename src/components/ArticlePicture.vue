<template>
  <div class="ArticlePicture">
		<div class="ArticlePicture__Image">
			<img :src="require('../image/' + article__data.image)" alt=''>
		</div>
			<p class="ArticlePicture__Title">{{ article__data.title }}</p>
	</div>
</template>

<script>


	export default {
		name: 'ArticlePicture',
		props: {
			article__data: {
				type: Object,
				default() {
					return {}	
				}
			}
		},
		data () {
			return {
				
			}
		}
	}
</script>

<style lang='scss'>
	.ArticlePicture {
		display: flex;
		flex-basis: 30%;
		flex-direction: column;
		align-items: center;
		row-gap: 10px;
		
		box-shadow: 0 0 8px #57230B;
		padding: 10px 20px;
		height: 230px;

		&__Image img {
			max-width: 250px;
		}
	}

</style>