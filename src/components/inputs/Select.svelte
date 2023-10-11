<script>
	export let title = '',
		/** @type {{value: string, name: any}[]} [description] */
		options = [],
		default_value = ''
</script>

<span class="title">{title}:</span>
<select name={title} id={title} on:input>
	{#each options as op}
		<option value={op.value} selected={op.value === default_value}
			>{op.name}</option>
	{/each}
</select>

<style>
	select {
		background-color: var(--main-bg-color);
		color: var(--second-fg-color);
	}
	.title {
		margin-right: 0.5em;
		color: var(--second-fg-color);
	}
</style>
