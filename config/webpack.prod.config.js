const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const getBaseConfig = require('./webpack.base.config')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

function getProdConfig() {
    const webpackBaseConfig = getBaseConfig()

    return webpackMerge(webpackBaseConfig, {
        mode: 'production',

        devtool: false,

        performance: {
            hints: 'warning',
            maxAssetSize: 300000, //单文件超过250k，命令行告警
            maxEntrypointSize: 300000 //首次加载文件总和超过250k，命令行告警
        },

        optimization: {
            minimizer: [
                new TerserPlugin()
            ],
            noEmitOnErrors: true
        },

        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('../dist/lib/react-manifest.json')
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('../dist/lib/common-manifest.json')
            }),
            new HtmlWebpackIncludeAssetsPlugin({
                assets: [{ path: 'lib', glob: '*.dll.js', globPath: 'dist/lib/' }],
                append: false
            })
        ]
    })
}

module.exports = getProdConfig
