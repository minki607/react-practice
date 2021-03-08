const path = require('path')
const getAbsolutePath = (dirPath) => path.resolve(__dirname, dirPath)

module.exports = {
    // 번들 모드 설정
    mode: 'development',

    entry: {
        main: './src/index.js',
    },

    output: {
        path: getAbsolutePath('public'),
        filename: 'js/[name].js',
        publicPath: '/',
    },
    devServer: {
        contentBase: getAbsolutePath('public'),
        index: 'index.html',
        port: 9000,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
}
