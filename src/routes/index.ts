import type { ConcursoType, LoteriasConcursosType, LoteriasType } from '$root/types';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const baseLink = 'https://brainn-api-loterias.herokuapp.com/api/v1';

	let url = `${baseLink}/loterias`;
	const loterias: LoteriasType = await (await fetch(url)).json();

	url = `${baseLink}/loterias-concursos`;
	const loteriasConcursos: LoteriasConcursosType = await (await fetch(url)).json();

	url = `${baseLink}/concursos/2359`;
	const concurso: ConcursoType = await (await fetch(url)).json();

	let data = {
		loterias: loterias.map((loteria, index) => ({
			...loteria,
			concursoId: loteriasConcursos[index].concursoId
		})),
		concurso: { ...concurso }
	};

	return {
		status: 200,
		body: {
			props: data
		}
	};
};
