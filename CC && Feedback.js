describe("CC && Feedback", () => {
  it("tests CC && Feedback", () => {
    cy.viewport(893, 700);
    cy.visit("https://neuroqur.com/about/contactus");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("H");
    cy.get("div:nth-of-type(1) > input").type("Haneef");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("Khan");
    cy.get("div:nth-of-type(3) > input").click();
    cy.get("div:nth-of-type(3) > input").type("H");
    cy.get("div:nth-of-type(3) > input").type("HaneefUllah");
    cy.get("div:nth-of-type(3) > input").type("HaneefUllah00345@gmail.com");
    cy.get("textarea").click();
    cy.get("textarea").type("B");
    cy.get("textarea").type("Believe in you capicitites ");
    cy.get("textarea").click();
    cy.get("textarea").type("Believe in you capicites ");
    cy.get("textarea").type("Believe in you capicities ");
    cy.get("textarea").type("Believe in you capicities. ");
    cy.get("grammarly-popups").click();
    cy.get("textarea").type("Believe in you capacities. ");
    cy.get("grammarly-popups").click();
    cy.get("textarea").type("Believe in your capacities. ");
    cy.get("app-shell button").click();
    cy.get("notifier-container p").click();
  });
});
