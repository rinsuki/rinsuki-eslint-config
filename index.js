module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "unused-imports", "react"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-var": "off",
        "@typescript-eslint/no-var-requires": "off", // 本当はしたくないが仕方ない

        // no unused imports 周り
        "react/jsx-uses-vars": 2,
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports-ts": [
            2,
            { varsIgnorePattern: "^React$" },
        ],
        "unused-imports/no-unused-vars-ts": 1,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        node: true,
        commonjs: true,
    },
}
