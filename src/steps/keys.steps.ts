import { When, Then } from '@wdio/cucumber-framework';

import KeysPage from '../pages/keys.page';

When(/^I click (\w+)$/, async (key: string) => {
  await browser.keys(key);
});

Then(/^I should see text (.+) appears on the page$/, async (text: string) => {
  await expect(KeysPage.resultText).toHaveText(text);
});
