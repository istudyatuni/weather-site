<script>
	/** Could be any object. Single values, arrays and objects are supported */
	export let object = []
	/** Leave empty to hide */
	export let name = ''

	$: object_is_array = is_array(object)
	$: object_entries = Object.entries(object)
	$: object_is_empty =
		(object_is_array && object.length === 0) ||
		(is_object(object) && object_entries.length === 0)

	function is_object(o) {
		return o instanceof Object
	}
	function is_array(o) {
		return o instanceof Array
	}
</script>

<div class:hidden={object_is_empty}>
	<h4 class:hidden={name === ''}><pre>{name}</pre></h4>
	<ul>
		{#each object_entries as [key, value] (key)}
			<li class:is-array={object_is_array}>
				<code class:hidden={object_is_array}>{key}:</code>

				{#if is_object(value)}
					<svelte:self object={value} />
				{:else}
					<code>{JSON.stringify(value)}</code>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.is-array {
		list-style-type: circle;
	}
	.hidden {
		display: none;
	}
</style>
