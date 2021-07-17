const path = require('path')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
module.exports = (env, argv)=>{
    const isProduction = argv.mode === 'production'
   // const CSSExtract = new MiniCssExtractPlugin('styles.css')
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module : {
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            },{
                test: /\.s?css$/,
                    use: [MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                            {
                                loader:'sass-loader',
                                options:{
                                    sourceMap:true
                                }
                            }
                    ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        devtool: isProduction? 'source-map':"inline-cheap-module-source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}