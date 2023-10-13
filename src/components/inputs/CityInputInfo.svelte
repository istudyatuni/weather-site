<script context="module">
	import { createEventDispatcher } from 'svelte'
</script>

<script>
	export let city = {}

	const dispatch = createEventDispatcher()
	function select(e) {
		if (e.type === 'keypress' && e.key !== 'Enter') {
			// skip any keys except Enter
			return
		}
		dispatch('select', city)
	}
</script>

<div
	class="outer"
	on:click={select}
	on:keypress={select}
	role="button"
	tabindex="0">
	<div>{city.name}</div>
	<div class="details">{city.admin || ''}</div>
</div>

<style>
	.outer {
		background-color: var(--second-bg-color);
		padding: 5px 10px;
		border-radius: 10px;
		margin-bottom: 4px;
		cursor: pointer;
	}
	.details {
		color: var(--second-fg-color);
	}
</style>
