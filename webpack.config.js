const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'assets/images/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env']
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(jsx?$)/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', {runtime: 'automatic'}]
                        ],
                        plugins: [
                            '@babel/transform-runtime'
                        ]
                    }
                }
            },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        compress: true,
        hot: true
    }

}