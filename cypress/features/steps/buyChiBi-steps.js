import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import BuyChibi from "../../support/page/BuyChibi";
///<reference types="cypress-iframe" />

const clickElement = (element) => {
  element.should('be.visible').click({ force: true, timeout: 1500 });
};

const validateText = (element, expectedText) => {
  element.should('be.visible').should('include.text', expectedText);
};

const handleTextValidation = (text) => {
  switch (text) {
    case "CHI-HOUSE PRODUCTION MACHINE":
      validateText(BuyChibi.getTextTitleChibi(), text);
      break;

    case "SELECT AMOUNT":
      validateText(BuyChibi.getTextAmount(), text);
      break;

    case "CONNECT YOUR WALLET":
      validateText(BuyChibi.getWalletTitle(), text);
      break;

    case "Metamask":
      validateText(BuyChibi.getMetamaskText(), text);
      break;

    case "Coinbase Wallet":
      validateText(BuyChibi.getCoinbaseWalletText(), text);
      break;

    case "Walletconnect":
      validateText(BuyChibi.getWalletconnectText(), text);
      break;

    case "Wallet Connected":
      validateText(BuyChibi.getWalletConnectedText(), text);
      break;

    case "CONNECT A DIFFERENT WALLET":
      validateText(BuyChibi.getConnectDifferentWalletText().last(), text);
      break;

    default:
    // Handle default case or leave empty if not needed
  }
};

When('user clicks one amount', () => {
  clickElement(BuyChibi.getOneBuyChibi().first());
});

When('select checkout button', () => {
  clickElement(BuyChibi.getCheckoutButton());
});

When('select Ethereum option', () => {
  clickElement(BuyChibi.getEthereumOption().eq(0));
});

When('select Continue option', () => {
  clickElement(BuyChibi.getContinueOption().eq(0));
});

When('select Metamask option', () => {
  clickElement(BuyChibi.getMetamaskOption().eq(0));
});

When('select Confirm button', () => {
  clickElement(BuyChibi.getConfirmButton().eq(0));
});

Then('I should see {string} text', (text) => {
  validateText(BuyChibi.getTransactionPendingText(), text);
});

Then('I validate the currency {string}', (currency) => {
  validateText(BuyChibi.getCurrencyText(), currency);
});

Then('valid that the {string} text is displayed', (text) => {
  handleTextValidation(text);
});

Then('select Credit Card or Debit Card', () => {
  clickElement(BuyChibi.getCreditDebitCard().eq(0));
});

Then('I should see {string} in modal', (text) => {
  cy.frameLoaded();
  cy.frameLoaded('#checkout-with-card-iframe');
  cy.iframe('#checkout-with-card-iframe').find('.chakra-button.css-10acd33').should('be.visible');
});

When('A user enters the Cardholder name {string}', (CardName) => {
  cy.frameLoaded();
  cy.frameLoaded('#checkout-with-card-iframe');
  cy.wait(1000)
  cy.iframe('#checkout-with-card-iframe').find('#paper-test-cardholder-name').type(CardName);
  cy.wait(2000)
  //cy.iframe('#checkout-with-card-iframe').find('#paper-test-cardholder-name').tab().type('4242424242424242');
});


When('A user enters the Card number {string}', (CardName) => {
  cy.frameLoaded('#paper-test-stripe-card-iframe-div')
  cy.iframe('#paper-test-stripe-card-iframe-div').then(($iframe) => {

    const $body = $iframe.contents();
    cy.wrap($body).find('iframe[title="Secure card payment input frame"]').frameLoaded();

    cy.wrap($body).find('iframe[title="Secure card payment input frame"]').then($iframeAnidado => {
      const $bodyAnidado = $iframeAnidado.contents().find('body');
      cy.wrap($bodyAnidado).find('input').first().click();
    });
  });
  cy.wait(2000);
});