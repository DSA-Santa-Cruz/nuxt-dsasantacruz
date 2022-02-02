module.exports = {
  settings: {
    "import/core-modules": [
      "vuetify",
      "vuetify/es5/util/colors",
    ],
    "import/resolver": {
      alias: {
        map: [
          ["@", "."],
        ],
        extensions: [".vue", ".js"],
      },
    },
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  rules: {
    "vue/multi-word-component-names": 0,
    quotes: [2, "double", { avoidEscape: true }],
  },
};
