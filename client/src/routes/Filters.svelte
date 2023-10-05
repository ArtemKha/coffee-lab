<script lang="ts">
	import { stringToColour } from '$lib';

	export let badges: Array<string>;
	export let filters: Array<string>;
	export let setFilter: (taste: string) => void;
</script>

<section class="filters">
	<p>
		<em class="title">Taste filter</em>
	</p>
	<div class="badgeContainer">
		{#each badges as badge, i}
			<div
				on:click={() => setFilter(badge)}
				on:keydown={(e) => {
					if (e.key === 'enter') {
						setFilter(badge);
					}
				}}
				role="button"
				tabindex={i}
				class={`badge ${filters.includes(badge) ? 'active' : 'inactive'}`}
				style={`background-color: ${stringToColour(badge)};`}
			>
				{badge}
			</div>
		{/each}
	</div>
</section>

<style>
	.filters {
		margin: var(--element-margin);
		margin-top: 40px;

		cursor: pointer;
	}

	.title {
		margin-right: 15px;
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

		border-bottom: 1px solid transparent;
	}

	.active {
		filter: none;
		border-bottom: 3px solid var(--accent-color);
	}

	.inactive {
		filter: grayscale(1);

		&:hover {
			filter: none;
		}
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
</style>
