<script lang="ts">
	import { stringToColour } from '$lib';
	import type { Card } from '$lib/Card';
	import Badge from '$lib/components/Badge.svelte';
	import BadgeContainer from '$lib/components/BadgeContainer.svelte';

	export let card: Card;
</script>

<div class="card">
	<p class="title">{card.blend_name}</p>
	<div class="description">
		<span>{card.origin}</span>
		<Badge title={card.intensifier} float={true} role="listitem" />
	</div>
	<div class="placeholder">
		<img class="image" src={card.image} alt={card.blend_name} />
	</div>
	<p>
		{card.variety}
		<em>variety</em>
	</p>
	<BadgeContainer>
		{#each card.notes as note}
			<Badge title={note} style={`background-color: ${stringToColour(note)};`} role="listitem" />
		{/each}
	</BadgeContainer>
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

	.placeholder {
		max-width: 100%;
		min-height: var(--image-height);
		background: url(/img/img-placeholder.png) no-repeat;
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
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		font-size: var(--title-size);
		margin: 0;
	}

	.description {
		position: relative;
		margin: 0 0 10px;
	}
</style>
