<script>
	export let title
</script>

<div class="wrapper">
	<p class="title">{title}</p>
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
		padding: 0 0.5em;
	}
	.title {
		color: var(--second-fg-color);
		margin: 0;
	}
	.value {
		font-size: 2.5em;
		margin: 20px 0;
	}
	.value:empty {
		display: none;
	}
</style>
