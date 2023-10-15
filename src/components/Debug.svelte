<script context="module">
	import { log, settings } from 'src/stores'
</script>

<script>
	$: values = Object.entries($settings)
</script>

<div class="wrapper">
	<pre>Current version build time: {import.meta.env.VITE_VERSION}</pre>

	<h4><pre>LocalStorage.settings:</pre></h4>
	<ul>
		{#each values as [key, value] (key)}
			<li>
				<code>
					{key}: {JSON.stringify(value)}
				</code>
			</li>
		{/each}
	</ul>
	<h4><pre>Log:</pre></h4>
	<ul>
		{#each $log as message, i (i)}
			<li>
				<code>
					{decodeURI(message)}
				</code>
			</li>
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
		list-style-type: '- ';
	}
	ul li {
		line-height: 1;
	}
</style>
