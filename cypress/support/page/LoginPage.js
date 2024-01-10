class LoginPage {

    emailField() {
        return cy.get('#email')
    }

    passwordField() {
        return cy.get('#password')
    }

    signInButton() {
        return cy.get('.primaryButton')
    }

    messageError() {
        return cy.get('.errorContainerLabel')
    }
    connectWallet() {
        return cy.get('.title.typewriter').contains('Connect a Wallet')
    }
    signUpButton() {
        return cy.get('.labelBottom.typewriter').contains('SIGN UP')
    }
    nicknameField() {
        return cy.get('#name')
    }
    confirmPasswordField() {
        return cy.get('#confirmPassword')
    }
    welcomeBackTitle() {
        return cy.get('.title.line.typewriter')
    }
    forgotPasswordText() {
        return cy.get('.signIn_passwordContainer__cl7p0').contains('Forgot Password?')
    }
    signWithSocialtext() {
        return cy.get('.or-text').contains('OR SIGN IN WITH SOCIALS')
    }
    dontHaveAnAccountText() {
        return cy.get('.labelBottom.typewriter')
    }
    closeButton() {
        return cy.get('.closeButton')
    }
    backButton() {
        return cy.get('.backButton')
    }
    emptyFieldMessage() {
        return cy.get('.errorTextInput')
    }
    forgotPasswordTitle() {
        return cy.get('.popTitle.typewriter')
    }
    verifyEmailText() {
        return cy.get('.signIn_labelBottom__-3fkI.typewriter')
    }
    sendCodeButton() {
        return cy.get('.primaryButton')
    }
    verifyEmailTitle() {
        return cy.get('.popTitle.typewriter')
    }
    loginToKprverseBtn() {
        return cy.get('.interactive-cta.padding-small.is-fill-hidden.fill-width-mobile').first()
    }
    passwordFieldHome() {
        return cy.get('.password')
    }
    submitButton() {
        return cy.get('.submit')
    }
    signInBtn() {
        return cy.get('#widget-login-btn')
    }
    signInHomeBtn() {
        return cy.get('button[class="styles_buttonDefault__usd_6"]')
    }
    settingsTitle() {
        return cy.get('.jsx-10766fb532205367.Login_loginTitle__iWqKZ')
    }

    settingsTitle2() {
        return cy.get('h2[class="jsx-484c5d75a9787ce1 Login_loginTitle__iWqKZ"]')
    }

    signInButtonStg() {
        return cy.get('.login-btn')
    }

}
export default LoginPage;