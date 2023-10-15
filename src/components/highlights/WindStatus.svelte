<script context="module">
	import { _ } from 'svelte-i18n'

	import Arrow from '~icons/tabler/archery-arrow'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'

	import { getGeoDirection } from 'src/utils'
</script>

<script>
	export let speed,
		deg = 0

	// we have to take into account the original icon's rotation: -135 deg
	$: normalized_deg = 135 + deg
</script>

<BaseHighlight title={$_('highlights.wind_status')}>
	<div slot="value">
		{speed ?? '-.-'}
		<span class="measure">{$_('highlights.measure.m_in_s')}</span>
	</div>
	<div class="dir-wrapper" slot="content">
		<Arrow
			style={`transform: rotate(${normalized_deg}deg);`}
			alt=""
			width="30"
			height="30" />
		<span class="wind-dir">
			{#if deg !== undefined}
				{$_('highlights.compass_directions.' + getGeoDirection(deg))}
			{:else}
				--
			{/if}
		</span>
	</div>
</BaseHighlight>

<style>
	.dir-wrapper {
		display: flex;
		align-items: center;
		margin-right: 1em;
	}
	.wind-dir {
		font-size: 1.4em;
		margin-left: 15px;
		color: var(--second-fg-color);
	}
</style>
