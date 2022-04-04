<script lang="ts">
	import logo from '$root/assets/logo.svg';

	export let nome: string;
</script>

<div class="w-auto grid place-items-center gap-3 lg:grid-flow-col">
	<img src={logo} alt="Logo da Mega-Sena" />
	<h1 class="text-2xl text-brand-white font-bold uppercase">{nome}</h1>
</div>
