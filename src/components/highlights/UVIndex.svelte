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
		background: linear-gradient(
			90deg,
			rgba(40, 255, 39, 1) 0%,
			rgba(255, 252, 33, 1) 15%,
			rgba(255, 153, 0, 1) 42%,
			rgba(255, 91, 3, 1) 57%,
			rgba(255, 20, 0, 1) 85%,
			rgba(204, 0, 255, 1) 100%
		);
	}
</style>
