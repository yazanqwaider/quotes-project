const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader","css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        warnRuleAsWarning: true,
                    },
                }
            ],
          },
        ]
    },
};

