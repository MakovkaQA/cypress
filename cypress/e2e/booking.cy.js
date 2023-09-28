import halls from "../fixtures/halls";
import home from "../fixtures/selectors/homePage.js";
import admin from "../fixtures/selectors/adminPage.js";
import tickets from "../fixtures/selectors/ticketsPage.js";

const homePage = new home();
const adminPage = new admin();
const ticketsPage = new tickets();

const days = [2,3,4,5,6,7];

days.forEach(day => {
  describe(`booking tickets on available halls on ${day} day`, () => {
    halls.forEach((hall) => {
      it(`booking tickets on ${hall}`, () => {
        cy.adminLogged();
        adminPage.availableHallsList().contains(hall);
        cy.visit("/client/index.php");
        homePage.selectDay(day);
        homePage.selectFirstSeanseInHall(hall);
        ticketsPage.selectTickets();
        ticketsPage.acceptBtn().click();
      });
    });
  });

})

