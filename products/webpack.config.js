// products webpack

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            shared: {
                faker: {
                    singleton: true // this will load only one version of faker across apps
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};