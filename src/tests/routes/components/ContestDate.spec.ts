import ContestDate from '$root/components/ContestDate.svelte';
import { render, screen } from '@testing-library/svelte';

const ContestDateProps = {
	numero_concurso: '2461',
	data_concurso: new Date(2016, 11, 24)
};

beforeEach(() => {
	render(ContestDate, {
		props: { ...ContestDateProps }
	});
});

describe('ContestDate component', () => {
	describe('receiving mocked props', () => {
		it('should format the date to dd/mm/yyyy', () => {
			const date = screen.getByText(/24\/12\/2016/g);
			expect(date).toBeInTheDocument();
		});

		it('should display the number of contest', () => {
			const number = screen.getByText(/2461/g);
			expect(number).toBeInTheDocument();
		});
	});
});
