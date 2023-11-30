const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require('@cypress/webpack-preprocessor');
const {
    addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');
require('dotenv').config();

module.exports = defineConfig({
    failOnStatusCode: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    // numTestsKeptInMemory: 0,
    env: {
        URL_MINT: process.env.URL_MINT,
        URL_LOGIN: process.env.URL_LOGIN,
        URL_WIDGET: process.env.URL_WIDGET,
        URL_SETTINGS: process.env.URL_SETTINGS,
        URL_MINTPAGE: process.env.URL_MINTPAGE,
        URL_SETTINGS_STAGING: process.env.URL_SETTINGS_STAGING,
        URL_MINTPAGE_STAGING: process.env.URL_MINTPAGE_STAGING,
        URL_LOGIN_KPR_STG:process.env.URL_LOGIN_KPR_STG,
        allure: true,
        allureReuseAfterSpec: true,
        stepDefinitions: `**/*-steps.js`,
    },
    e2e: {
        failOnStatusCode: false,
        chromeWebSecurity: false,
        experimentalModifyObstructiveThirdPartyCode: true,
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
    defaultpageLoadTimeout: 100000
});
