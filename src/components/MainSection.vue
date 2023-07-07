<template>
  <div class="MainSection">
		<div class="MainSection__Wrapper">
			<mainArticles/>
			<mainNews/>
		</div>
  </div>
</template>

<script>

  import mainArticles from '@/components/MainArticles.vue'
  import mainNews from '@/components/MainNews.vue'

  export default {
    name: 'MainSection',
    components: {
      mainArticles,
      mainNews,
    },
    data () {
      return {
        
      }
    }
  }
</script>