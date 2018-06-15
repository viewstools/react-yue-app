import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: Object.keys(pkg.dependencies),
  output: {
    file: 'app.js',
    format: 'cjs',
  },
  plugins: [json(), buble()],
}
