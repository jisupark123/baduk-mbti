import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{ts,tsx}'],

    // TODO: typeChecking을 eslint에 추가
    // languageOptions: {
    //   parser,
    //   parserOptions: {
    //     project: './tsconfig.app.json',
    //     // projectService: true,
    //     tsconfigRootDir: import.meta.dirname,
    //   },
    // },
    plugins: { prettier: eslintPluginPrettier, import: importPlugin, react },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      // tseslint.configs.recommendedTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect', // 현재 프로젝트의 React 버전을 자동으로 감지
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'no-use-before-define': 0,
      'object-shorthand': ['error', 'always'], // 객체 리터럴에서 축약 구문 사용 강제
      'arrow-body-style': ['error', 'as-needed'], // 화살표 함수에서 불필요한 중괄호 사용 금지
      'prefer-arrow-callback': 'error', // 콜백 함수에서 화살표 함수 사용 강제
      eqeqeq: ['error', 'always'], // == 대신 === 사용 강제

      // typescript-eslint
      '@typescript-eslint/array-type': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-explicit-any': 0, // any 타입 사용 허용
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // _로 시작하는 인자는 미사용 허용
          varsIgnorePattern: '^_', // _로 시작하는 변수는 미사용 허용
        },
      ],
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/no-empty-object-type': 0,

      // react 관련 규칙
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // React 17 이상에서는 JSX에서 React import 필요 없음
      'react/jsx-uses-react': 'off', // React 17 이상에서는 JSX에서 React import 필요 없음
      'react/jsx-key': 'error', // iterator 렌더링 시 key prop 필수
      'react/jsx-no-duplicate-props': 'error', // JSX에서 중복된 props 사용 금지
      'react/jsx-no-undef': 'error', // JSX에서 정의되지 않은 변수 사용 금지
      'react/no-children-prop': 'error', // children을 prop으로 직접 넘기는 것 금지
      'react/no-danger': 'error', // dangerouslySetInnerHTML 사용 금지 (XSS 위험)
      'react/no-deprecated': 'error', // deprecated API 사용 금지
      'react/self-closing-comp': 'error', // 자식 없는 컴포넌트는 self-closing 쓰도록 강제
      'react/jsx-curly-brace-presence': 'error', // 불필요한 중괄호 사용 금지

      // import 관련 규칙
      'no-restricted-imports': [
        'error',
        {
          paths: [
            // import { React } from 'react' 금지
            {
              name: 'react',
              importNames: ['default'],
              message: "Import named exports from 'react' instead.",
            },
          ],
          patterns: ['../*', './*'], // 상대 경로 import 금지
        },
      ],
      // react
      'react/prop-types': 0,
      // react-native
      'react-native/no-raw-text': 0, // <Text> 내부에 하드코딩된 문자열 허용

      // eslint-config-standard overrides
      'comma-dangle': 0,
      'no-global-assign': 0,
      quotes: 0,
      'space-before-function-paren': 0,
      // eslint-import
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc', // 알파벳 오름차순으로 정렬 (A → Z)
            caseInsensitive: true, // 대소문자 구분 없이 정렬
          },
          'newlines-between': 'always', // 각 import 그룹 간에 항상 한 줄을 띄움
          groups: [['builtin', 'external'], 'internal', 'unknown', ['parent', 'sibling'], 'index'],
          distinctGroup: false,
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/lib/**', // src/lib 폴더
              group: 'internal',
              position: 'before', // 다른 internal보다 먼저
            },
          ],
          pathGroupsExcludedImportTypes: ['react'], // react 제외
        },
      ],
      'import/newline-after-import': 1,
      // naming convention 규칙 설정
      '@typescript-eslint/naming-convention': [
        'error',
        // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        // camelCase 함수, PascalCase 함수 허용
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        // PascalCase 클래스, interfaces, type aliases, enums 허용
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // interface 앞에 I 사용 불가
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
        // typeAlias 앞에 T 사용 불가
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: {
            regex: '^T[A-Z]',
            match: false,
          },
        },
        // typeParameter 앞에 T 사용 불가
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: {
            regex: '^T[A-Z]',
            match: false,
          },
        },
      ],

      // 구조 분해 할당 강제
      'prefer-destructuring': [
        'error',
        {
          // 변수 선언 시 구조 분해 할당 강제
          VariableDeclarator: {
            array: false,
            object: true,
          },
          // 할당 시 구조 분해 할당 강제
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
      ],
    },
  },
  eslintConfigPrettier, // prettier와 충돌하는 eslint 규칙을 off (따라서 맨 마지막에 위치)
);
