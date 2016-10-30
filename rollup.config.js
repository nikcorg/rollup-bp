const buble = require('rollup-plugin-buble');

module.exports = {
  plugins: [
    buble({ jsx: 'createElement' })
  ],
  format: 'cjs',
}

