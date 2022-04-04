<script lang="ts">
	export let loterias: {
		id: number;
		nome: string;
		concursoId: string;
	}[];

	export let getResults: (concursoId: string) => void;
</script>

<form>
	<select
		name="loteria"
		class="bg-brand-white text-brand-blackMuted uppercase py-4 px-4 pr-28 rounded-lg shadow-md"
		on:change={(e) => {
			//@ts-ignore
			getResults(e.target.value);
		}}
	>
		{#each loterias as loteria}
			<option class="uppercase" value={loteria.concursoId}>{loteria.nome}</option>
		{/each}
	</select>
</form>
