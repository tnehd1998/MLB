describe("Dream Team Page", () => {
  beforeEach(() => {
    cy.visit("/#/dreamteam");
  });

  it("shows dream team page", () => {
    cy.title().should("eq", "MLB | DREAM TEAM");
  });

  it("choose certain player", () => {
    cy.contains("Trevor Bauer").should("not.exist");
    cy.visit("/#/LAD").contains("π μ μ μ λ³΄").click();
    cy.contains("π λλ¦Όν μ μλ‘ μ§μ ").click();
    cy.visit("/#/dreamteam");
    cy.contains("Trevor Bauer");
  });

  it("delete all players", () => {
    cy.contains("Trevor Bauer").should("not.exist");
    cy.visit("/#/LAD").contains("π μ μ μ λ³΄").click();
    cy.contains("π λλ¦Όν μ μλ‘ μ§μ ").click();
    cy.visit("/#/dreamteam");
    cy.contains("Trevor Bauer");

    cy.contains("μ μ²΄ μ­μ ").click();
    cy.contains("Trevor Bauer").should("not.exist");
  });
});
