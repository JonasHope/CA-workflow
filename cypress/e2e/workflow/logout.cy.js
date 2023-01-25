describe("logout function", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(400);
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500);
    cy.get("#loginEmail").type("jonashope@stud.noroff.no");
    cy.get("#loginPassword").type("123123123");
    cy.get("#loginForm button").contains("Login").wait(400).click().wait(1500);
  });

  it("Clicking the logout button will successfully log you out", () => {
    cy.get(".btn-outline-warning")
      .contains("Logout")
      .wait(500)
      .click()
      .wait(500);
  });
});
