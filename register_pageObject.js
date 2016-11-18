'use strict';

class register {

  static fillForgetForm (firstname, lastname, email, password, confirmpassword) {
    this.txtFirstname.clear();
    this.txtFirstname.sendKeys(firstname);
    this.txtFirstname.sendKeys(protractor.Key.TAB);
    this.txtLastname.clear();
    this.txtLastname.sendKeys(lastname);
    this.txtLastname.sendKeys(protractor.Key.TAB);
    this.txtEmail.clear();
    this.txtEmail.sendKeys(email);
    this.txtEmail.sendKeys(protractor.Key.TAB);
    this.txtPassword.clear();
    this.txtPassword.sendKeys(password);
    this.txtPassword.sendKeys(protractor.Key.TAB);
    this.txtConfirmPswd.clear();
    this.txtConfirmPswd.sendKeys(confirmpassword);
    this.txtConfirmPswd.sendKeys(protractor.Key.TAB);
  }

  static RegisterStandAlone () {
    this.lnkRegister.click();
    browser.sleep(1000);
    this.fillForgetForm('sample', 'sample', 'user'+ Math.floor((Math.random() * 10000))+'@seod.com','Sample1234','Sample1234');
    browser.sleep(1000);
    browser.executeScript('window.scrollTo(0,0);');
    this.chkEmailUpdate.click();
    this.chktextUpdate.click();
    this.btnCreateAccount.click();
  }

    static get lnkRegister () {
    return element.all(by.css('.account-info .reg-link'));
  }

  static get txtFirstname () {
    return element(by.css('[ng-model="vm.loginRegister.firstName.value"]'));
  }

  static get txtLastname () {
    return element(by.css('[ng-model="vm.loginRegister.lastName.value"]'));
  }

  static get txtEmail () {
    return element(by.css('[ng-model="vm.loginRegister.email.value"]'));
  }

  static get txtPassword () {
    return element(by.css('[ng-model="vm.loginRegister.password.value"]'));
  }

  static get txtConfirmPswd () {
    return element(by.css('[ng-model="vm.loginRegister.passwordConfirm.value"]'));
  }

  static get btnCreateAccount () {
    return element(by.css('input.btn--inactive.btn--active'));
  }

  static get chkEmailUpdate () {
    return element(by.id('registerEmailUpdates'));
  }

  static get chktextUpdate () {
    return element(by.id('registerTextUpdates'));
  }

}

module.exports = register;
