<script lang="ts">
	import { stringToColour } from '$lib';
	import Badge from '$lib/components/Badge.svelte';
	import BadgeContainer from '$lib/components/BadgeContainer.svelte';

	export let options: Array<string>;
	export let filters: Array<string>;
	export let setFilter: (taste: string) => void;
</script>

<section class="filters">
	<p>
		<em class="title">Taste filter</em>
	</p>
	<BadgeContainer>
		{#each options as badge, i}
			<Badge
				title={badge}
				onAction={() => setFilter(badge)}
				role="button"
				tabindex={i + 1}
				active={filters.includes(badge)}
				style={`background-color: ${stringToColour(badge)};`}
			/>
		{/each}
	</BadgeContainer>
</section>

<style>
	.filters {
		margin: var(--element-margin);
		margin-top: 40px;
	}

	.title {
		margin-right: 15px;
	}
</style>
