<script>
	export let title
</script>

<div class="wrapper">
	<p class="title">{title}</p>
	<p class="value">
		<slot name="value" />
	</p>
	<slot name="content" />
</div>

<style>
	.wrapper {
		border-radius: 15px;
		padding: 1em;
		background-color: white;
	}
	.title {
		color: gray;
		margin: 0;
	}
	.value {
		font-size: 2.5em;
		margin: 0.5em;
	}
</style>
