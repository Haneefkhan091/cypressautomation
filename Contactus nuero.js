describe("Contactus nuero", () => {
  it("tests Contactus nuero", () => {
    cy.viewport(804, 630);
    cy.visit("https://neuroqur.com/about/contactus");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("H");
    cy.get("div:nth-of-type(1) > input").type("Haneef");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("Khan");
    cy.get("div:nth-of-type(3) > input").click();
    cy.get("div:nth-of-type(3) > input").type("H");
    cy.get("div:nth-of-type(3) > input").type("HaneefUllah00345@");
    cy.get("div:nth-of-type(3) > input").type("HaneefUllah00345@gmail.com");
    cy.get("textarea").click();
    cy.get("textarea").type("T");
    cy.get("textarea").type("Testing");
    cy.get("app-shell button").click();
  });
});
