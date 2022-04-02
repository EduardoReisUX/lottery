import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/svelte';
import Home from './../../routes/index.svelte';

const lottery_options = [
	'Mega-sena',
	'Quina',
	'Lotofácil',
	'Lotomania',
	'Timemania',
	'Dia de sorte'
];

const numbers = ['06', '09', '28', '33', '37', '40'];

describe('Home Page', () => {
	describe('Receiving mocked props', () => {
		it('should render the correct number of options', () => {
			render(Home);

			expect(screen.getAllByRole('option').length).toBe(6);
		});

		it('should render contest number', () => {
			render(Home);

			const contest_number = screen.getByText(/Concurso/i);
			expect(contest_number).toHaveTextContent(/CONCURSO Nº 4560/i);
		});

		it('should render number of tens (dezenas)', () => {
			render(Home);

			numbers.forEach((number) => {
				const number_element = screen.getByText(number);
				expect(number_element).toBeInTheDocument();
			});
		});

		it('should render a legal advice', () => {
			render(Home);

			const legal_advice = screen.getByText(/CAIXA/i);
			expect(legal_advice).toHaveTextContent(
				'Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.'
			);
		});
	});
});
