import NameSvelte from '$root/components/Name.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Name component', () => {
	it('should display name of the selected lottery in uppercase', () => {
		render(NameSvelte, { nome: 'megasena' });

		const nome = screen.getByText(/megasena/);
		expect(nome).toHaveTextContent('megasena');
	});
});
