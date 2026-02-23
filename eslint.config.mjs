import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
// plugins removed to avoid peer conflicts with ESLint 10

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', '.turbo/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...(tsPlugin.configs.recommended?.rules ?? {}),
      'no-undef': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      // import resolver config removed with plugin removal
    },
  },
];
