import { Given, Then, When } from '@wdio/cucumber-framework';

import AddRemovePage from "../pages/addRemove.page";

When(/^I add a new element$/, async () => {
  await AddRemovePage.addNewElement();
});

Then(/^I should see the new element has been added$/, async () => {
  await expect(AddRemovePage.buttonAddedManually).toBeExisting();
});

Given(/^New element has been added$/, async () => {
  await AddRemovePage.addNewElement();
});

When(/^I remove the element$/, async () => {
  await AddRemovePage.removeElement();
});

Then(/^I should see the element has been removed$/, async () => {
  await expect(AddRemovePage.buttonAddedManually).not.toBeExisting();
});
