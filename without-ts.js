// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolve = require("resolve")
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
    },
    plugins: ["import", "unused-imports", "react", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
    ],
    settings: {
        "react": {
            version: "detect",
        },
        "import/resolver": {
            typescript: true,
            node: true,
        },
    },
    rules: {
        "prettier/prettier": "error",
        "array-callback-return": "error",
        "no-constant-binary-expression": "error",
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-unreachable-loop": "warn",
        "no-octal-escape": "error",
        "linebreak-style": ["error", "unix"],
        "prefer-named-capture-group": "warn",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "warn",
        "prefer-rest-params": "warn",
        "radix": ["error", "always"],
        "require-atomic-updates": [
            "error",
            {
                allowProperties: true,
            },
        ],
        "spaced-comment": ["error", "always"],
        "yoda": ["error", "never", { exceptRange: true }],

        "array-bracket-newline": ["error", "consistent"],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "eol-last": "error",
        "function-call-argument-newline": ["error", "consistent"],
        "generator-star-spacing": ["warn", "after"],
        "key-spacing": ["warn", { beforeColon: false, afterColon: true }],
        "keyword-spacing": "warn",

        "@typescript-eslint/brace-style": "error",
        "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
        "@typescript-eslint/comma-spacing": "error",
        "@typescript-eslint/func-call-spacing": "error",
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
        ],
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/object-curly-spacing": ["warn", "always"],
        "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always",
            },
        ],
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/type-annotation-spacing": "error",

        // unused imports を消したい
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["warn", { vars: "all", args: "after-used" }],
        // import の順番が整理されていると…気持ちいい
        "import/order": [
            "warn",
            {
                "groups": ["builtin", ["external", "internal"], "parent", "sibling", "index"],
                "alphabetize": { order: "asc" },
                "newlines-between": "always",
            },
        ],
        // Node.js 組み込みモジュールに対して node: prefix を強制したい
        "import/no-nodejs-modules": [
            "warn",
            {
                allow: Object.keys(resolve.core).filter(n => n.startsWith("node:")),
            },
        ],
        // TODO コメント書いたら忘れないように warning してほしい
        // LINT_DISABLE_WARNING=yes で一時的に無効化できる
        "no-warning-comments":
            process.env.LINT_DISABLE_WARNING !== "yes"
                ? ["warn", { terms: ["todo:", "fixme:"], location: "start" }]
                : "off",
        "no-constant-condition": ["error", { checkLoops: false }],
        // TypeORM だとたまに null でないはずだが null ということがあるのでこのチェックを無効にする必要がある
        "@typescript-eslint/no-unnecessary-condition": "off",
        // Koa の ctx.throw に throw を付けたい気持ちがある (allowThrowingNever を提案してもいいかもしれない)
        "@typescript-eslint/no-throw-literal": "off",
    },
}
