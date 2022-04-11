const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3001,
        open: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.jsx?$/,
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [require.resolve("@babel/preset-react")],
                },
            },
            {
                test: /\.md$/,
                loader: "raw-loader",
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'some_feature_app',
            filename: 'remoteEntry.js',
            exposes: {

                './App': './src/App',
            },
            shared: {
                ...deps,
                react: { singleton: true, eager: true, requiredVersion: deps.react },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
