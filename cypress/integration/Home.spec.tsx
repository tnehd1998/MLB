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
    cy.contains("Los Angeles");
    cy.contains("Dodgers");
  });

  it("moves to ranking page", () => {
    cy.contains("RANKING").click();
    cy.contains("FA 랭킹 Top100 확인하기");
    cy.contains("구단 연봉총액 순위 확인하기");
  });

  it("moves to record page", () => {
    cy.contains("RECORD").click();
    cy.contains("2021 MLB POSTSEASON");
    cy.contains("2021 TEAM STANDING");
  });

  it("moves to dream team page", () => {
    cy.contains("DREAM TEAM").click();
    cy.contains("내야수");
    cy.contains("외야수 / 지명타자");
    cy.contains("선발 투수");
    cy.contains("불펜 투수");
  });

  it("clicks dark mode", () => {
    cy.get("i").click();
  });
});
