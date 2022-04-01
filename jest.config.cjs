module.exports = {
	transform: {
		'^.+\\.svelte$': 'svelte-jester',
		'^.+\\.(js|ts)$': 'babel-jest'
	},
	setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	testPathIgnorePatterns: ['/node_modules/', '/.svelte-kit'],
	transformIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['src/**/*.svelte']
};
