<template>
  <div class="MainSection">
    <MyContainer>
      <div class="MainSection__Wrapper">
        <mainArticles/>
        <mainNews/>
      </div>
    </MyContainer>
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

<style lang='scss'>
  .MainSection {
    &__Wrapper {
      display: flex;
			align-items: center;
      justify-content: space-between;
			column-gap: 20px;
    }
  }
</style>