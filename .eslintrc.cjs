module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  settings: {
    "import/resolver": {
      typescript: {
        " alwaysTryTypes": true,
      },
    },
  },
  rules: {
    "object-curly-spacing": ["warn", "always"],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],
    "@typescript-eslint/semi": ["off"],
    quotes: ["error", "double"],
    "max-lines": [
      "error",
      { max: 200, skipBlankLines: true, skipComments: true },
    ],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-mixed-spaces-and-tabs": 0,
    "linebreak-style": 0,
  },
};
