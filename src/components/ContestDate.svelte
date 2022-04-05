<script lang="ts">
	export let numero_concurso: string;
	export let data_concurso: Date;
</script>

<div class="text-brand-white">
	<p class="font-medium text-sm">
		CONCURSO
		<span class="lg:hidden">Nº</span>
		<span class="lg:block lg:text-lg lg:font-bold">
			{numero_concurso}
			<time class="hidden lg:inline-block">
				{' - '}
				{new Date(data_concurso).toLocaleDateString('pt-br', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric'
				})}
			</time>
		</span>
	</p>
</div>
