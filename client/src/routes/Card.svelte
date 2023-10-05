<script lang="ts">
	import { stringToColour } from '$lib';
	import type { Card } from '$lib';

	export let card: Card;
</script>

<div class="card">
	<p class="title">{card.blend_name}</p>
	<div class="description">
		<span> {card.origin}</span>
		<div class="badge badgeFloating">{card.intensifier}</div>
	</div>
	<div class="placeholder">
		<img class="image" src={card.image} alt={card.blend_name} />
	</div>
	<p>
		{card.variety}
		<em>variety</em>
	</p>
	<div class="badgeContainer">
		{#each card.notes as note}
			<div class="badge" style={`background-color: ${stringToColour(note)};`}>{note}</div>
		{/each}
	</div>
</div>

<style>
	.card {
		width: var(--card-width);
		height: 400px;
		background: #ffffff;
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04);
		border-radius: var(--element-border);
		border: 3px solid rgba(var(--color), 0.3);
		border-top: 3px solid var(--accent-color);
		padding: 25px 15px;
		margin: var(--element-margin);
		margin-top: 15px;
		overflow: hidden;
	}

	.badge {
		display: inline-block;
		background-color: var(--accent-color);
		color: var(--alt-text-color);
		padding: 2px 5px;
		border-radius: 5px;
		margin-right: 5px;
		opacity: 0.7;
		white-space: nowrap;
		height: 25px;
	}

	.badgeFloating {
		position: absolute;
		top: 45px;
		right: 10px;
		opacity: initial;
	}

	.badgeContainer {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 45px;
		overflow-x: auto;
		overflow-y: hidden;
		user-select: none;
	}

	.placeholder {
		max-width: 100%;
		min-height: var(--image-height);
		background: url(/img/img-placeholder.png) no-repeat scroll 0 0;
		background-size: contain;
		border-radius: var(--element-border);
	}

	.image {
		min-height: var(--image-height);
		max-width: 100%;
		border-radius: var(--element-border);

		/* hide alt text on image load error */
		font-size: 40px;
		color: transparent;
		text-indent: -1000%;
	}

	.title {
		font-size: var(--title-size);
		margin: 0;
	}

	.description {
		position: relative;
		margin: 0 0 10px;
	}
</style>
