import { render, screen } from '@testing-library/svelte';
import Home from '../../routes/index.svelte';

const HomeProps = {
	nome: 'Mega-sena',
	numero_concurso: '2496',
	data_concurso: '21/12',
	dezenas: ['06', '09', '28', '33', '37', '40']
};

describe('Home Page', () => {
	describe('Receiving mocked props', () => {
		it('should render the correct number of options', () => {
			render(Home, { HomeProps });

			expect(screen.getAllByRole('option').length).toBe(6);
		});

		it('should render contest number', () => {
			render(Home, { HomeProps });

			const contest_number = screen.getByText(/Concurso/i);
			expect(contest_number).toHaveTextContent(/CONCURSO Nº 4560/i);
		});

		it('should render number of tens (dezenas)', () => {
			render(Home, { HomeProps });

			HomeProps.dezenas.forEach((dezena) => {
				const dezena_element = screen.getByText(dezena);
				expect(dezena_element).toBeInTheDocument();
			});
		});

		it('should render a legal advice', () => {
			render(Home, { HomeProps });

			const legal_advice = screen.getByText(/CAIXA/i);
			expect(legal_advice).toHaveTextContent(
				'Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.'
			);
		});
	});
});
