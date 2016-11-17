/**
 * Protractor e2e test spec
 * Started e2e file test
 */

//Task//

//Variables
const Register = require('./../pageobjects/register.js');
//

beforeEach (() => {
  browser.manage().deleteAllCookies();
  browser.get('https://www.marksandspencer.com/');
  browser.driver.manage().window().maximize();
  browser.driver.manage().timeouts().implicitlyWait(1500);
  browser.waitForAngular();
});

function ClickRegister() {
  Register.lnkRegister.click();
  browser.waitForAngular();
}

function DisplayForm() {
  Register.lnkRegister.click();
  browser.waitForAngular();
}

describe('Register form', () => {

  it('Should be displayed when the "Register" link is clicked', () => {
    DisplayForm();
    expect(Register.txtFirstname.isDisplayed()).toBe(true);
    expect(Register.txtLastname.isDisplayed()).toBe(true);
    expect(Register.txtEmail.isDisplayed()).toBe(true);
    expect(Register.txtPassword.isDisplayed()).toBe(true);
    expect(Register.txtConfirmPswd.isDisplayed()).toBe(true);
    expect(Register.chkAgreeTerms.isDisplayed()).toBe(true);
    expect(Register.chkAgreePromo.isDisplayed()).toBe(true);
    expect(Register.btnCreateAccount.isDisplayed()).toBe(true);
  });

  // it('Should validate mandatory and or empty fields', () => {
  //
  //   DisplayForm();
  //   Register.fillForgetForm(' ', ' ', ' ', ' ', ' ');
  //   expect(Register.lblErrorMessage.get(1).isDisplayed()).toBe(true);//firstname
  //   expect(Register.lblErrorMessage.get(2).isDisplayed()).toBe(true);//lastname
  //   expect(Register.lblErrorMessage.get(3).isDisplayed()).toBe(true);//email
  // });
  //
  // it('Should not allow invalid email', () => {
  //   DisplayForm();
  //   Register.fillForgetForm('', '', 'invalid', '', '');
  //   expect(Register.lblErrorMessage.get(3).isDisplayed()).toBe(true);//email
  //   Register.fillForgetForm('', '', 'invalid.com', '', '');
  //   expect(Register.lblErrorMessage.get(3).isDisplayed()).toBe(true);//email
  //   Register.fillForgetForm('', '', 'invalid@', '', '');
  //   expect(Register.lblErrorMessage.get(3).isDisplayed()).toBe(true);//email
  // });
  //
  // it('Should not allow mismatching passwords', () => {
  //
  //   DisplayForm();
  //   browser.waitForAngular();
  //   browser.driver.manage().timeouts().implicitlyWait(1000);
  //   Register.fillForgetForm('sample', 'sample',Credentials.ebooks1,Credentials.password, 'Poiuyt123');
  //   browser.driver.manage().timeouts().implicitlyWait(1000);
  //   Register.chkAgreeTerms.click();
  //   ClickCreateAccount();
  //   expect (Register.txtError.getText()).toContain('The passwords entered don\'t match');
  // });
  //
  // it('Should allow Register with correct information', () => {
  //   DisplayForm();
  //   browser.waitForAngular();
  //   Register.fillForgetForm('sample', 'sample', 'user'+ Math.floor((Math.random() * 10000))+'@sainsburysebooks.com','Sample1234','Sample1234');
  //   Register.chkAgreeTerms.click();
  //   ClickCreateAccount();
  //   Register.btnMyAccount.click();
  //   Login.lnkLogout.click();
  // });
  //
  // it('Should allow Register from a page and return to it', () => {
  //   browser.get('/ebooks/favourite-authors');
  //   browser.driver.manage().timeouts().implicitlyWait(1000);
  //   DisplayForm();
  //   browser.waitForAngular();
  //   Register.fillForgetForm('sample', 'sample', 'user'+ Math.floor((Math.random() * 10000))+'@sainsburysebooks.com','Sample1234','Sample1234');
  //   Register.chkAgreeTerms.click();
  //   browser.driver.manage().timeouts().implicitlyWait(1000);
  //   ClickCreateAccount();
  //   expect (browser.getCurrentUrl()).toContain('favourite');
  // });
});
