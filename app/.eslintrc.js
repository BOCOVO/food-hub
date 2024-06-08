// https://docs.expo.dev/guides/using-eslint/

module.exports = {
  root: true,
  extends: ["expo", "prettier"],
  parserOptions: {
    project: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project:
          "/Users/justebocovo/Documents/code/my-project/food-hub/app/tsconfig.json",
      },
    },
  },
};
