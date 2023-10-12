<script>
	export let title = '',
		value = ''
</script>

<span class="title">{title}:</span>
<input type="text" bind:value />

<style>
	input {
		background-color: var(--main-bg-color);
		color: var(--second-fg-color);
	}
	.title {
		margin-right: 0.5em;
		color: var(--second-fg-color);
	}
</style>
