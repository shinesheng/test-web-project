const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

var webpackConfig = {
    //插件项
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new CopyWebpackPlugin([{
            from: __dirname + '/app/lib',
            to: __dirname + '/dist/lib'
        }]),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.ejs',
            filename: 'index.html',
            inject: true,
            hash: true,
            chunks: ['index']
        }),
    ],
    //页面入口文件配置
    entry: { index: './app/src/index.js', },
    //入口文件输出配置
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    },
    devtool: 'source-map',
    // 开发服务器，实时重新加载
    devServer: {
        contentBase: './dist',
        port: 8222,
        proxy: {
            "/api": {
                target: 'http://localhost:8005',
                // target: 'http://localhost:16269',
                //   pathRewrite: {'^/api' : ''},
                changeOrigin: true
            }
        },
    },
};

module.exports = webpackConfig;