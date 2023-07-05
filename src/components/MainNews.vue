<template>
  <div class="MainNews">
		<div class="MainNews__Wrapper">
			<h3 class="MainNews__Title">{{title}}</h3>
			<articleText
				class="MainNews__Item"
				v-for="articleText in articlesText"
				:key="articleText.id"
				:articleText__data="articleText"
			/>
		</div>
		</div>
</template>

<script>

	import articleText from '@/components/ArticleText.vue';

	export default {
		name: 'MainNews',
		components: {
			articleText,
		},
		data () {
			return {
				title: 'Главные новости',
				"articlesText": [
        {
          id: "1",
          title: "В Московском зоопарке появилась на свет красноногая черепаха"
        },

        {
          id: "2",
          title: "В Петербурге спасли детеныша ладожской нерпы"
        },

        {
          id: "3",
          title: "Пеликаны впервые после зимы вышли на пруд в Московском зоопарке"
        },

        {
          id: "4",
          title: "В Петербурге спасли лося, которого сбил автомобиль"
        },
      ]
			}
		}
	}
</script>

<style lang='scss'>
	.MainNews {
		&__Wrapper {
			display: flex;
			flex-direction: column;
			row-gap: 20px;
			align-items: center;
			justify-content: center;
		}

		&__Item {
			min-width: 250px;
		}

		&__Title {
			font-size: 20px;
			margin-bottom: 15px;
			font-weight: 500;
			letter-spacing: 3px;
		}
	}
</style>