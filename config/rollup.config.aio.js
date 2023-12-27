// rollup.config.js
// umd
let  typescript = require('rollup-plugin-typescript2');

var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

var common = require('./rollup.js');

module.exports = {
    input: 'index.ts',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        name: common.name,
        banner: common.banner,
    },
    external: ['@meta2d/core'],
    plugins: [
        nodeResolve({
            main: true,
            extensions: ['.ts']
        }),
        typescript(),
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler(),
    ]
};
