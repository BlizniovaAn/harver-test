import Page from './page';

class LoginPage extends Page {
  /**
     * define selectors using getter methods
     */
  public get inputUsername() {
    return $('#username');
  }

  public get inputPassword() {
    return $('#password');
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public open() {
    return super.open('login');
  }
}

export default new LoginPage();
