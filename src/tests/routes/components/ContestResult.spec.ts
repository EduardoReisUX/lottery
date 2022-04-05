import ContestResult from '$root/components/ContestResult.svelte';
import { render, screen } from '@testing-library/svelte';

const ContestResultProps = Array.from({ length: 10 }, (value, index) => String(index + 1));
// ContestResultProps = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

describe('ContestResult component', () => {
	describe('receiving mocked props', () => {
		it('should render the results of the contest', () => {
			render(ContestResult, { dezenas: ContestResultProps });
			// or render(ContestResult, { props: { dezenas: ContestResultProps }});

			const result = screen.getAllByText(/[0-9]+/g);

			result.forEach((number) => {
				expect(number).toBeInTheDocument();
				expect(number).toBeVisible();
			});
		});
	});
});
