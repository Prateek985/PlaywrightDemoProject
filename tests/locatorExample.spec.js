import { test, expect } from "@playwright/test";

test("Locator Css Selector Example ", async ({ page }) => {
  await page.goto("https://www.espncricinfo.com/series/women-s-premier-league-2023-24-1411373/delhi-capitals-women-vs-up-warriorz-women-4th-match-1417719/full-scorecard");
 // await page.locator("#g2599-name").fill("Prateek@123", { timeout: 60000 });
 // await page.locator("#g2599-email").fill('Prateek@123', { timeout: 60000 });
 // await page.locator('.name').fill('nikhil', { timeout: 60000 });
 // await page.locator('.email').fill('sharma', { timeout: 60000 });
  // await page.locator('input[type="text"]').fill('nikhil', { timeout: 800000 });
  // await page.locator('input[type="email"]').fill('sharma', { timeout: 800000 });
  //await page.locator("//input[contains(@id,'g2599-name')]").fill("nikhil@123", { timeout: 60000 });
  //await page.locator("//input[contains(@id,'g2599-email')]").fill("sharma@123", { timeout: 60000 });
  //await page.locator("//button[contains(text(),'Login')]").click();
  //await page.getByRole('button', { name: 'Submit'}).click();
  //await expect(page.getByText('Submit')).toBeVisible();
  //await page.getByLabel('Username').fill("Prateek@123", { timeout: 60000 });
 // await page.getByPlaceholder('Your Full Name*').fill('Prateek Chouhan');
 // await page.getByPlaceholder('Business Email*').fill('prateekchouhan@gmail.com');
 // await page.getByTestId('#Form_getForm_subdomain').fill('Prateek@123');
 // await page.getByTestId('#SForm_getForm_Name').fill('Prateek');

  // await page.click('div.ds-p-0 >> table.ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table >> td.ds-w-0.ds-whitespace-nowrap.ds-min-w-max >> div.ds-flex.ds-items-center >> div.ds-popper-wrapper.ds-inline >> a.ds-inline-flex.ds-items-start.ds-leading-none');
  

  
});
