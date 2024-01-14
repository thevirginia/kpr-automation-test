const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require('@cypress/webpack-preprocessor');
const {
    addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');
const dotenv = require('dotenv');

module.exports = defineConfig({
    failOnStatusCode: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    // numTestsKeptInMemory: 0,
    env: {
        NODE_ENV: process.env.NODE_ENV,
        URL_MINT: process.env.URL_MINT,
        URL_LOGIN_KPR: process.env.URL_LOGIN_KPR,
        URL_WIDGET: process.env.URL_WIDGET,
        URL_MINTPAGE: process.env.URL_MINTPAGE,
        URL_SETTINGS: process.env.URL_SETTINGS,
        URL_HAVEN_KPR: process.env.URL_HAVEN_KPR,
        allure: true,
        allureReuseAfterSpec: true,
        stepDefinitions: `**/*-steps.js`,
        allureLogGherkin: true,
    },
    e2e: {
        failOnStatusCode: false,
        chromeWebSecurity: false,
        videoUploadOnPasses: false,
        trashAssetsBeforeRuns: true,
        experimentalModifyObstructiveThirdPartyCode: true,
        specPattern: "cypress/features/**/*.feature",
        setupNodeEvents: async function (on, config) {
            const envFile = `.env.${config.env.NODE_ENV || 'develop'}`
            dotenv.config({ path: envFile })
            config.env = {
                ...config.env,
                ...process.env
            }
            console.log(`Running in environment: .env.${config.env.NODE_ENV || 'ENVIRONMENT NOT FOUND'}`)
            await addCucumberPreprocessorPlugin(on, config);
            on('before:browser:launch', (browser = {}, launchOptions) => {
                if (browser.family === 'chromium' && browser.name !== 'electron') {
                    launchOptions.args.push('--mute-audio');
                    return launchOptions;
                }
            });
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
    videoUploadOnPasses: false,
    trashAssetsBeforeRuns: true,
    defaultCommandTimeout: 10000,
    defaultpageLoadTimeout: 100000
});
