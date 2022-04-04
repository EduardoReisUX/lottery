<script lang="ts">
	export let windowsWidth;
</script>

{#if windowsWidth < 1024}
	<div class="absolute bottom-0 w-full overflow-hidden rotate-180">
		<svg
			data-name="Layer 1"
			class="relative block h-32 w-[calc(283%_+_1.3px)]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="fill-brand-bg"
			/>
		</svg>
	</div>
{:else}
	<div class="absolute right-0 overflow-hidden">
		<svg class="h-[1080px] w-[112px]" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M112.5 0V1080C112.5 1080 -0.000244141 938 4.04623e-10 540C0.000244141 142 112.5 0 112.5 0Z"
				fill="#EFEFEF"
			/>
		</svg>
	</div>
{/if}
