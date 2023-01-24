describe("login test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(400);
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500);
  });

  it("testing login function, your able to login with valid email and password", () => {
    cy.get("#loginEmail").type("jonashope@stud.noroff.no");
    cy.get("#loginPassword").type("123123123");
    cy.get("#loginForm button").contains("Login").wait(400).click();
  });

  it("User can not login with invalid credetials, error message will show", () => {
    cy.get("#loginEmail").type("badEmail@stud.noroff.no");
    cy.get("#loginPassword").type("12345678");
    cy.get("#loginForm button").contains("Login").wait(400).click();
  });
});
