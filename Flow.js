describe("Flow", () => {
  it("tests Flow", () => {
    cy.viewport(1034, 700);
    cy.visit("https://neuroqur.com/home");
    cy.get("div:nth-of-type(1) > a:nth-of-type(1) > span.mat-button-wrapper").click();
    cy.get("div.card-group > div:nth-of-type(1) > div:nth-of-type(1) div.card-text").click();
    cy.get("div.article-container").dblclick();
    cy.get("div.article-container").click();
    cy.get("app-shell div.ng-star-inserted button").click();
  });
});
