/// <reference types="cypress" />

it("should throw an error when text does not exist", () => {
  cy.visit("http://localhost:3000");
  // This passes. It should fail. This text exists.
  // Per this example, this approach for testing non-existence should work: https://testing-library.com/docs/cypress-testing-library/intro#examples
  cy.findByText("Learn React").should("not.exist");

  // This fails as expected
  // cy.contains("save to reload.").should("not.exist");
});
