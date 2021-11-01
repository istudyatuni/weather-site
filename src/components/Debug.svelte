<script context="module">
	import { settings } from 'src/stores/settings'
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
</div>
