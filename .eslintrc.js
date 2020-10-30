module.exports = {
  root: true,
  env: {
    node: true
  },
  // parserOptions: {
  //   parser: '@typescript-eslint/parser' // typescript 解析器
  // },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended', // typescript推荐配置
    '@vue/prettier',
    "@vue/typescript", // vue typescript 项目基本配置项,会配置解析器与插件选项,应放在最后
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'none'
      }
    ],
    // "prettier/prettier": "off",
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off',
    'no-empty': 'off',
    'no-useless-escape': 'off',
    'vue/attribute-hyphenation': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}