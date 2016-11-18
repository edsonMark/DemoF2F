  /**

   */
  //Task//

  //Variables
  const register = require('../Register/register_pageObject.js');
  //

  beforeEach (() => {
    browser.ignoreSynchronization = true;
  });

  beforeEach (() => {
    browser.manage().deleteAllCookies();
    browser.get('https://www.marksandspencer.com/');
    browser.driver.manage().timeouts().implicitlyWait(1500);
  });

  function DisplayForm() {
    register.lnkRegister.click();
  }

  describe('Register form', () => {

    it('Should be displayed when the "Register" link is clicked', () => {

      DisplayForm();
      expect(register.txtFirstname.isDisplayed()).toBe(true);
    });

    it('Should validate mandatory field', () => {

      var EC = protractor.ExpectedConditions;
      DisplayForm();
      register.fillForgetForm(' ', ' ', ' ', ' ', ' ');
      register.btnCreateAccount();
      browser.wait(EC.textToBePresentInElement($('register.txtFirstname'), 'This field is required.'), 5000);//firstname
    });

    it('Should not allow invalid email format', () => {

      DisplayForm();
      register.fillForgetForm('', '', 'invalid', '', '');
      expect(register.lblErrorMessage.isDisplayed()).toBe(true);
    });

  });
