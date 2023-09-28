import seats from "../seats";

class tickets {
  acceptBtn() {
    return cy.get(".acceptin-button");
  }
  selectTickets() {
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
  }
}
export default tickets;
