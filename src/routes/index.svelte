<script lang="ts">
	import Advice from '$root/components/Advice.svelte';
	import ContestDate from '$root/components/ContestDate.svelte';
	import ContestResult from '$root/components/ContestResult.svelte';
	import Divider from '$root/components/Divider.svelte';
	import Form from '$root/components/Form.svelte';
	import Name from '$root/components/Name.svelte';

	import type { ConcursoType, HomeProps } from '$root/types';

	export let props: HomeProps;
	let { concurso, loterias } = props;
	let innerWidth = 0;
	let selectedConcursoId = '2359';
	let bgColors = {
		'2359': '#6BEFA3',
		'5534': '#8666EF',
		'2200': '#DD7AC6',
		'2167': '#FFAB64',
		'1622': '#5AAD7D',
		'440': '#BFAF83'
	};

	async function getResults(concursoId: string) {
		const cache = localStorage.getItem(`@megasena-resultado[${concursoId}]`);

		if (!!cache) {
			concurso = JSON.parse(cache);
		} else {
			const data: ConcursoType = await (
				await fetch(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${concursoId}`)
			).json();

			concurso = data;
			localStorage.setItem(`@megasena-resultado[${concursoId}]`, JSON.stringify(data));
		}

		selectedConcursoId = concursoId; // changes bg color
	}
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Mega-Sena</title>
</svelte:head>

<main class="min-h-screen grid lg:grid-cols-2">
	<section
		class="relative grid grid-flow-row place-items-center bg-brand-mega py-16 pb-28 gap-20 lg:grid-rows-3 
	lg:gap-[5.25rem] lg:pr-16"
		style="background-color: {bgColors[selectedConcursoId]}"
	>
		<Form {loterias} {getResults} />
		<Name nome={loterias[0].nome} />
		<ContestDate data_concurso={concurso.data} numero_concurso={concurso.id} />
		<Divider windowsWidth={innerWidth} />
	</section>

	<section
		class="grid grid-flow-row place-items-center pt-20 pb-8 px-4 gap-[5.25rem]
			lg:py-16 lg:m-0 lg:grid-rows-3"
	>
		<ContestResult dezenas={concurso.numeros} />
		<Advice />
	</section>
</main>
