import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/page/LoginPage";

const loginPage = new LoginPage();
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`
const url = Cypress.env('URL_LOGIN')

Given('A user opens a {string} website', (sitio) => {
    cy.visit(url + "/signIn");
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
    loginPage.closeButton().click();
});

When('A user clicks on the back button', () => {
    loginPage.backButton().click();
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