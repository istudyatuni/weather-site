<script context="module">
	import ObjectPrint from 'src/components/debug/ObjectPrint.svelte'

	import { cache, log, settings } from 'src/stores'
</script>

<div class="wrapper">
	<pre>Current version build time: {import.meta.env.VITE_VERSION}</pre>

	<ObjectPrint name="LocalStorage.settings" object={$settings} />
	<ObjectPrint name="LocalStorage.cache" object={$cache} />
	<ObjectPrint name="API call log" object={$log.map((e) => decodeURI(e))} />
</div>

<style lang="scss">
	.wrapper {
		padding: 1em;

		& :global(ul) {
			list-style-type: '- ';
		}

		& :global(code) {
			margin: 0;
			height: 1em;
			overflow-wrap: anywhere;
		}
	}
</style>
