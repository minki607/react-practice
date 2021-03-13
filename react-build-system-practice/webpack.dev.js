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

    // 모듈(규칙) - 로더 객체
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
}
