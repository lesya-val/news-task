<template>
  <div class="MyContainer">
		<slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MyContainer',
    data () {
      return {
        
      }
    }
  }
</script>

<style lang='scss'>
  .MyContainer {
    max-width: 1300px;
    padding: 20px 20px;
    margin: 0 auto;
  }
</style>