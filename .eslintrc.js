module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'react', 'flowtype', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/require-default-props': 'off',
    'react/style-prop-object': [
      'error',
      {
        allow: ['StatusBar'],
      },
    ],
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: {order: 'asc', caseInsensitive: true},
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'sort-imports': ['warn', {ignoreCase: true, ignoreDeclarationSort: true}],
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: false,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
      {usePrettierrc: false},
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '~': './src',
        },
      },
    },
  },
  globals: {
    AbortController: true,
    Response: true,
    NodeJS: true,
    Request: true,
    RequestInit: true,
  },
};
