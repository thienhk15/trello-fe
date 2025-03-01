import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  { ignores: ['dist', 'node_modules', 'build'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // react
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/self-closing-comp': ['error'],
      'react/jsx-indent' : ['error', 2], // Thụt lề 2 khoảng trắng trong JSX

      // common
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      "no-mixed-spaces-and-tabs": "error", 
      'semi': ['error', 'never'],
      'no-extra-semi': 'error', 
      // 'eol-last': ['error', 'always'], // Luôn có dòng trống cuối file
      'padded-blocks': ['error', 'never'], // Không cho phép thừa dòng trống trong block
      'operator-linebreak': ['error', 'before'], // Dấu xuống dòng trước
      'dot-location': ['error', 'property'], // Đặt dấu chấm tại dòng chứa property
      'eqeqeq': ['error', 'always'], // Sử dụng ===
      'curly': ['error', 'all'], // Bắt buộc {} trong mọi câu lệnh
      'consistent-return': ['error'], // Giá trị trả về đồng nhất
      'no-debugger': 'warn', // Báo lỗi nếu sử dụng debugger
      'prefer-const': ['warn'], // Khuyến khích dùng const nếu có thể
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],


      // MUI
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@mui/*/*/*'],
        },
      ],
    },
  },
]
