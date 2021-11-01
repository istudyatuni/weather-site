<script context="module">
	import { loadVersion } from 'src/api/debug'

	import { settings } from 'src/stores/settings'
	import { log } from 'src/stores/debug'
</script>

<div class="wrapper">
	{#await loadVersion() then version}
		<pre>Version: {version}</pre>
	{/await}

	<h4><pre>LocalStorage.settings:</pre></h4>
	<ul>
		{#each Object.keys($settings) as key (key)}
			<li><code>
				{key}: {JSON.stringify($settings[key])}
			</code></li>
		{/each}
	</ul>
	<h4><pre>Log:</pre></h4>
	<ul>
		{#each $log as message, i (i)}
			<li><code>
				{decodeURI(message)}
			</code></li>
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		padding: 1em;
	}
	code {
		margin: 0;
		height: 1em;
	}
	ul {
		list-style-type: "- ";
	}
	ul li {
		line-height: 1;
	}
</style>
