const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/**", ".expo/**"],
  },
  {
    files: ["**/*.{ts,tsx,js,mjs}"],
    rules: {
      "max-lines": [
        "error",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { "@typescript-eslint": typescriptEslint },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSAsExpression",
          message: "Narrow values without casting.",
        },
        {
          selector: "TSTypeAssertion",
          message: "Narrow values without casting.",
        },
        {
          selector: "TSNonNullExpression",
          message: "Handle missing values explicitly.",
        },
      ],
    },
  },
  {
    files: ["src/**/domain/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "AssignmentExpression",
          message: "Domain code must remain immutable.",
        },
        {
          selector: "UpdateExpression",
          message: "Domain code must remain immutable.",
        },
        {
          selector: "CallExpression[callee.property.name=/^(push|splice)$/]",
          message: "Domain code must remain immutable.",
        },
        {
          selector: "TSAsExpression",
          message: "Narrow values without casting.",
        },
        {
          selector: "TSTypeAssertion",
          message: "Narrow values without casting.",
        },
        {
          selector: "TSNonNullExpression",
          message: "Handle missing values explicitly.",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/platform/**",
                "**/api/**",
                "**/schemas/**",
                "**/contracts/**",
                "expo-*",
                "react-native",
              ],
              message:
                "Domain code must not import platform or transport concerns.",
            },
          ],
        },
      ],
      "no-restricted-globals": ["error", "fetch", "Date"],
    },
  },
]);
