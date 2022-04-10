import { When, Then } from '@wdio/cucumber-framework';

import DropdownPage from '../pages/dropdown.page';

When(/^I select (\d+) dropdown option$/, async (optionNumber: number) => {
  await DropdownPage.dropdown.selectByAttribute('value', optionNumber);
});

Then(/^I should see (\d+) option with text (.+) is selected$/, async (optionNumber: number, optionText: string) => {
  const option = DropdownPage.getOptionByValue(optionNumber);
  await expect(option.isSelected()).toBeTruthy();
  await expect(option).toHaveText(optionText);
});

Then(/^I should see the default option is selected$/, async () => {
  await expect(DropdownPage.defaultDropdownOption.isSelected).toBeTruthy();
});
