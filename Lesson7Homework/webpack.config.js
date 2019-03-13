const path = require("path"),
    glob = require("glob"),
    HTMLplugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "Application.jsx")
    },
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                pathRewrite: {'^/api' : ''},
                changeOrigin: true,
                secure: false,
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                options: {
                    name: "[hash:5].[ext]"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|jpe?g|png)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/hash.[ext]"
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            gifsicle: {
                                interlanced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: "svg-sprite-loader",
                        options: {
                            extract: true,
                            spriteFilename: "img/sprite-[hash:6].svg"
                        }
                    },
                    {
                        loader: "svgo-loader",
                        options: {
                            plugins: [
                                {
                                    removeTitle: true
                                },
                                {
                                    convertColors: {
                                        shorthex: false
                                    }
                                },
                                {
                                    convertPathData: false
                                }
                            ]
                        }
                    },
                    "svg-transform-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: "all"
        }
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            components: path.resolve(__dirname, "src", "Components"),
            containers: path.resolve(__dirname, "src", "Containers"),
            actions: path.resolve(__dirname, "src", "actions"),
            reducers: path.resolve(__dirname, "src", "reducers"),
            efi: path.resolve(__dirname, "src", "efi"),
            layouts: path.resolve(__dirname, "src", "layouts")
        }
    },
    plugins: [
        new HTMLplugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new SpriteLoaderPlugin()
    ]
};
