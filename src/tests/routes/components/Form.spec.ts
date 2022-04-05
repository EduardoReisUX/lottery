import Form from '$root/components/Form.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';

const FormProps = {
	loterias: [
		{
			id: 0,
			nome: 'megasena',
			concursoId: '2496'
		},
		{
			id: 1,
			nome: 'quina',
			concursoId: '1678'
		},
		{
			id: 2,
			nome: 'lotofácil',
			concursoId: '2663'
		}
	],
	getResults: jest.fn()
};

describe('Form component', () => {
	describe('receiving mocked props', () => {
		it('should render a select element with options', () => {
			render(Form, { props: { ...FormProps } });

			const options_elements = screen.getAllByRole('option');

			expect(options_elements).toHaveLength(3);
		});

		it('should call a function when selected option change', () => {
			render(Form, { props: { ...FormProps } });

			const select_element = screen.getByText(/megasena/i);

			fireEvent.change(select_element, { target: { value: 'quina' } });
			expect(FormProps.getResults).toHaveBeenCalledTimes(1);

			fireEvent.change(select_element, { target: { value: 'lotofácil' } });
			expect(FormProps.getResults).toHaveBeenCalledTimes(2);
		});
	});
});
