<script lang="ts">
	export let loterias: {
		id: number;
		nome: string;
		concursoId: string;
	}[];
</script>

<form action="/" method="GET">
	<select
		name="loteria"
		class="bg-brand-white text-brand-blackMuted uppercase py-4 px-4 pr-28 rounded-lg shadow-md"
	>
		{#each loterias as loteria}
			<option class="uppercase" value={loteria.concursoId}>{loteria.nome}</option>
		{/each}
	</select>
	<button class="p-4 bg-brand-quina text-brand-white font-bold rounded-lg shadow-md" type="submit"
		>Pesquisar</button
	>
</form>
