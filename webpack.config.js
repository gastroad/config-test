const path = require("path")

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'testConfig.js'
    },
    resolve: {
        alias: {
            "@src": path.resolve("./src"),
            "@components": path.resolve("./src/components"),
            "@utils": path.resolve("./src/utils")
        },
        // extensions: ['ts', 'tsx', 'js', 'jsx', 'json']
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json']
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    devServer: {
        host: "0.0.0.0",
        port: 443,
        compress: true,
        https: true,
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ]
};