const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const getBaseConfig = require('./webpack.base.config')

function getDevConfig() {

    const webpackBaseConfig = getBaseConfig()

    return webpackMerge(webpackBaseConfig, {

        mode: 'development',

        devtool: '#source-map',

        optimization: {
            namedModules: true, //取代插件中的 new webpack.NamedModulesPlugin()
            namedChunks: true
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 4000
        }
    })
}

module.exports = getDevConfig()