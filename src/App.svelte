<script context="module">
	import Current from 'src/components/Current'
	import Info from 'src/components/Info'

	import { startTimer } from 'src/utils/time'
</script>

<script>
	startTimer()
</script>

<main>
	<Current />
	<Info />
</main>

<style type="text/css">
	main {
		display: grid;
		grid-template-columns: 20em auto;
	}
</style>
