<script lang="ts">
	import type { AriaRole, HTMLHtmlAttributes } from 'svelte/elements';
	import type { OnAction } from './types';

	interface $$Props extends HTMLHtmlAttributes {
		title: string;
		role: AriaRole;
		float?: boolean;
		onAction?: OnAction;
		active?: boolean;
	}

	export let title: string;
	export let role: AriaRole;
	export let float: boolean = false;
	export let onAction: OnAction = undefined;
	export let active: boolean = false;

	$: asButton = role === 'button';

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'enter') {
			if (onAction) {
				onAction();
			}
		}
	}
</script>

<div
	{...$$restProps}
	on:keydown={onKeyDown}
	on:click={onAction}
	class="badge"
	class:float
	class:asButton
	class:active
	class:inactive={!active}
	{role}
>
	{title}
</div>

<style>
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

	.asButton {
		cursor: pointer;
		&.active {
			filter: none;
			border-bottom: 3px solid var(--accent-color);
		}

		&.inactive {
			filter: grayscale(1);

			&:hover {
				filter: none;
			}
		}
	}

	.float {
		position: absolute;
		top: 45px;
		right: 10px;
		opacity: initial;
	}
</style>
