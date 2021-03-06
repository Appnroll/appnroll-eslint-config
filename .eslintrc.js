module.exports = {
  env: {
    "browser": true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:jsx-a11y/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "testing-library",
    "jest-dom",
    "react",
    "react-hooks"
  ],
  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/jsx-boolean-value": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "no-async-promise-executor": "warn",
    "no-prototype-builtins": "warn",
    "no-extra-boolean-cast": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "react/no-unescaped-entities": "warn",
    "react/jsx-no-target-blank": "warn",
    "jest-dom/prefer-enabled-disabled": "warn"
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
}
