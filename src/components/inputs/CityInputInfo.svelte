<script context="module">
	import { createEventDispatcher } from 'svelte'
</script>

<script>
	export let city = {},
		allow_delete = false

	const dispatch = createEventDispatcher()
	/** Dispatch 'name' event. If event is keypress, only Enter key is accepted */
	function handler(name) {
		return (e) => {
			if (e.type === 'keypress' && e.code !== 'Enter') {
				// skip any keys except Enter
				return
			}
			dispatch(name, city)
		}
	}
	let select = handler('select')
	let deletion = handler('deletion')
</script>

<div
	class="outer"
	on:click={select}
	on:keypress={select}
	role="button"
	tabindex="0">
	<div class="flex">
		<span>{city.name}</span>
		<span
			class:hidden={!allow_delete}
			on:click|stopPropagation={deletion}
			on:keypress|stopPropagation={deletion}
			role="button"
			tabindex="0">&times;</span>
	</div>
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
	.flex {
		display: flex;
		justify-content: space-between;
	}
	.hidden {
		display: none;
	}
</style>
