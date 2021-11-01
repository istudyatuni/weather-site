<script context="module">
	import { settings } from 'src/stores/settings'
	import { log } from 'src/stores/log'
</script>

<div>
	<h4><pre>LocalStorage.settings:</pre></h4>
	<ul>
		{#each Object.keys($settings) as key (key)}
			<li><pre>
				{key}: {JSON.stringify($settings[key])}
			</pre></li>
		{/each}
	</ul>
	<h4><pre>Log:</pre></h4>
	<ul>
		{#each $log as message, i (i)}
			<li><pre>
				{decodeURI(message)}
			</pre></li>
		{/each}
	</ul>
</div>

<style>
	pre {
		margin: 0;
		height: 1em;
	}
</style>
