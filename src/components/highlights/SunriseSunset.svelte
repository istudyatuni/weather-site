<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'

	import { formatTime } from 'src/utils/time'
</script>

<script>
	export let sunrise, sunset
</script>

<BaseHighlight title={$_('highlights.sun.title')}>
	<div slot="content">
		<p class="time">
			<span>{$_('highlights.sun.sunrise')}:</span>
			{sunrise ? formatTime(sunrise) : '--:--'}
		</p>
		<p class="time">
			<span>{$_('highlights.sun.sunset')}:</span>
			{sunset ? formatTime(sunset) : '--:--'}
		</p>
	</div>
</BaseHighlight>

<style>
	.time {
		font-size: 1.3em;
		font-weight: 600;
		margin: 0.5em 0;
	}
	.time > span {
		color: var(--second-fg-color);
	}
</style>
