/// <reference types="cypress" />

describe("Transfer Flow Integration Tests", () => {
  // This runs before every single test to ensure we are logged in and on the dashboard

  beforeEach(() => {
    cy.visit("http://localhost:5173");

    cy.get('input[name="email"]').type("olamilekan@mail.com");
    cy.get('input[name="password"]').type("Sparkle@2026");
    cy.get("button").contains("Login").click();

    cy.url().should("include", "/dashboard");
  });

  // Open the Transfer Modal

  it("should prevent transfer when the amount exceeds available balance", () => {
    cy.contains("button", "Transfer").click();

    // Fill the form and type an amount significantly higher than the mock balance
    cy.get('input[name="account_number"]').type("0123456789");
    cy.get('input[name="bank_name"]').type("Sparkle Bank");

    cy.get('input[name="amount"]').type("100000000");

    cy.get('button[type="submit"]').click();

    // ASSERT: The Yup validation message for 'max' balance is visible
    cy.contains("Insufficient Balance").should("be.visible");

    // ASSERT: The form is still open (submission was blocked)
    cy.get("form").should("exist");
  });
});
