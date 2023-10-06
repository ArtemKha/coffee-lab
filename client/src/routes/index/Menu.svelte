<script lang="ts">
	export let fetchNewCard: () => void;
	export let timePass: number;
	export let loading = false;
</script>

<section class="menu">
	<button disabled={loading} type="button" class="action" class:loading on:click={fetchNewCard}
		>{loading ? '...' : 'Load more (' + timePass + ')'}</button
	>
</section>

<style>
	.menu {
		width: 100%;
		position: sticky;
		bottom: 20px;
		left: 0px;
		display: flex;
		justify-content: center;
	}

	.action {
		font-size: 20px;
		padding: 10px;
		width: 300px;
		background-color: var(--secondary-color);
		border-radius: var(--element-border);
		color: var(--alt-text-color);
		text-align: center;
		border: 0;
		box-shadow: 0;
		outline: none;
		cursor: pointer;

		&:disabled {
			cursor: auto;
		}
	}

	.loading {
		filter: grayscale(1);
	}
</style>
