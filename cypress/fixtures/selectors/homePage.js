require("cypress-xpath");

class home {
  title() {
    return cy.get("h1");
  }
  daysList() {
    return cy.get(".page-nav__day");
  }
  sections() {
    return cy.get("section");
  }  
  selectDay(day) {
    cy.get(`.page-nav__day:nth-of-type(${day})`).click();
  }
  selectFirstSeanseInHall(hall) {
    cy.xpath(`//div[h3[contains(text(), '${hall}')]]//a`).first().click();
  }
}

export default home;
