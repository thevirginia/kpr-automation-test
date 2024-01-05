class BuyChibi {
    getOneBuyChibi() {
        return cy.get('.itemAmount_checkbox__m9Qvo');
    }
    //return cy.get('input[class=".itemAmount_checkbox__m9Qvo"]');

    getCheckoutButton() {
        return cy.get('button[class="styles_btnNext__wpusF"]');
    }

    getEthereumOption() {
        return cy.get('input[name="item-payment"]');
    }

    getContinueOption() {
        return cy.get('button[class="styles_btnNext__wpusF"]');
    }

    getMetamaskOption() {
        return cy.get('p[class="itemPayment_title__G4iGQ"]');
    }

    getConfirmButton() {
        return cy.get('button[class="styles_btnNext__wpusF"]');
    }

    getTransactionPendingText() {
        return cy.get('span[class="styles_tpTitle__7pWvc"]');
    }

    getCurrencyText() {
        return cy.get('span[class="itemAmount_price__8r3ku"]');
    }

    getTextTitleChibi() {
        return cy.get('div[class="styles_header__fgUcl"]');
    }

    getTextAmount() {
        return cy.get('span[class="styles_title__Jv4yL"]');
    }

    getWalletTitle() {
        return cy.get('span[class="styles_title__Jv4yL"]');
    }

    getMetamaskText() {
        return cy.get('p[class="itemPayment_title__G4iGQ"]');
    }

    getCoinbaseWalletText() {
        return cy.get('p[class="itemPayment_title__G4iGQ"]');
    }

    getWalletconnectText() {
        return cy.get('p[class="itemPayment_title__G4iGQ"]');
    }

    getWalletConnectedText() {
        return cy.get('p[class="itemPayment_title__G4iGQ"]');
    }

    getConnectDifferentWalletText() {
        return cy.get('div[class="itemPayment_linkWrapper__GhGd_"]');
    }

    getCreditDebitCard() {
        return cy.get('input[name="item-payment"]');
    }
}

export default new BuyChibi();
