module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    env: {
        browser: true,
        es6: true,
        amd: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
}