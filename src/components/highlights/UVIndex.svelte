<script context="module">
	import { _ } from 'svelte-i18n'

	import BaseHighlight from 'src/components/highlights/BaseHighlight.svelte'
</script>

<script>
	export let uv = ''
</script>

<BaseHighlight title={$_('highlights.uv_index')}>
	<div slot="value">{uv}</div>
</BaseHighlight>
