<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	};
</script>

<script lang="ts">
	export let title: string;
</script>

<main class="min-h-screen grid place-items-center font-bold">
	<div class="text-center">
		<h1 class="text-2xl mb-2">{title} 😴</h1>
		<h3 class="text-center text-brand-blackMuted mb-8">
			Não encontramos a página que vossa senhoria deseja
		</h3>
		<a
			href="/"
			sveltekit:prefetch
			class="bg-brand-mega py-2 px-4 rounded-md text-lg text-brand-white shadow shadow-brand-mega/20 duration-150
			hover:shadow-md hover:shadow-brand-mega/50"
		>
			Go Home
		</a>
	</div>
</main>
