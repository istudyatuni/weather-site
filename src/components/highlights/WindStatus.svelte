<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'

	import { getWindDirection } from 'src/utils/wind'
</script>

<script>
	export let speed, deg
</script>

<BaseHighlight title={$_('highlights.wind_status')}>
	<div slot="value">
		{speed ?? '-.-'} <span class="value-measure">{$_('highlights.measure.m_in_s')}</span>
	</div>
	<div class="dir-wrapper m-auto" slot="content">
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
</BaseHighlight>

<style>
	.dir-wrapper {
		display: flex;
		align-items: center;
	}
	.m-auto {
		margin: auto;
	}
	.wind-dir {
		font-size: 1.4em;
		margin-left: 15px;
	}
	.value-measure {
		font-size: 0.4em;
	}
</style>
