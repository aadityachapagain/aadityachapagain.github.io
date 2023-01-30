module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },

  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },

  extends: ["next", "next/core-web-vitals", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "import/prefer-default-export": "off",
    "no-nested-ternary": "error"
  }
};
