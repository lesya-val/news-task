<template>
  <div class="HeaderSection">
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