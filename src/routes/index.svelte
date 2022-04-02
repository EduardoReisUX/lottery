<script lang="ts">
	import '../app.css';

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
</script>

<svelte:head>
	<title>Mega-Sena</title>
</svelte:head>

<main class="container">
	<section class="options-sections">
		<form action="" method="get">
			<select name="lottery" id="lottery-select">
				{#each options_element as option_value}
					<option class="option" value={option_value}>{option_value}</option>
				{/each}
			</select>
		</form>

		<div>
			<img src="" alt="" />
			<h1>MEGA-SENA</h1>
		</div>

		<div>
			<p>
				CONCURSO <span>Nº</span> 4560 <time>07/04/2000</time>
			</p>
		</div>
	</section>

	<section class="result">
		<!-- divider -->
		<div class="numbers">
			{#each numbers as number}
				<p>{number}</p>
			{/each}
		</div>

		<p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
	</section>
</main>
