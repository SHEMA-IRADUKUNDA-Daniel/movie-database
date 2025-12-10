describe("landing page test", () => {
  it("Contains correct header text", () => {
    cy.visit("/");
    cy.get('[data-test="app-title-header"]').should(
      "contains.text",
      "MovieDB App"
    );
  });
});
