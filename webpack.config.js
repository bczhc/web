const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const fs = require('fs')

let srcDir = './src'
let htmlFiles = fs.readdirSync(srcDir)
    .filter(file => path.extname(file) === '.html')
    .map(x => path.join(srcDir, x))

module.exports = {
    entry: "./bootstrap.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
        clean: true
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin(htmlFiles)
    ],
};
