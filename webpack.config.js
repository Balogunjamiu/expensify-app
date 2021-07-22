const path = require('path')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const { webpack } = require('webpack')
//process .env.Node
process.env_NODE_ENV = process.env_NODE_ENV || 'development'
if (process.env_NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'})
} else if(process.env_NODE_env === 'devlopment'){
    require('dotenv').config({path: '.env.development'})
}
module.exports = (env, argv)=>{
    const isProduction = argv.mode === 'production'
   // const CSSExtract = new MiniCssExtractPlugin('styles.css')
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
            }),
            new webpack.DefinePlugin({
                'process.env.FIREBASE_KEY' : JSON.stringify( process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify( process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_PROJECT_ID' : JSON.stringify( process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET' : JSON.stringify( process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify( process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID' : JSON.stringify( process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASEUREMENT_ID' : JSON.stringify( process.env.FIREBASE_MEASEUREMENT_ID)

            })
        ],
        devtool: isProduction? 'source-map':"inline-cheap-module-source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath:'/dist/'
        }
    }
}