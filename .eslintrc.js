module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', 'index.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'off',
        'react-native/no-inline-styles': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
