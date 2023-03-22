const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const fs = require('fs')

let srcDir = './src'
let htmlFiles = fs.readdirSync(srcDir)
    .filter(file => path.extname(file) === '.html')
    .map(x => path.join(srcDir, x))

let lottieDir = './src/lottie'
let lottieFiles = fs.readdirSync(lottieDir)
    .map(x => path.join(lottieDir, x))

let filesToCopy = htmlFiles.concat(['./src/lottie'])

module.exports = {
    entry: "./bootstrap.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
        clean: true
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin(filesToCopy)
    ],
};
