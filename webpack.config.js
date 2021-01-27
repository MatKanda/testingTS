const path = require( 'path' );

module.exports = {

    // bundling mode
    mode: 'production',

    //generate source map
    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    },


    optimization: {
        minimize: false
    },

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist/lib' ),
        filename: 'index.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
};