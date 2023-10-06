<div class="badgeContainer">
	<slot />
</div>

<style>
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
