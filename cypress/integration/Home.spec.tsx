describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows home page", () => {
    cy.visit("/").title().should("eq", "MLB | TEAMS");
  });

  it("shows header options", () => {
    cy.contains("MLB TEAMS");
    cy.contains("RANKING");
    cy.contains("RECORD");
    cy.contains("DREAM TEAM");
  });

  it("moves to Los Angeles Dodgers page", () => {
    cy.get('[alt="Los Angeles Dodgers"]').click();
  });

  it("moves to ranking page", () => {
    cy.contains("RANKING").click();
  });

  it("moves to record page", () => {
    cy.contains("RECORD").click();
  });

  it("moves to dream team page", () => {
    cy.contains("DREAM TEAM").click();
  });

  it("clicks dark mode", () => {
    cy.get("i").click();
  });
});
