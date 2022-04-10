import Page from './page';

class KeysPage extends Page {
  public get resultText() {
    return $('p#result');
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public open() {
    return super.open('key_presses');
  }
}

export default new KeysPage();
