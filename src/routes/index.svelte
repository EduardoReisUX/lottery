<script lang="ts">
	'nome';
	'numero_concurso';
	'data_concurso';
	'dezenas';

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

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root) {
		--color-mega: hsba(145, 48%, 68%, 1);
		--color-quina: hsba(145, 55%, 94%, 1);
		--color-lotofacil: hsba(254, 57%, 94%, 1);
		--color-lotomania: hsba(44, 31%, 75%, 1);
		--color-timemania: hsba(314, 45%, 87%, 1);
		--color-dia-de-sorte: hsba(27, 61%, 100%, 1);

		--color-bg: hsba(0, 0%, 94%, 1);

		--color-text-white: hsba(0, 0%, 100%, 1);
		--color-text-black-muted: hsba(0, 0%, 20%, 1);
		--color-text-black: hsba(0, 0%, 0%, 1);

		--text-xs: 0.75rem; /* 12px */
		--text-sm: 0.875rem; /* 14px */
		--text-base: 1rem; /* 16px */
		--text-lg: 1.25rem; /* 20px */
		--text-xl: 1.625rem; /* 26px */
		--text-2lg: 1.875rem; /* 30px */
	}

	:global(html) {
		font-family: 'Montserrat', sans-serif;
		height: 100%;
	}

	:global(body) {
		height: 100%;
		background: var(--color-bg);
	}
</style>
