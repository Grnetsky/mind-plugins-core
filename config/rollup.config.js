// commonjs打包配置
var common = require("./rollup")

module.exports = {
    input:"./index.js",
    output:{
        file:"dist/index.js",
        format:"cjs", //commonjs
        banner:common.banner
    },
    plugins:[common.getCompiler(),]
}