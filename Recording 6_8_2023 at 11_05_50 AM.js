describe("Recording 6/8/2023 at 11:05:50 AM", () => {
  it("tests Recording 6/8/2023 at 11:05:50 AM", () => {
    cy.viewport(687, 699);
    cy.visit("https://neuroqur.com/my-neuroqur/(myneuroqur:profile)");
    cy.get("app-profile-settings > div:nth-of-type(1) button").click();
  });
});
