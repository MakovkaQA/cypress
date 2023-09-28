import home from "../fixtures/selectors/homePage";
const homePage = new home();

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/client/index.php");
  });

  it("check name of title", () => {
    homePage.title().should("have.text", "Идёмвкино");
  });

  it("should display 7 days", () => {
    homePage.daysList().should("have.length", 7);
  });

  it("should display 3 sections", () => {
    homePage.sections().should("have.length", 3);
  });
});
