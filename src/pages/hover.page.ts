import Page from './page';

class HoverPage extends Page {
  public get icons() {
    return $$('div[class="figure"]');
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public open() {
    return super.open('hovers');
  }
}

export default new HoverPage();
