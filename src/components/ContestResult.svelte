<script lang="ts">
	export let dezenas: string[];
</script>

<div
	class="relative flex flex-wrap justify-center items-center gap-6 
				lg:row-start-2"
>
	{#each dezenas as dezena}
		<strong
			class="w-[4.75rem] h-[4.75rem] grid place-items-center bg-brand-white rounded-full font-bold text-lg text-brand-blackMuted"
		>
			{dezena}
		</strong>
	{/each}
</div>
