module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif']
		},
		extend: {
			colors: {
				brand: {
					mega: '#5AAD7D',
					quina: '#6BEFA3',
					lotofacil: '#8666EF',
					lotomania: '#BFAF83',
					timemania: '#DD7AC6',
					diaDeSorte: '#FFAB64',

					bg: '#EFEFEF',

					white: '#FFF',
					blackMuted: '#333333',
					black: '#000'
				}
			},
			fontSize: {
				xs: ['0.75rem', '1.25rem'],
				sm: ['0.875rem', '1.25rem'],
				base: ['1rem', '1.5rem'],
				lg: ['1.25rem', '1.875rem'],
				xl: ['1.625rem', '1.875rem'],
				'2xl': ['1.875rem', '2rem']
			}
		}
	},
	plugins: []
};
