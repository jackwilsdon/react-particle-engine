import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import packageJson from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      exports: "named",
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: "runtime",
    }),
    peerDepsExternal(),
    resolve(),
  ],
};
