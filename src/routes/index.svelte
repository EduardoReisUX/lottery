<script lang="ts">
	import Advice from '$root/components/Advice.svelte';
	import ContestDate from '$root/components/ContestDate.svelte';
	import ContestResult from '$root/components/ContestResult.svelte';
	import Divider from '$root/components/Divider.svelte';
	import Form from '$root/components/Form.svelte';
	import Name from '$root/components/Name.svelte';

	import type { HomeProps } from '$root/types';

	export let props: HomeProps;
	let { nome, data_concurso, dezenas, numero_concurso } = props;

	let options_element = [
		'Mega-sena',
		'Quina',
		'Lotofacil',
		'Lotomania',
		'Timemania',
		'Dia de sorte'
	];

	let windowsWidth = 0;
</script>

<svelte:window bind:innerWidth={windowsWidth} />

<svelte:head>
	<title>Mega-Sena</title>
</svelte:head>

<main class="min-h-screen grid lg:grid-cols-2 overflow-hidden">
	<section
		class="relative grid grid-flow-row place-items-center bg-brand-mega py-16 pb-28 gap-20 
			lg:grid-rows-3 lg:gap-[5.25rem] lg:pr-16"
	>
		<Form {options_element} />
		<Name {nome} />
		<ContestDate {data_concurso} {numero_concurso} />
		<Divider {windowsWidth} />
	</section>

	<section
		class="grid grid-flow-row place-items-center pt-20 pb-8 px-4 gap-[5.25rem]
			lg:py-16 lg:m-0 lg:grid-rows-3"
	>
		<ContestResult {dezenas} />
		<Advice />
	</section>
</main>
