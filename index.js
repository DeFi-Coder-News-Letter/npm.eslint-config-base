module.exports = {
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  rules: {
    'max-len': 0,
    'no-console': 0,
    'padded-blocks': 0,
    'no-underscore-dangle': 0,
    'semi': ['error', 'never'],
    'semi-style': ['error', 'first'],
    'newline-per-chained-call': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'arrow-body-style': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-cond-assign': ['error', 'except-parens'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ['error', { 'args': 'none' } ],
    'no-param-reassign': ['error', { 'props': false }],
    'function-paren-newline': [ 'error', 'consistent' ],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    "prefer-destructuring": ["error", { array: false, object: true }],
    'object-curly-newline': ['error', { ObjectExpression: { multiline: false, consistent: true } }],
  }
}
