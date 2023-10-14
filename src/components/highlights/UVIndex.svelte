<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let uv = 0

	let bar_width_px = 0
	$: uv_scale = bar_width_px / 11
</script>

<BaseHighlight
	title={$_('highlights.uv_index.title')}
	help={$_('highlights.uv_index.help')}>
	<div slot="content" class="wrapper" bind:clientWidth={bar_width_px}>
		<div class="icon" style:margin-left={uv * uv_scale + 'px'}>
			<div class="value">{uv}</div>
			<div class="pointer" />
		</div>
		<div class="bar" />
	</div>
</BaseHighlight>

<style lang="scss">
	.wrapper {
		width: 100%;
		margin: 1em 0.5em;
	}
	.icon {
		color: var(--main-fg-color);
		position: absolute;
	}
	.icon > .value {
		// center text above the pointer
		margin-left: -1.9em;
		text-align: center;
		width: 4em;

		font-size: 2em;
		margin-bottom: 6px;
	}
	.icon > .pointer {
		width: 0.4em;
		height: 3em;
		border-radius: 0.2em;
		background-color: var(--uv-bar-color);
	}
	.bar {
		margin-top: 3.2em;
		width: 100%;
		height: 2em;
		border-radius: 5px;

		// https://cssgradient.io
		//
		// percents are calculated this way (in kalker):
		// (2, 5, 7, 10) * (100 / 11) = (18 + 2/11, 45 + 5/11, 63 + 7/11, 90 + 10/11)
		background: linear-gradient(
			90deg,
			rgba(40, 255, 39, 1) 0%,
			rgba(255, 252, 33, 1) 18.2%,
			rgba(255, 153, 0, 1) 45.5%,
			rgba(255, 91, 3, 1) 63.7%,
			rgba(255, 20, 0, 1) 90.9%,
			rgba(204, 0, 255, 1) 100%
		);
	}
</style>
