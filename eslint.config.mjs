import jsdoc from "eslint-plugin-jsdoc";
import babelParser from "@babel/eslint-parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      parser: babelParser,
      requireConfigFile: false, // Schakel dit uit als je geen Babel-configuratiebestand hebt
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        jest: "readonly"
      }
    },
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error"
    }
  },
  pluginReactConfig,
  ...fixupConfigRules(pluginReactConfig)
];
