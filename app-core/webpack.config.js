const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        mode: process.env.NODE_ENV || 'development',
        devServer: {
            port: 3000,
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
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env),
            }),
            new ModuleFederationPlugin({
                name: 'container',
                remotes: {
                    'some_feature_app': 'some_feature_app@http://localhost:3001/remoteEntry.js',
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
};
