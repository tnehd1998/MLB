describe("Record Page", () => {
  beforeEach(() => {
    cy.visit("/#/record");
  });

  it("shows record page", () => {
    cy.visit("/#/record").title().should("eq", "MLB | RECORD");
  });

  it("shows mlb postseason info", () => {
    cy.contains("2021 MLB POSTSEASON");
  });

  it("shows team standing info", () => {
    cy.contains("2021 TEAM STANDING");

    cy.contains("AL East");
    cy.contains("AL Central");
    cy.contains("AL West");
    cy.contains("NL East");
    cy.contains("NL Central");
    cy.contains("NL West");
  });

  it("shows other division team standing info", () => {
    cy.contains("NL West").click();
    cy.contains("Los Angeles Dodgers");
  });

  it("moves to clicked standing team", () => {
    cy.contains("New York Yankees").click();
    cy.title().should("eq", "MLB | NYY");
  });
});
