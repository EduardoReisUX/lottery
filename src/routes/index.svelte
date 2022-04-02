<script lang="ts">
	import logo from '$root/assets/logo.svg';

	export const props = {
		nome: '',
		numero_concurso: '',
		data_concurso: '',
		dezenas: ['']
	};

	let options_element = [
		'Mega-sena',
		'Quina',
		'Lotofácil',
		'Lotomania',
		'Timemania',
		'Dia de sorte'
	];

	let numbers = ['06', '09', '28', '33', '37', '40'];

	let windowsWidth = 0;
</script>

<svelte:window bind:innerWidth={windowsWidth} />

<svelte:head>
	<title>Mega-Sena</title>
</svelte:head>

<main class="min-h-screen grid lg:grid-cols-2 overflow-hidden">
	<section
		class="relative grid grid-flow-row place-items-center bg-brand-quina py-16 pb-28 gap-20 
			lg:grid-rows-3 lg:gap-[5.25rem] lg:pr-16"
	>
		<form action="" method="get">
			<select
				name="lottery"
				id="lottery-select"
				class="bg-brand-white text-brand-blackMuted uppercase py-4 px-4 pr-28 rounded-lg shadow-md"
			>
				{#each options_element as option_value}
					<option class="uppercase" value={option_value}>{option_value}</option>
				{/each}
			</select>
		</form>

		<div class="w-auto grid place-items-center gap-3 lg:grid-flow-col">
			<img src={logo} alt="Logo da Mega-Sena" />
			<h1 class="text-2xl text-brand-white font-bold uppercase">Mega-sena</h1>
		</div>

		<div class="text-center text-brand-white">
			<p>
				CONCURSO <span class="lg:hidden">Nº</span> 4560
				<time class="hidden lg:inline-block">07/04/2000</time>
			</p>
		</div>

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
	</section>

	<section
		class="grid grid-flow-row place-items-center pt-20 pb-8 px-4 gap-[5.25rem]
			lg:py-16 lg:m-0 lg:grid-rows-3"
	>
		<div
			class="relative flex flex-wrap justify-center items-center gap-6 
				lg:row-start-2"
		>
			{#each numbers as number}
				<strong
					class="w-[4.75rem] h-[4.75rem] grid place-items-center bg-brand-white rounded-full font-bold text-lg text-brand-blackMuted"
					>{number}</strong
				>
			{/each}
		</div>

		<small
			class="relative text-sm text-center 
				lg:text-base lg:row-start-3"
		>
			Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
		</small>
	</section>
</main>
