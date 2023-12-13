import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import examplePage from "../../support/page/examplePage";

const url = Cypress.env('URL')

Given('A user opens a web browser', () => {
    cy.visit(url)
});

Then('The user should be on the Google homepage', () => {
    examplePage.getgoogleValidate().should('be.visible')
});
