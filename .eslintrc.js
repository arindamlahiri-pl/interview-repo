module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		// Use eslint-config-prettier to disable ESLint rules that might conflict with Prettier.
		'prettier'
	],
	rules: {
		// Put your custom rules here
		'prettier/prettier': ['error']
	}
};
