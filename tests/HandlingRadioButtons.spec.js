import{ test, expect } from "@playwright/test";
 test("Handling Radio Buttons", async({page}) => {
     await page.goto("https://demoqa.com/radio-button", { waitUntil: "load" });
     await page.waitForTimeout(2000);
     await page.locator("//input[@id=\'yesRadio\']").first().click();
     await page.waitForTimeout(2000);
     expect(await page.locator("//input[@id=\'yesRadio\']").first()).toBeChecked();
     await page.waitForTimeout(2000);
     expect(await page.locator("//input[@id=\'yesRadio\']").first().isChecked()).toBeTruthy()
 
    })