<script>
	export let text = '',
		/** @type {import("src/components/types").TooltipPosition} */
		position = 'top'
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="tooltip {position}" tabindex="0">
	<slot />
	<div class="text" role="tooltip">{text}</div>
</div>

<style lang="scss">
	/* https://www.w3schools.com/howto/howto_css_tooltip.asp */

	.tooltip {
		position: relative;
		display: inline-block;
	}

	@each $variant in top, bottom, left, right {
		.tooltip.#{$variant} .text {
			$top-bot-bottom: 125%;
			@if $variant == top {
				bottom: $top-bot-bottom;
			}
			@if $variant == bottom {
				bottom: -1 * $top-bot-bottom;
			}

			$centering-margin-left: -57px;
			$le-ri-margin-left-offset: 85px;
			@if $variant == left {
				margin-left: $centering-margin-left - $le-ri-margin-left-offset;
			}
			@if $variant == right {
				margin-left: $centering-margin-left + $le-ri-margin-left-offset;
			}
			@if $variant == left or $variant == right {
				bottom: 0;
			}
			@if $variant == top or $variant == bottom {
				left: $centering-margin-left;
			}
		}

		.tooltip.#{$variant} .text::after {
			top: 100%;
			left: 0%;
		}
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

		/* Fade in tooltip */
		opacity: 0;
		transition: opacity 0.3s;
	}

	/* Tooltip arrow */
	.tooltip .text::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 30%;
		opacity: 0;
	}

	/* Show the tooltip text when you mouse over the tooltip container */
	.tooltip:hover .text,
	.tooltip:focus .text {
		visibility: visible;
		opacity: 1;
	}
</style>
