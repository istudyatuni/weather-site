<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'

	import { getWindDirection } from 'src/utils/wind'
</script>

<script>
	export let speed, deg
</script>

<BaseHighlight title={$_('highlights.wind_status')}>
	<div class="inline" slot="content">
		<div class="highlight-value">
			{speed ?? '-.-'} <span>{$_('highlights.measure.m_in_s')}</span>
		</div>
		<div class="m-auto">
			<img
				src="icons/arrow_compass.svg"
				class="m-auto"
				style:transform={`rotate(${deg}deg)`}
				alt=""
				width="30"
				height="30" />
			<span class="wind-dir">
				{deg ? getWindDirection(deg) : '--'}
			</span>
		</div>
	</div>
</BaseHighlight>

<style>
	.inline {
		display: flex;
		padding-top: 1em;
	}
	.m-auto {
		margin: auto;
	}
	.wind-dir {
		font-size: 1.4em;
		margin-left: 6px;
	}
	.highlight-value {
		font-size: 2.5em;
	}
	.highlight-value > span {
		font-size: 0.4em;
	}
</style>
