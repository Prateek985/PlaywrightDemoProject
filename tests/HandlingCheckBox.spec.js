import{ test, expect } from "@playwright/test";

test("Handling Check Boxes", async ({ page }) =>  {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    expect(await page.locator('input[type="checkbox"]').first().isChecked()).toBeFalsy();
    await page.locator('input[type="checkbox"]').first().click();
    expect(await page.locator('input[type="checkbox"]').first().isChecked()).toBeTruthy();

});

// test("Handling multiple Check Boxes", async ({ page }) =>  {
//     await page.goto("https://leafground.com/tree.xhtml", { timeout: 60000 });
//     await page.waitForTimeout(2000);
    
//     expect(await page.waitForSelector("//div[contains(@class, \"ui-chkbox-box\")]").isChecked()).toBeFalsy();
//     await page.waitForSelector("//div[contains(@class, \"ui-chkbox-box\")]").click();
//     expect(await page.waitForSelector("//div[contains(@class, \"ui-chkbox-box\")]").isChecked()).toBeTruthy();

// });