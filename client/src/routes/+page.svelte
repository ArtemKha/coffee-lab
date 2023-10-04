<script lang="ts">
	import type { Cards } from './types';
	import Card from './Card.svelte';
	import Header from './Header.svelte';
	import Menu from './Menu.svelte';

	export let data: { cards: Cards };
</script>

<main class="container">
	<Header />
	<section class="cards">
		{#each data.cards as card}
			<Card {card} />
		{/each}
	</section>
	<Menu />
</main>

<style>
	:root {
		/* colors */
		--color: #d3d3d3;
		--alt-text-color: #fff;
		--accent-color: #ff6347;
		--secondary-color: #ff7669;

		/* sizes */
		--element-margin: 5px;
		--element-border: 20px;
		--card-width: 300px;
		--title-size: 24px;
		--image-height: 198px;
		@media (min-width: 420px) {
			--image-height: 240px;
			--card-width: 320px;
		}
	}
	.container {
		width: 100%;
		max-width: 350px;
		margin: 0 auto;

		@media screen and (min-width: 728px) {
			max-width: 728px;
		}
		@media screen and (min-width: 1080px) {
			max-width: 1080px;
		}
	}
	.cards {
		margin: 25px 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
