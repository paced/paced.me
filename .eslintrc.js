module.exports = {
  "root": false,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: [
    "**/lib/**/*",
    "next.config.js",
  ],
  rules: {
    // We use conflicting rule extensions. One for semicolons; we prefer them most of the time:

    "semi": [0],
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/member-delimiter-style": ["error"],

    "quotes": ["warn", "double"],

    // We program in TS, not JS. Some rules don't apply to us because we have better code tools.

    "valid-jsdoc": ["warn", {
      "requireParamType": false,
      "requireReturnType": false,
      "requireReturn": false,
    }],
    "no-invalid-this": [0],
    "no-unused-vars": [0],
    "@typescript-eslint/no-invalid-this": ["error"],
    "@typescript-eslint/no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
    }],

    "react/jsx-tag-spacing": [
      "warn",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "beforeClosing": "never"
      }
    ],
    "react-hooks/exhaustive-deps": [
      0
    ],
    "@next/next/no-img-element": [
      0
    ],
  },
  plugins: [],
};
