module.exports = {
	transform: {
		'^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
		'^.+\\.(js)$': 'babel-jest',
		'^.+\\.(ts)$': 'ts-jest'
	},
	setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	moduleNameMapper: {
		'\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/__mocks__/fileMock.js`,
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'^\\$root(.*)$': '<rootDir>/src/$1'
	},
	testPathIgnorePatterns: ['/node_modules/', '/.svelte-kit'],
	transformIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['src/**/*.svelte']
};
