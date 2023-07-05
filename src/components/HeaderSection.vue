<template>
  <div class="HeaderSection">
    <MyContainer>
      <div class="HeaderSection__Wrapper">
        <nav class="Navigation">
          <div class="Navigation__Logo">
            <h2 class="Navigation__Logo--Title">
              <a href="/">Лента добра</a>
            </h2>
          </div>
          <ul class="Navigation__List">
            <li class="Navigation__Item">
              <a href="/articles" class="Navigation__Link">Все статьи</a>
            </li>
            <li class="Navigation__Item">
              <a href="/profile" class="Navigation__Link">Профиль</a>
            </li>
          </ul>
        </nav>
				<form action="/login">
					<button class="HeaderSection__Button">Войти</button>
				</form>
      </div>
    </MyContainer>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSection',
    components: {
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
  .HeaderSection {
    &__Wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 20px;

      font-size: 20px;
    }

    &__Button {
      padding: 10px;
      background-color: #A0522D;
      color: #FFFFF1;
      font-size: 20px;
      border-radius: 5px;
    }
  }

  .Navigation {
    display: flex;
    align-items: center;
    column-gap: 50px;

    &__List {
      display: flex;
      align-items: center;
      column-gap: 50px;
    }
    
    &__Logo {
      padding: 25px;
      background-color: #A0522D;
      border-radius: 5px;
    }

    &__Logo--Title {
      font-size: 22px;
      color: #FFFFF1;
    }
  }
</style>