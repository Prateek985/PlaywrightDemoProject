import{ test, expect } from "@playwright/test";

test("Handling Drag And Drop", async ({ page }) =>  {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
     const dragElement = await page.locator("//div[@id='column-a']");
     const dropArea = await page.locator("//div[@id='column-b']");
    // await drag.hover();
    // await page.mouse.down();
    // await drop.hover();
    // await page.mouse.up();
    // await page.pause();
    await dragElement.dragTo(dropArea);





});