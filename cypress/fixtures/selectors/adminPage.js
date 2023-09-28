require("cypress-xpath");

class admin {
  firstHeader() {
    return cy.get("h2").first();
  }
  availableHallsList() {
    return cy.xpath("//ul[@class='conf-step__list']/li");
  }
}
export default admin;
