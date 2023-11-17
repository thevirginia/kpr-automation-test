import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
const url = Cypress.env('URL_MINT')

Given("A user opens MintPage", () => {
  cy.visit(url + '/MintPage')
});

Given("A user opens DetailKeepers", () => {
  cy.visit(url + '/DetailKeepers')
});

Given('A user opens Detail Keepers Settings', () => {
  cy.visit(url + '/Settings')
});