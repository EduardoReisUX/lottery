<script lang="ts">
	export let dezenas: string[];

	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
</script>

<div
	class="row-span-1 relative flex flex-wrap justify-center items-center self-end gap-6
	lg:row-span-2
"
>
	{#each dezenas as dezena, index}
		{#key dezena + dezenas.length}
			<strong
				class="w-[4.75rem] h-[4.75rem] grid place-items-center bg-brand-white rounded-full font-bold text-lg text-brand-blackMuted"
				in:fly={{ y: -40, duration: 150, delay: 150 * (index + 1), easing: cubicInOut }}
				out:fly={{ duration: 0 }}
			>
				{dezena}
			</strong>
		{/key}
	{/each}
</div>
