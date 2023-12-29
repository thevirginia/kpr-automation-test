import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
const url = Cypress.env('URL_SETTINGS')
const urlMintPage = Cypress.env('URL_MINTPAGE')
const urlMintStagPage = Cypress.env('URL_MINTPAGE')

Given("A user opens MintPage", () => {
  cy.visit(url + '/MintPage')
});

Given("A user opens DetailKeepers", () => {
  cy.visit(url + '/DetailKeepers')
});

Given('A user opens Detail Keepers Settings', () => {
  cy.visit(url)
});

Given('A user opens a Mint Page in {string}', (env) => {
  if (env === 'staging') {
    cy.visit(urlMintStagPage);
  } else if (env === 'develop') {
    cy.visit(urlMintPage)
  }
});