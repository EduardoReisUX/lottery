import type { HomeProps } from '$root/types';
import { render, screen } from '@testing-library/svelte';
import Home from '../../routes/index.svelte';

const MockedHomeProps: HomeProps = {
	loterias: [
		{
			id: 0,
			nome: 'megasena',
			concursoId: '2331'
		},
		{
			id: 1,
			nome: 'quina',
			concursoId: '2331'
		}
	],
	concurso: {
		id: '2331',
		loteria: 0,
		numeros: ['1', '2', '3', '4'],
		data: new Date(1995, 11, 17)
	}
};

describe('Home Page', () => {
	describe('Receiving mocked props', () => {
		it('should render the correct number of options', () => {
			render(Home, {
				props: { props: MockedHomeProps }
			});
			const loterias_length = MockedHomeProps.loterias.length;
			expect(screen.getAllByRole('option').length).toBe(loterias_length);
		});

		it('should render contest number', () => {
			render(Home, {
				props: { props: MockedHomeProps }
			});
			const contest_number = screen.getByText(/Concurso/i);
			expect(contest_number).toHaveTextContent(/CONCURSO Nº 2331 - 17\/12\/1995/i);
		});

		it('should render number of tens (dezenas)', () => {
			render(Home, {
				props: { props: MockedHomeProps }
			});
			MockedHomeProps.concurso.numeros.forEach((numero) => {
				const numero_element = screen.getByText(numero);
				expect(numero_element).toBeInTheDocument();
			});
		});

		it('should render a legal advice', () => {
			render(Home, {
				props: { props: MockedHomeProps }
			});
			const legal_advice = screen.getByText(/CAIXA/i);
			expect(legal_advice).toHaveTextContent(
				'Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.'
			);
		});
	});
});
