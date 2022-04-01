import { render, screen } from '@testing-library/svelte';
import Home from './../routes/index.svelte';

describe('Home Page', () => {
	describe('content', () => {
		it('should have a h1', async () => {
			render(Home);

			const h1 = await screen.findByText(/Welcome to SvelteKit/i);
			expect(h1).toBeInTheDocument();
			expect(h1).toBeVisible();
			expect(h1).toHaveTextContent(/Welcome to SvelteKit/i);
		});
	});
});
