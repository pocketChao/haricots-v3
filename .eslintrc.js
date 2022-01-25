/*
 * @Author: LiuZhichao
 * @Date: 2022-01-24 10:34:01
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-25
 * @FilePath: /haricots/.eslintrc.js
 * @Description:
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    // resolve eslint vue setup 'defineProps' is not defined
    'vue/setup-compiler-macros': true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']]
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
      },
      typescript: {
        project: `${__dirname}/tsconfig.json`
      }
    }
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  // 指定如何解析语法。可以为空，但若不为空，只能配该值
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off'
      }
    }
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'off',
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-redeclare': 'error',
    'no-empty-function': 'error',
    'vue/name-property-casing': ['error', 'PascalCase'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': ['off']
  }
  /**  Unable to resolve path to module '@'
        解决方法:   1.pnpm install eslint-import-resolver-typescript -D
                  2.在tsconfig.json文件的compilerOptions处增加"baseUrl": "./" 和"paths": { "@/*": ["src/*"] }
                  3.在.eslintrc.js中增加settings: { 'import/resolver': { typescript: { project: `${__dirname}/tsconfig.json` } } } 亲测可用
  */
}
