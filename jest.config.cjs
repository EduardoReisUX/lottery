module.exports = {
	transform: {
		'^.+\\.svelte$': 'svelte-jester',
		'^.+\\.(js|ts)$': 'babel-jest'
	},
	setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	moduleNameMapper: {
		'\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/__mocks__/fileMock.js`,
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js'
	},
	testPathIgnorePatterns: ['/node_modules/', '/.svelte-kit'],
	transformIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['src/**/*.svelte']
};
