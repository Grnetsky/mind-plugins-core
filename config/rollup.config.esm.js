// esm打包配置
var common = require("./rollup")

const nodeResolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
let defaults = { compilerOptions: { declaration: true } };
let override = { compilerOptions: { declaration: false } };
module.exports = {
    input:"index.ts",
    output:{
        file:"dist/index.esm.js",
        format:"es",
        banner:common.banner
    },
    external: ['mind-diagram','@meta2d/core'],
    plugins:[
        nodeResolve({
        main: true,
        extensions: ['.js']
    }),
        commonjs({
            include: 'node_modules/**',
        }),common.getCompiler(),
        typescript({
            tsconfigDefaults: defaults,
            tsconfig: "tsconfig.json",
            tsconfigOverride: override
        }),]

}