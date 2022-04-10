import { When, Then } from '@wdio/cucumber-framework';

import HoverPage from '../pages/hover.page';

When(/^I hover over (\d+) icon$/, async (number: number) => {
  await HoverPage.icons[number].moveTo();
});

Then(/^I should see for (\d+) user (.*) and (.*) appear$/, async (number: number, name: string, href: string) => {
  const user = HoverPage.icons[number];
  const header = user.$('h5');
  const link = user.$('a');

  await header.waitForDisplayed();
  await expect(header).toHaveText(name);
  await expect(link).toHaveAttr('href', href);
});
