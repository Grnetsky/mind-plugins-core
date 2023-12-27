// commonjs打包配置
var common = require("./rollup")
const nodeResolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");

module.exports = {
    input:"./index.ts",
    output:{
        file:"dist/index.ts",
        format:"cjs", //commonjs
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
        }),common.getCompiler()]

}