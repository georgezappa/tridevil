import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'public/bundle.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    production && terser() // minify, but only in production
  ]
};


import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

rollup.rollup({
  entry: "src/main.js",
  plugins: [babel()]
}).then(function (bundle) {
  bundle.write({
    dest: "dist/bundle.js",
    format: "umd"
  });
});