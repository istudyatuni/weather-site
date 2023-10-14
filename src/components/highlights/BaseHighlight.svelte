<script context="module">
	import Question from '~icons/tabler/question-circle'

	import Tooltip from 'src/components/atoms/Tooltip.svelte'
</script>

<script>
	export let title, help
</script>

<div class="wrapper">
	<p class="title">
		<span>{title}</span>
		{#if help}
			<span class="help">
				<Tooltip text={help}>
					<Question slot="under" width="20" height="20" />
				</Tooltip>
			</span>
		{/if}
	</p>
	<div class="data">
		<p class="value">
			<slot name="value" />
		</p>
		<slot name="content" />
	</div>
</div>

<style>
	.wrapper {
		border-radius: 15px;
		padding: 1em;
		background-color: var(--main-bg-color);
	}
	.data {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 0.5em;
		padding-right: 1em;
	}
	.title {
		color: var(--second-fg-color);
		margin: 0;
		display: flex;
		align-items: stretch;
	}
	.title > .help {
		margin-left: 10px;
	}
	.title > .help:hover {
		color: var(--main-fg-color);
	}
	.value {
		font-size: 2.5em;
		margin: 20px 0;
	}
	.value :global(.top) {
		position: absolute;
		margin: 6px auto auto 5px;
	}
	.value :global(.measure) {
		color: var(--second-fg-color);
		font-size: 0.4em;
	}
	.value:empty {
		display: none;
	}
</style>
