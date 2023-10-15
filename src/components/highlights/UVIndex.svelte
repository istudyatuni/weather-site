<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let uv = 0

	let bar_width_px = 0
	$: uv_scale = (bar_width_px - 6) / 12
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
		width: 6px;
		height: 3em;
		border-radius: 0.2em;
		background-color: var(--uv-bar-color);
	}
	.bar {
		margin-top: 3.2em;
		width: 100%;
		height: 2em;
		border-radius: 5px;

		// percents are calculated this way (in kalker):
		// >> 100/13
		// 7.6923076923 ≈ 7 + 9/13
		// >> (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12) * 7.7
		// (7.7, 15 + 2/5, 23.1, 30 + 4/5, 38 + 1/2, 46 + 1/5, 53.9, 61 + 3/5, 69.3, 77, 84.7, 92 + 2/5)
		//
		// colors from: https://www.sciencedirect.com/science/article/pii/S2666469023000210, Appendix C
		// prettier-ignore
		background: linear-gradient(
			90deg,
			#658d1b 0%, // duplicate for start
			#658d1b 7.7%, // 0 <= UVI < 1
			#84bd00 15.4%, // 1 <= UVI < 2
			#97d700 23.1%, // 2 <= UVI < 3
			#f7ea48 30.8%, // 3 <= UVI < 4
			#fce300 38.5%, // 4 <= UVI < 5
			#ffcd00 46.2%, // 5 <= UVI < 6
			#eca154 53.9%, // 6 <= UVI < 7
			#ff8200 61.6%, // 7 <= UVI < 8
			#ef3340 69.3%, // 8 <= UVI < 9
			#da291c 77%, // 9 <= UVI < 10
			#bf0d3e 84.7%, // 10 <= UVI < 11
			#4b1e88 92.4%, // 11 <= UVI < 12
			#62359f 100%, // 12 <= UVI < 13
		);
	}
</style>
