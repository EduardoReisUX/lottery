module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif']
		},
		extend: {
			colors: {
				brand: {
					mega: '#6BEFA3',
					quina: '#8666EF',
					lotofacil: '#DD7AC6',
					lotomania: '#FFAB64',
					timemania: '#5AAD7D',
					diaDeSorte: '#BFAF83',

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
