<script lang="ts">
	export let numero_concurso: string;
	export let data_concurso: string;
</script>

<div class="text-center text-brand-white">
	<p>
		CONCURSO <span class="lg:hidden">Nº</span>
		{numero_concurso}
		<time class="hidden lg:inline-block">{data_concurso}</time>
	</p>
</div>
