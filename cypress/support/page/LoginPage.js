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
        return cy.get('.signIn_passwordContainer__ZXj3T').contains('Forgot Password?')
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
        return cy.get('.signIn_labelBottom__Iqf_M.typewriter')
    }
    sendCodeButton() {
        return cy.get('.primaryButton')
    }
    verifyEmailTitle() {
        return cy.get('.popTitle.typewriter')
    }
}
export default LoginPage;