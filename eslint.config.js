import uni from '@uni-helper/eslint-config'

export default uni({
  unocss: true,
  rules: {
    // 禁用所有规则
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    'unused-imports/no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
  },
})
