const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require('@cypress/webpack-preprocessor');
const {
    addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
    env: {
        allure: true,
        allureReuseAfterSpec: true,
        stepDefinitions: `**/*-steps.js`
    },
    e2e: {
        baseUrl: "https://d3px2o5g93r1fd.cloudfront.net/signIn",
        specPattern: "cypress/features/**/*.feature",
        setupNodeEvents: async function (on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                webpack({
                    webpackOptions: {
                        resolve: { extensions: ['.ts', '.js'] },
                        module: {
                            rules: [
                                {
                                    test: /\.feature$/,
                                    use: [
                                        {
                                            loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                            options: config
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                })
            );
            allureWriter(on, config);
            return config;
        }
    },
    defaultCommandTimeout: 10000,
    defaultpageLoadTimeout: 100000,
});
