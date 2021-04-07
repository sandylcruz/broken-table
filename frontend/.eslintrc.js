module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    $: "readonly",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
