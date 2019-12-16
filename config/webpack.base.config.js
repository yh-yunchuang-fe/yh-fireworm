const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}

const devMode = process.env.NODE_ENV === 'development'

const getCssLoader = () => {
    let cssLoader = [
        { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
        { loader: 'css-loader' }
    ]
    cssLoader.push({
        loader: 'px2rem-loader',
        options: {
            remUnit: 37.5,
            remPrecision: 8
        }
    })
    cssLoader.push({
        loader: 'postcss-loader',
        options: {
            config: {
                path: path.join(__dirname, '../postcss.config.js')
            }
        }
    })
    return cssLoader
}

const cssLoader = getCssLoader()

const lessLoader = cssLoader.concat({
    loader: 'less-loader',
    options: {
        modifyVars: {
            'primary-color': '#10AEAF',
            'link-color': '#10AEAF',
            'border-radius-base': '2px'
        },
        javascriptEnabled: true
    }
})

module.exports = {
    entry: {
        app: `${resolve('src/index.js')}`
    },

    output: {
        path: resolve('dist/'),
        publicPath: '',
        filename: `js/[name].[hash:4].js`,
        chunkFilename: `js/[name].chunk.js`
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [resolve('src'), resolve('node_modules/yh-cedar-ui')],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: [
                    resolve('src'),
                    resolve('node_modules/normalize.css'),
                    resolve('node_modules/yh-cedar-ui'),
                    // resolve('node_modules/antd')
                ],
                use: cssLoader
            },
            {
                test: /\.less$/,
                include: [
                    resolve('src'),
                    resolve('node_modules/yh-cedar-ui'),
                    resolve('node_modules/antd')
                ],
                use: lessLoader
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    publicPath: '/assets/img',
                    outputPath: '/assets/img',
                    name: `[name].[hash:4].[ext]`
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    publicPath: '/assets/font',
                    outputPath: '/assets/font',
                    name: `[name].[hash:4].[ext]`
                }
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: '/assets/audio',
                    outputPath: '/assets/audio',
                    name: `[name].[hash:4].[ext]`
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist/libs']
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name].[hash:4].css`,
            chunkFilename: `css/[id].[hash:4].css`
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `src/index.html`
        })
    ]
}