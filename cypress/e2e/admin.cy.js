import loginTests from "../fixtures/login";
import admin from "../fixtures/selectors/adminPage";
import login from "../fixtures/selectors/loginPage.js";
const loginPage = new login();
const adminPage = new admin();

describe("login page", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  loginTests.forEach((test) => {
    it(test.name, () => {
      cy.login(test.data.email, test.data.password);
      if (test.result === "success") {
        adminPage
          .firstHeader()
          .should("have.text", "Управление залами")
          .and("be.visible");
      } else {
        loginPage
          .loginError()
          .should("have.text", "Ошибка авторизации!")
          .and("be.visible");
      }
    });
  });
});
