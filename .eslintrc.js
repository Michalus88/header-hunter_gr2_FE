module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    ignorePatterns: [
        '.eslintrc.js',
        '/*.js',
        '/*.js',
        'node_modules',
        'public',
        'coverage',
        'dist',
        'build',
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'import/prefer-default-export': 'off',
        'react/jsx-uses-react': 1,
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                labelComponents: ['CustomInputLabel'],
                labelAttributes: ['label'],
                controlComponents: ['CustomInput'],
                depth: 3,
            },
        ],
    },
    settings: {
        'import/parser': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
};