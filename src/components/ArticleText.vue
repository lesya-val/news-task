<template>
  <div class="ArticleText">
		<p class="ArticleText__Title">{{articleText__data.title}}</p>
	</div>
</template>

<script>

	export default {
		name: 'ArticleText',
		props: {
			articleText__data: {
				type: Object,
				default() {
					return {}	
				}
			},
			
		},
		data () {
			return {
				
			}
		}
	}
</script>

<style lang='scss'>
	.ArticleText {
		display: flex;
		flex-basis: 30%;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding: 10px 20px;
		height: 80px;

		box-shadow: 0 0 8px #A0522D;
	}
</style>