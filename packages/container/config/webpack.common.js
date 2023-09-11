const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    module:{
        rules:[
            {
                test:/\.m?js$/,                 //file end wit .m or .js, it will load wit babel
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env'],
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}