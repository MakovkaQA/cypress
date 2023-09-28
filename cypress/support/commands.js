import loginTests from "../fixtures/login";
import login from "../fixtures/selectors/loginPage.js";
const loginPage = new login();

Cypress.Commands.add("login", (email, password) => {
  loginPage.emailInput().type(email).should("have.value", email);
  loginPage.passwordInput().type(password);
  loginPage.submitButton().click();
});

Cypress.Commands.add("adminLogged", () => {
  const loginSuccess = loginTests.filter((test) => test.result == "success");
  cy.visit("/admin");
  cy.login(loginSuccess[0].data.email, loginSuccess[0].data.password);
});