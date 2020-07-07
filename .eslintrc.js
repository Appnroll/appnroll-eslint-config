module.exports = {
  env: {
    "browser": true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:jsx-a11y/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  plugins: ["@typescript-eslint", "jsx-a11y", "testing-library", "jest-dom"],
  rules: {
    "interface-name": 0,
    "no-console": 0,
    "object-literal-sort-keys": 0,
    "jsx-boolean-value": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-types": 1,
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/restrict-plus-operands": 1,
    "@typescript-eslint/ban-ts-comment": 0,
    "react-hooks/rules-of-hooks": 1,
    "@typescript-eslint/no-unsafe-assignment": 1,
    "@typescript-eslint/no-unsafe-member-access": 1,
    "@typescript-eslint/no-unsafe-call": 1,
    "@typescript-eslint/restrict-template-expressions": 1,
    "@typescript-eslint/no-floating-promises": 1,
    "@typescript-eslint/no-unsafe-return": 1
  }
}
