<script lang="ts">
	export let options_element: string[];
</script>

<form action="/" method="GET">
	<select
		name="lottery-select"
		id="lottery-select"
		class="bg-brand-white text-brand-blackMuted uppercase py-4 px-4 pr-28 rounded-lg shadow-md"
	>
		{#each options_element as option_value}
			<option class="uppercase" value={option_value}>{option_value}</option>
		{/each}
	</select>
	<button
		class="p-4 bg-brand-diaDeSorte text-brand-white font-bold rounded-lg shadow-md"
		type="submit">Pesquisar</button
	>
</form>
