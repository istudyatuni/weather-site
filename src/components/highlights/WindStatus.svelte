<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight'

	import { getWindDirection } from 'src/utils/wind'
</script>

<script>
	export let speed, deg
</script>

<BaseHighlight title={$_('highlights.wind_status')}>
	<div class="inline" slot="content">
		<p class="highlight-value">
			{speed} <span>{$_('highlights.measure.m_in_s')}</span>
		</p>
		<p class="m-auto">
			<img
				src="icons/arrow_compass.svg"
				class="m-auto rotate"
				style={`--wind-dir: ${deg}deg`}
				alt=""
				width="30"
				height="30"
			/>
			<span class="wind-dir">{getWindDirection(deg)}</span>
		</p>
	</div>
</BaseHighlight>

<style>
	.inline {
		display: flex;
	}
	.m-auto {
		margin: auto;
	}
	.wind-dir {
		font-size: 1.4em;
		margin-left: 6px;
	}
	.rotate {
		transform: rotate(var(--wind-dir));
	}
</style>
