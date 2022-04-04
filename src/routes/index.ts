import type { HomeProps } from '$root/types';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url, request }) => {
	let lottery;

	if (url.pathname !== '/') {
		const form = await request.formData();
		lottery = String(form.get('lottery-select')).replace(/-|\s/g, '').toLocaleLowerCase();
	} else {
		lottery = 'megasena';
	}

	const token = import.meta.env.VITE_PRIVATE_TOKEN;
	const link = `https://apiloterias.com.br/app/resultado?loteria=${lottery}&token=${token}`;

	const response: HomeProps = await (await fetch(link)).json();
	const { nome, numero_concurso, data_concurso, dezenas } = response;

	return {
		status: 200,
		body: { props: { nome, numero_concurso, data_concurso, dezenas } }
	};
};
