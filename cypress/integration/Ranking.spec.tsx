describe("Ranking Page", () => {
  beforeEach(() => {
    cy.visit("/#/ranking");
  });

  it("shows ranking page", () => {
    cy.visit("/#/ranking").title().should("eq", "MLB | RANKING");
  });

  it("shows header options", () => {
    cy.contains("MLB TEAMS");
    cy.contains("RANKING");
    cy.contains("RECORD");
    cy.contains("DREAM TEAM");
  });

  it("shows team ranking", () => {
    cy.contains("구단 연봉총액 순위 확인하기").click();

    cy.contains("랭킹 1위");
    cy.contains("팀 이름 : New York Mets");
    cy.contains("연봉 총액 : $235,599,999");
    cy.contains("대표 선수");
    cy.contains("Jacob deGrom");
    cy.contains("포지션 : SP");
  });

  it("shows player ranking", () => {
    cy.contains("구단 연봉총액 순위 확인하기").click();
    cy.contains("FA 랭킹 Top100 확인하기").click();

    cy.contains("Rank #1 Mike Trout");
    cy.contains("포지션 : CF");
    cy.contains("소속팀 : LAA");
    cy.contains("$426,500,000 12년 계약");
    cy.contains("계약 당시 나이 : 27");
    cy.contains("평균 연봉 : $35,541,667");
    cy.contains("계약 기간 : 2019-2030");
  });
});
