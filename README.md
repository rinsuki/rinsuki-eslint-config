# @rinsuki/eslint-config

## usage

```sh
yarn add -D @rinsuki/eslint-config @rinsuki/prettier-config eslint prettier
```

```js
// at package.json
{
    "eslint": {
        "extends": ["@rinsuki"], // or "@rinsuki/eslint-config/without-ts"
        "parserOptions": {
            "project": ["./tsconfig.json"]
        }
    },
    "prettier": "@rinsuki/prettier-config",
}
```
