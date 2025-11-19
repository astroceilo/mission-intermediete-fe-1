import { defineConfig, globalIgnores } from 'eslint/config';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import js from '@eslint/js';


export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      // so that interface/type aliases are not considered a problem
      '@typescript-eslint/consistent-type-definitions': 'off',

      // so that the optional property (bgClass?) doesn't get a warning
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',

      // so that implicit any in the callback parameter (item) doesn't cause trouble
      '@typescript-eslint/no-explicit-any': 'off',

      // react strict unnecessary warning
      'react-refresh/only-export-components': 'off',
    },
  },
])
