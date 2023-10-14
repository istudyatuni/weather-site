<script>
	export let title
</script>

<div class="wrapper">
	<p class="title">{title}</p>
	<div class="data">
		<p class="value">
			<slot name="value" />
		</p>
		<div>
			<slot name="content" />
		</div>
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
		padding-right: 2em;
	}
	.title {
		color: var(--second-fg-color);
		margin: 0;
	}
	.value {
		font-size: 2.5em;
		margin: 20px 0;
	}
	.value :global(.measure) {
		color: var(--second-fg-color);
		font-size: 0.4em;
	}
	.value:empty {
		display: none;
	}
</style>
