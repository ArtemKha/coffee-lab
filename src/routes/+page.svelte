<script lang="ts">
	import { tick, onDestroy } from 'svelte';
	import type { Card as CardType } from '$lib/Card';
	import Card from './index/Card/Card.svelte';
	import Header from './index/Header.svelte';
	import Menu from './index/Menu/Menu.svelte';
	import Filters from './index/Filters/Filters.svelte';
	import { CARD_UPDATE_INTERVAL, CHECK_INTERVAL } from './index/constants';

	/**
	 * initinal "cards" data generated on server
	 */
	export let data: { card: CardType };
	/**
	 * all "cards" fetched from server
	 */
	let cards = [data.card];
	/**
	 * state of card request
	 */
	let loading = false;
	/**
	 * active taste filter (should reset on "cards" update)
	 */
	let filters: Array<string> = [];

	/**
	 * retrieve "taste" filters from cards (computed)
	 */
	$: intensifiers = Array.from(new Set(cards.map((it) => it.intensifier)));
	/**
	 * cards to render (computed)
	 */
	$: filtered = !filters.length ? cards : cards.filter((it) => filters.includes(it.intensifier));

	/**
	 * date and time of "cards" update for counter feature
	 */
	let updateTime: Date = new Date();
	/**
	 * current date and time for counter feature
	 */
	let now: Date = new Date();

	/**
	 * time (in seconds) AFTER "cards" update (computed)
	 */
	$: timePass = (now.getTime() - updateTime.getTime()) / 1000;
	/**
	 * time (in seconds) BEFORE "cards" update (computed)
	 */
	$: counter = Math.floor(CARD_UPDATE_INTERVAL - timePass);

	$: {
		if (timePass >= CARD_UPDATE_INTERVAL) {
			fetchNewCard();
		}
	}

	let timer = setInterval(() => {
		now = new Date();
	}, CHECK_INTERVAL);

	onDestroy(() => {
		clearInterval(timer);
	});

	async function setFilter(taste: string) {
		const includes = filters.includes(taste);
		if (includes) {
			filters = filters.filter((it) => it !== taste);
		} else {
			filters = [...filters, taste];
		}
	}

	async function fetchNewCard() {
		try {
			loading = true;
			const response = await fetch('/api/card');
			const newCard = await response.json();

			if (newCard.error) {
				throw newCard.error;
			}

			cards = [...cards, newCard];

			// should reset on "cards" update
			filters = [];

			await tick();

			// scroll to bottom on "cards" update
			window.scroll({
				top: document.body.scrollHeight,
				behavior: 'smooth'
			});
		} catch (error) {
			alert(error);
		} finally {
			updateTime = new Date();

			loading = false;
		}
	}
</script>

<main class="container">
	<Header />
	<Filters {filters} options={intensifiers} {setFilter} />
	<section class="cards">
		{#each filtered as card}
			<Card {card} />
		{/each}
	</section>
	<Menu {fetchNewCard} {loading} {counter} />
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
