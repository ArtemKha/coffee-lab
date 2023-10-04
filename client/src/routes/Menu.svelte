<section class="menu">
	<button disabled={false} type="button" class="action"> Load more </button>
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
</style>
