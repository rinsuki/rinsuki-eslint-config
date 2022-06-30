// https://github.com/yarnpkg/berry/discussions/3909
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "./without-ts.js",
    ],
    rules: {
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/switch-exhaustiveness-check": "warn",
    },
}
