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
    google: "readonly",
    MAPS_API_KEY: "readonly",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "react/jsx-props-no-spreading": "off",
  },
};
