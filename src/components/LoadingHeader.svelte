<script context="module">
	import { isLoading } from 'svelte-i18n'

	import { isApiLoading } from 'src/stores'
</script>

{#if $isLoading || $isApiLoading}
	<center>
		<p>Loading...</p>
	</center>
{/if}

<style>
	p {
		position: absolute;
		margin: 0;
		padding: 3px 0;
		top: 0;
		width: 100%;
		background-color: var(--main-bg-color);
		color: var(--second-fg-color);
	}
</style>
