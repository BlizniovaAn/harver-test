import Page from './page';

class DropdownPage extends Page {
  public get dropdown() {
    return $('select#dropdown');
  }

  public getOptionByValue(optionValue: number) {
    return $(`option[value="${optionValue}"]`);
  }

  public get defaultDropdownOption() {
    return $('option[disabled="disabled"]');
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public open() {
    return super.open('dropdown');
  }
}

export default new DropdownPage();
