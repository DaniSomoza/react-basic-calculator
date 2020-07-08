/* eslint-disable no-undef */

describe("Calculator", () => {
  it("Should sum", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#3-number-button").click();
    cy.get("#\\+-operation-button").click();
    cy.get("#2-number-button").click();

    cy.get("#calculate-result-button").click();

    cy.get("#screen-input").should("have.value", "5")
  });

  it("Should sub", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#3-number-button").click();
    cy.get("#--operation-button").click();
    cy.get("#2-number-button").click();

    cy.get("#calculate-result-button").click();

    cy.get("#screen-input").should("have.value", "1")
  });


  it("Should multiply", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#3-number-button").click();
    cy.get("#\\*-operation-button").click();
    cy.get("#2-number-button").click();

    cy.get("#calculate-result-button").click();

    cy.get("#screen-input").should("have.value", "6")
  });


  it("Should division", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#6-number-button").click();
    cy.get("#\\/-operation-button").click();
    cy.get("#2-number-button").click();

    cy.get("#calculate-result-button").click();

    cy.get("#screen-input").should("have.value", "3")
  });

})
