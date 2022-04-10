import Page from './page';

class AddRemovePage extends Page {
  public get buttonAdd() {
    return $('button[onclick="addElement()"]');
  }

  public get buttonAddedManually() {
    return $('button[class="added-manually"]');
  }

  public async addNewElement() {
    await this.buttonAdd.click();
  }

  public async removeElement() {
    await this.buttonAddedManually.click();
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public open() {
    return super.open('add_remove_elements/');
  }
}

export default new AddRemovePage();
