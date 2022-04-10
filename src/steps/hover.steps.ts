import { When, Then } from '@wdio/cucumber-framework';

import HoverPage from '../pages/hover.page';

When(/^I hover over (\d+) icon$/, async (number: number) => {
  await HoverPage.icons[number].moveTo();
});

Then(/^I should see for (\d+) user (.*) and (.*) appear$/, async (number: number, name: string, link: string) => {
  const user = HoverPage.icons[number];
  // TODO Minor move to page
  await user.$('h5').waitForDisplayed();
  await expect(user.$('h5')).toHaveText(name);
  await expect(user.$('a')).toHaveAttr('href', link);
});
