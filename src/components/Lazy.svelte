<!-- https://github.com/AlexxNB/tinro#lazy-loading-components -->
<script>
	export let component
</script>

{#await component.then ? component : component()}
	Loading...
{:then co}
	<svelte:component this={co.default} />
{/await}
