module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next', 'next/core-web-vitals', 'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'warn'
  }
}
