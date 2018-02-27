var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'), //檔案原始路徑
    entry: {
        bundle: './app.jsx', //待打包檔案的進入點
        vendors: [
            'babel-polyfill',
            'react',
            'react-dom'
        ] //解決各瀏覽器問題
    },
    output: {
        filename: '[name].js', //根據entry的key值產生js檔名
        publicPath: '/assets/', //使用require時的參考路徑
        path: path.join(__dirname, 'public', 'assets') //輸出檔案的路徑位置
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //可轉譯的檔案類型
                loader: "babel-loader",
                enforce: "pre",
                options: {
                    presets: ['react', 'es2017', 'stage-0'] //babel-preset-react 讓js檔可以直接使用react的語法
                    //presets: ['react', 'env'] //babel-preset-react 讓js檔可以直接使用react的語法
                },
            },
            {
                test: /\.(sass|scss)$/,
                //use順序不能改變，實際上會由後往前解析 sass -> css -> style
                use:[{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            }
        ]
    },
    //plugins 將公用模組拆出，編譯後檔案只會在最初載入一次，之後便暫存起來供後續使用
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors' //Specify the common bundle's name
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    //externals 因config檔在react端無法使用，須透過externals傳入物件或字串解決此問題
    externals: {
        config: JSON.stringify(require('config'))
    },
    resolve: {
        //可在載入檔案時省去副檔名撰寫
        extensions: [".js", ".jsx"],
        //從模組中取出特定檔案打包放在vendor裡，減少檔案打包數量
        alias: {
            //'react$': 'react/dist/react.min.js',
            //'react-dom$': 'react-dom/dist/react-dom.min.js',
            Source: __dirname + '/src' //設定Source路徑別名
        }
    },
    devServer:{
        hot : true,
        inline : true,
        progress : true,
    }
};