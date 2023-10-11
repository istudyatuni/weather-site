<script>
	export let title = '',
		/** @type {{value: string, name: any}[]} [description] */
		options = [],
		default_value = ''
</script>

{title}:
<select name={title} id={title} on:input>
	{#each options as op}
		<option value={op.value} selected={op.value === default_value}
			>{op.name}</option>
	{/each}
</select>
