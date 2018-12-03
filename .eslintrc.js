module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'comma-style': 0,
    'brace-style': 0,
    curly: 0,
    // allow async-await
    'generator-star-spacing': 'off',
    indent: 0,
    'arrow-parens': 0,
    'spaced-comment': 0,
    'no-trailing-spaces': 0,
    // object子元素必须不同行
    'no-multiple-empty-lines': 0,
    'no-unused-vars': 0,
    'no-useless-escape': 0,
    'no-undef': 0,
    'object-property-newline': 0,
    'space-before-function-paren': 0,
    'vue/max-attributes-per-line': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
