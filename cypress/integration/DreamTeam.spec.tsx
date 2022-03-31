describe("Dream Team Page", () => {
  beforeEach(() => {
    cy.visit("/#/dreamteam");
  });

  it("shows dream team page", () => {
    cy.title().should("eq", "MLB | DREAM TEAM");
  });

  it("choose certain player", () => {
    cy.contains("Trevor Bauer").should("not.exist");
    cy.visit("/#/LAD").contains("🔎 선수 정보").click();
    cy.contains("📌 드림팀 선수로 지정").click();
    cy.visit("/#/dreamteam");
    cy.contains("Trevor Bauer");
  });

  it("delete all players", () => {
    cy.contains("Trevor Bauer").should("not.exist");
    cy.visit("/#/LAD").contains("🔎 선수 정보").click();
    cy.contains("📌 드림팀 선수로 지정").click();
    cy.visit("/#/dreamteam");
    cy.contains("Trevor Bauer");

    cy.contains("전체 삭제").click();
    cy.contains("Trevor Bauer").should("not.exist");
  });
});
