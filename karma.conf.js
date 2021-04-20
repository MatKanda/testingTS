const webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['test/*.ts', 'test/*.js', 'test/**/*.[sS]pec.js', 'test/**/*.js'],
        exclude: [],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["Chrome"],
        singleRun: true,
        concurrency: Infinity,

        preprocessors: {
            'test/**/*.js': ['webpack'],
            'test/**/*.ts': ['webpack'],
            'dist/*.js': ['coverage']
        },

        plugins: [
            "karma-chrome-launcher",
            "karma-coverage",
            "karma-jasmine",
            "karma-jasmine-html-reporter",
            "karma-mocha-reporter",
            "karma-webpack"
        ],

        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            mode: webpackConfig.mode,
            devtool: 'inline-source-map',
        },

        reporters: ['progress', 'coverage', 'mocha'],

        coverageReporter: {
            includeAllSources: true,
            dir: './dist/reports/coverage',
            reporters: [
                {type: "html", subdir: "html"},
                {type: 'lcov', subdir: '.'},
                {type: 'text-summary'}
            ]
        }

    });
}
