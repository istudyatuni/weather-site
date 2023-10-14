<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let uv = ''
</script>

<BaseHighlight
	title={$_('highlights.uv_index.title')}
	help={$_('highlights.uv_index.help')}>
	<div slot="value">{uv}</div>
</BaseHighlight>
