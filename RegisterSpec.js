  /**
   * Protractor e2e test spec
   * Started e2e file test
   */

  //Task//

  //Variables
  const Register = require('../Register/register_pageObject.js');
  //

  beforeEach (() => {
    browser.ignoreSynchronization = true;
   });

  beforeEach (() => {
    browser.manage().deleteAllCookies();
    browser.get('https://www.marksandspencer.com/');
    browser.driver.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(1500);
  });

  function DisplayForm() {
    Register.lnkRegister.click();
  }

  function DisplayForm() {
    Register.lnkRegister.click();
  }

  describe('Register form', () => {

    it('Should be displayed when the "Register" link is clicked', () => {
      DisplayForm();
      expect(Register.txtFirstname.isDisplayed()).toBe(true);
      expect(Register.txtLastname.isDisplayed()).toBe(true);
    });

    it('Should validate mandatory and or empty fields', () => {

      var EC = protractor.ExpectedConditions;
      DisplayForm();
      Register.fillForgetForm(' ', ' ', ' ', ' ', ' ');
      browser.wait(EC.textToBePresentInElement($('Register.txtFirstname'), 'This field is required.'), 5000);
  ;//firstname
    });

  });
