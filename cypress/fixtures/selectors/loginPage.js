class login {
  emailInput() {
    return cy.get("input[type='email']")
  }
  passwordInput() {
    return cy.get("input[type='password']")
  }
  submitButton() {
    return cy.get(".login__button")
  }
  loginError() {
    return cy.get("body");
  }
}
export default login;