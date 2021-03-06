describe("Team Page", () => {
  beforeEach(() => {
    cy.visit("/#/LAD");
  });

  it("shows los angeles dodgers team page", () => {
    cy.title().should("eq", "MLB | LAD");
    cy.contains("Los Angeles");
    cy.contains("Dodgers");
  });

  it("clicks certain player information", () => {
    cy.contains("π μ μ μ λ³΄").click();

    cy.contains("β μ μ μ λ³΄ β");
    cy.contains("μ΄λ¦ : Trevor Bauer");
    cy.contains("κ΅­μ  : USA");
    cy.contains("μΆμλλ : 1991-01-17");
    cy.contains("ν¬μ§μ : SP");
    cy.contains("νκ²© μμΉ : R");
    cy.contains("ν¬κ΅¬ λ°©ν₯ : R");
    cy.contains("λ°λ·μΌ : 2012-06-28");

    cy.contains("π μ μ μΈλΆ κΈ°λ‘");
    cy.contains("βΎοΈ κ΄λ ¨ λμμ");
    cy.contains("π λλ¦Όν μ μλ‘ μ§μ ");
  });
});
