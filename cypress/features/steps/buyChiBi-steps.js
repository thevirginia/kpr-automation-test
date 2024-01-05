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

