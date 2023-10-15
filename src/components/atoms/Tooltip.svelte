<script>
	export let text = ''
</script>

<div class="tooltip">
	<slot />
	<div class="text">{text}</div>
</div>

<style>
	/* https://www.w3schools.com/howto/howto_css_tooltip.asp */

	.tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip .text {
		visibility: hidden;
		width: 120px;
		background-color: var(--tooltip-bg-color);
		color: var(--tooltip-fg-color);
		text-align: center;
		padding: 5px 7px;
		border-radius: 6px;

		/* Position the tooltip text */
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		margin-left: -60px;

		/* Fade in tooltip */
		opacity: 0;
		transition: opacity 0.3s;
	}

	/* Tooltip arrow */
	.tooltip .text::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0%;
		width: 100%;
		height: 30%;
		opacity: 0;
	}

	/* Show the tooltip text when you mouse over the tooltip container */
	.tooltip:hover .text {
		visibility: visible;
		opacity: 1;
	}
</style>
