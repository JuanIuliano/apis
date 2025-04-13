module.exports = {
  files: ['**/*.{js,jsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...require('globals').browser,
      ...require('globals').node,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: [
    require('eslint-plugin-react'),
    require('eslint-plugin-react-hooks'),
    require('eslint-plugin-import'),
    require('eslint-plugin-prettier'),
    require('plugin:prettier/recommended'),
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // no es necesario con React 17+
    'react/prop-types': 'off', // opcional si usás TypeScript o preferís sin
    'import/no-unresolved': 'error',
    'import/no-duplicates': 'error',
    // Integración de Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // Configuración de Prettier (opcional)
        trailingComma: 'es5',
        semi: false,
        tabWidth: 2,
        printWidth: 80,
        endOfLine: 'lf',
      },
    ],
  },
}
