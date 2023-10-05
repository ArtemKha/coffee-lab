<script lang="ts">
	import type { Card as CardType, Cards } from '$lib';
	import { afterUpdate, tick } from 'svelte';
	import Card from './Card.svelte';
	import Header from './Header.svelte';
	import Menu from './Menu.svelte';
	import Filters from './Filters.svelte';

	export let data: { card: CardType };
	let cards = [data.card];
	let filtered: Cards = cards;
	let intensifier: Array<string> = [];
	let order = 1;
	let filters: Array<string> = [];

	async function setFilter(taste: string) {
		const includes = filters.includes(taste);
		if (includes) {
			filters = filters.filter((it) => it !== taste);
		} else {
			filters = [...filters, taste];
		}
	}

	async function fetchNewCard() {
		order += 1;
		const response = await fetch(`/api/cards/${order}`);
		const newCard = await response.json();
		cards = [...cards, newCard];
		filtered = !filters.length ? cards : cards.filter((it) => filters.includes(it.intensifier));
		filters = [];

		await tick();

		window.scroll({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		});
	}

	afterUpdate(() => {
		intensifier = Array.from(new Set(cards.map((it) => it.intensifier)));
		filtered = cards;
		filtered = !filters.length ? cards : cards.filter((it) => filters.includes(it.intensifier));
	});
</script>

<main class="container">
	<Header />
	<Filters {filters} badges={intensifier} {setFilter} />
	<section class="cards">
		{#each filtered as card}
			<Card {card} />
		{/each}
	</section>
	<Menu {fetchNewCard} />
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
		margin-bottom: 25px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
