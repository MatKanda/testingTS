const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,"src/index.ts"),
    resolve: {
        extensions: [".ts",".tsx",".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node-modules/
            }
        ]
    },
    output: {
        filename: "WebGuide.js",
        path: path.resolve(__dirname,"dist")
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname,"example"),
        port: 9000,
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false})
    ]
}
