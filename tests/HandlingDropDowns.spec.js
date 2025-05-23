import{ test, expect} from "@playwright/test";

// test("Handling Single Drop Down", async({page}) => { 
//  await page.goto("https://the-internet.herokuapp.com/dropdown", { timeout: 60000 });
//  await page.getByTestId("dropdown").click();
//  // select the value from drop down by using Text
//  // await page.locator("#dropdown").selectText("Option 1");
//  // select the value from drop down by using Index
//  // await page.locator("#dropdown").selectOption({ index: 2 });
//  // select the value from drop down by using value
//  await page.locator("#dropdown").selectOption({ value : "1" });
//  await page.pause();
 
// })

test("Handling Multiple Drop Down", async({page}) => { 
 await page.goto("https://leafground.com/select.xhtml", { timeout: 60000 });
 await page.locator("//ul[contains(@class, \"ui-autocomplete-multiple-container\")]").first().click();
 // select the value from drop down by using MultiSelect options
 await page.waitForTimeout(2000);
 await page.locator("//ul[contains(@class, \"ui-autocomplete-multiple-container\")]").first().selectOption([" Appium ", "Playwright", "PostMan"]);
 await page.pause();

 
})