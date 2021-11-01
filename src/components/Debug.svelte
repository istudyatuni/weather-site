<script context="module">
	import { settings } from 'src/stores/settings'
	import { log } from 'src/stores/log'
</script>

<div>
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
	code {
		margin: 0;
		height: 1em;
	}
</style>
