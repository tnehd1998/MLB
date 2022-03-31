describe("Team Page", () => {
  beforeEach(() => {
    cy.visit("/#/LAD");
  });

  it("shows los angeles dodgers team page", () => {
    cy.contains("Los Angeles");
    cy.contains("Dodgers");
  });

  it("clicks certain player information", () => {
    cy.contains("🔎 선수 정보").click();

    cy.contains("☆ 선수 정보 ☆");
    cy.contains("이름 : Trevor Bauer");
    cy.contains("국적 : USA");
    cy.contains("출생년도 : 1991-01-17");
    cy.contains("포지션 : SP");
    cy.contains("타격 위치 : R");
    cy.contains("투구 방향 : R");
    cy.contains("데뷔일 : 2012-06-28");

    cy.contains("🔎 선수 세부 기록");
    cy.contains("⚾️ 관련 동영상");
    cy.contains("📌 드림팀 선수로 지정");
  });
});
