import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/page/LoginPage";

const loginPage = new LoginPage();
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`
const urlSettings = Cypress.env('URL_SETTINGS')
const urlWidget = Cypress.env('URL_WIDGET')
const urlSettingsStag = Cypress.env('URL_SETTINGS_STAGING')
const urlKprStaging = Cypress.env('URL_LOGIN_KPR_STG')

Given('A user opens a login website in {string}', (env) => {
    if (env === 'staging') {
        cy.request({
            failOnStatusCode: false,
            url: 'https://:ramen23_kpr@kpr-boon-stg.web.app',
            headers: {
                'Authorization': `Basic ${btoa(':ramen23_kpr')}`
            }
        }).then((resp) => {
            // expect(resp.status).to.eq(200);
            cy.visit('https://kpr-boon-stg.web.app', { failOnStatusCode: false, timeout: 150000 })
        });
    } else if (env === 'dev') {
        cy.request({
            failOnStatusCode: false,
            url: 'https://:ramen23_kpr@kpr-boon-dev.web.app',
            headers: {
                'Authorization': `Basic ${btoa(':ramen23_kpr')}`
            }
        }).then((resp) => {
            // expect(resp.status).to.eq(200);
            cy.visit('https://kpr-boon-dev.web.app', { failOnStatusCode: false, timeout: 150000 })
        });
    }

});

Given('A user clicks on the login to kprverse button', () => {
    loginPage.loginToKprverseBtn().click({ timeout: 150000 });
});

Given('A user enters the password in the home page', () => {
    loginPage.passwordFieldHome().type('ramen23_kpr');
});

Given('A user clicks on the submit button', () => {
    loginPage.submitButton().click();
});

Given('the user opens the website', () => {
    cy.visit(urlWidget);
});

Given('A user clicks the Login button in the home page', () => {
    loginPage.signInBtn().click();
});

Given('the user Sign into the settings page in {string}', (env) => {
    if (env === 'staging') {
        cy.visit(urlSettingsStag);
    } else if (env === 'develop') {
        cy.visit(urlSettings);
    }
});

Given('A user clicks the Sign in button in the home page', () => {
    loginPage.signInHomeBtn().should('be.visible').click({ force: true });
    cy.wait(1000)
    loginPage.signInHomeBtn().should('be.enabled').click({ force: true });
});


When('A user enters the email {string}', (email) => {
    loginPage.emailField().type(email);
});

When('A user enters the password {string}', (password) => {
    loginPage.passwordField().type(password);
});

When('A user clicks on the login button', () => {
    loginPage.signInButton().click();
});

Then('valid if the user has been able to login', () => {
    loginPage.forgotPasswordTitle().should('be.visible');
});

Then('The error message is displayed', () => {
    loginPage.messageError().should('be.visible');
});

When('A user clicks on the sign up button', () => {
    loginPage.signUpButton().click();
});

When('A user enters the nickname', () => {
    loginPage.nicknameField().type(testname);
});

When('A user enters the new email', () => {
    loginPage.nicknameField().should('be.visible');
    loginPage.emailField().type(testname + '@gmail.com');
});

When('A user enter the confirm Password {string}', (password) => {
    loginPage.confirmPasswordField().type(password);
});

When('valid that the text {string} is visible', (text) => {
    if (text === 'Welcome back Keeper') {
        loginPage.welcomeBackTitle().should('be.visible');
    } else if (text === 'Forgot Password?') {
        loginPage.forgotPasswordText().should('exist');
    } else if (text === 'OR SIGN IN WITH SOCIALS') {
        loginPage.signWithSocialtext().should('be.visible');
    } else if (text === 'Dont have an account?') {
        loginPage.dontHaveAnAccountText().should('exist');
    } else if (text === 'Forgot your password') {
        loginPage.forgotPasswordTitle().should('be.visible');
    } else if (text === 'Verify your email address?') {
        loginPage.verifyEmailText().should('be.visible');
    }
});

When('A user clicks on the {string} button', () => {
    loginPage.closeButton().click({ force: true });
    loginPage.closeButton().click({ force: true });
});

Then('valid that the user returned to the home page', () => {
    loginPage.settingsTitle().should('be.visible');
});

When('A user clicks on the back button', () => {
    loginPage.backButton().click({ force: true });
});

Then('valid button on the home page', () => {
    loginPage.welcomeBackTitle().should('be.visible');
});

Then('valid error message of empty field', () => {
    loginPage.emptyFieldMessage().should('be.visible');
});

Then('valid {string} background text is visible', (text) => {
    if (text === 'Email') {
        loginPage.emailField().invoke('attr', 'placeholder').should('contain', text);
    } else if (text === 'Password') {
        loginPage.passwordField().invoke('attr', 'placeholder').should('contain', text);
    } else if (text === 'Nickname') {
        loginPage.nicknameField().invoke('attr', 'placeholder').should('contain', text);
    } else if (text === 'Confirm Password') {
        loginPage.confirmPasswordField().invoke('attr', 'placeholder').should('contain', text);
    } else if (text === 'Email Address') {
        loginPage.emailField().invoke('attr', 'placeholder').should('contain', text);
    }
});

When('A user clicks on the forgot Password button', () => {
    loginPage.forgotPasswordText().click();
});

Then('A user clicks on the Send Verification Code button', () => {
    loginPage.sendCodeButton().click();
});

Then('valid if the user has been able to register', () => {
    loginPage.verifyEmailTitle().should('be.visible');
});