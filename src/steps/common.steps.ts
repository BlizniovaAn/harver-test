import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pages/login.page';
import SecurePage from '../pages/secure.page';
import AddRemovePage from '../pages/addRemove.page';
import HoverPage from '../pages/hover.page';
import DropdownPage from '../pages/dropdown.page';
import KeysPage from '../pages/keys.page';

enum Pages {
  login = 'login',
  addRemovePage = 'add remove elements',
  hoversPage = 'hovers',
  dropdownPage = 'dropdown',
  keysPage = 'keys',
}

const pages = {
  [Pages.login]: LoginPage,
  [Pages.addRemovePage]: AddRemovePage,
  [Pages.hoversPage]: HoverPage,
  [Pages.dropdownPage]: DropdownPage,
  [Pages.keysPage]: KeysPage,
};

Given(/^I am on the (.*) page$/, async (page: Pages) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username: string, password: string) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^I refresh the page$/, async () => {
  await browser.refresh();
});
