
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//自动引入到html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')//自动清除打包文件

console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量

const config = {
    entry: './src/snabbdom.js', // 打包入口地址
    // entry: '.src/index.js', // 打包入口地址
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.join(__dirname, 'dist') // 输出文件目录
    },
    devServer: {
        // 为什么要配置 contentBase ？
        // 因为 webpack 在进行打包的时候，对静态文件的处理，例如图片，
        // 都是直接 copy 到 dist 目录下面。但是对于本地开发来说，
        // 这个过程太费时，也没有必要，所以在设置 contentBase 之后，
        // 就直接到对应的静态目录下面去读取文件，而不需对文件做任何移动，节省了时间和性能开销。

        // contentBase: path.resolve(__dirname, 'public'), // 静态文件目录 // 新版本已经不支持这种写法
        // 新的写法
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true, //是否启动压缩 gzip
        port: 4399, // 端口号
        // open:true  // 是否自动打开浏览器
    },
    module: {
        rules: [
            {
                test: /\.css$/, //匹配所有的 css 文件
                use: 'css-loader' // use: 对应的 Loader 名称
            }
        ]
    },
    plugins: [ // 配置插件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new CleanWebpackPlugin() // 引入插件
    ]
}

module.exports = (env, argv) => {
    console.log('argv.mode=', argv.mode) // 打印 mode(模式) 值
    // 这里可以通过不同的模式修改 config 配置
    return config;
}

