module.exports = {
    root: true,
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
    ],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        "@typescript-eslint/no-explicit-any": 'error',
        'class-methods-use-this': 'off',
    }
};