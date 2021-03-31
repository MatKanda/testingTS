const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
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
        filename: "libka.js",
        path: path.resolve(__dirname,"dist")
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname,"example")
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}
