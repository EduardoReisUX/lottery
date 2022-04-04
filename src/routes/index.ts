import type { ConcursoType, LoteriasConcursosType, LoteriasType } from '$root/types';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const baseLink = 'https://brainn-api-loterias.herokuapp.com/api/v1';

	let link = `${baseLink}/loterias`;
	const loterias: LoteriasType = await (await fetch(link)).json();

	link = `${baseLink}/loterias-concursos`;
	const loteriasConcursos: LoteriasConcursosType = await (await fetch(link)).json();

	link = `${baseLink}/concursos/2359`;
	const concurso: ConcursoType = await (await fetch(link)).json();

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

/* export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData();
	const concursoId = String(form.get('lottery-select'));

	const link = `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${concursoId}`;
	const response = await (await fetch(link)).json();
	console.log(response);

	return {
		status: 200,
		body: {
			props: {}
		}
	};
};
 */
