<template>
	<div :class="$styles.DetailedArticle">
    <div :class="$styles.DetailedArticle__Wrapper">
      <h1 :class="$styles.DetailedArticle__Title">Заголовок статьи</h1>
      <div :class="$styles.DetailedArticle__Image">
        <img src="@/image/1.jpg" alt="Фотография к статье">
      </div>
      <p :class="$styles.DetailedArticle__Text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Commodi atque quam sapiente veniam eveniet eum perferendis quia, laborum harum sunt blanditiis reiciendis?
        Ad aliquid necessitatibus eligendi suscipit deleniti aperiam autem? <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Commodi atque quam sapiente veniam eveniet eum perferendis quia, laborum harum sunt blanditiis reiciendis?
        Ad aliquid necessitatibus eligendi suscipit deleniti aperiam autem? <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Commodi atque quam sapiente veniam eveniet eum perferendis quia, laborum harum sunt blanditiis reiciendis?
        Ad aliquid necessitatibus eligendi suscipit deleniti aperiam autem?
      </p>
    </div>
	</div>
</template>

<script>
import styles from '@/components/DetailedArticle/DetailedArticle.module.scss'

export default {
	name: 'DetailedArticle',
	data() {
		return {
			$styles: styles,
		}
	}
}
</script>