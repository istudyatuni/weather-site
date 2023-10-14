<script context="module">
	import { _ } from 'svelte-i18n'

	import UVIcon from '~icons/tabler/uv-index'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	// 13 em - width of scale
	// 11 - available UV indicies
	const uv_scale = 13 / 11

	export let uv = 0
</script>

<BaseHighlight
	title={$_('highlights.uv_index.title')}
	help={$_('highlights.uv_index.help')}>
	<div slot="value">{uv}</div>
	<div slot="content" class="wrapper">
		<div class="icon" style:margin-left={-2 + uv * uv_scale + 'em'}>
			<div class="uv">
				<UVIcon width="25" height="25" />
			</div>
			<div class="bar" />
		</div>
		<div class="scale" />
	</div>
</BaseHighlight>

<style lang="scss">
	.wrapper {
		margin-left: 0.5em;
		margin-bottom: 2em;
	}
	.icon {
		color: var(--second-fg-color);
	}
	.icon > .uv {
		margin-left: 1.45em;
		margin-bottom: 6px;
	}
	.icon > .bar {
		width: 0.4em;
		height: 3em;
		margin-top: -0.5em;
		margin-left: 2em;
		position: absolute;
		border-radius: 0.2em;
		background-color: var(--uv-bar-color);
	}
	.scale {
		width: 13em;
		height: 2em;

		/* https://cssgradient.io */
		background: rgb(40, 255, 39);
		background: linear-gradient(
			90deg,
			rgba(40, 255, 39, 1) 0%,
			rgba(255, 252, 33, 1) 15%,
			rgba(255, 153, 0, 1) 42%,
			rgba(255, 91, 3, 1) 57%,
			rgba(255, 20, 0, 1) 79%,
			rgba(204, 0, 255, 1) 100%
		);
	}
</style>
