import { test, expect }  from "@playwright/test";

test("Handling Input Box & Buttons", async({ page }) => {
    await page.goto("https://automationexercise.com/login");
    await page.getByPlaceholder('Name').fill('prateek');
    await page.locator('input[name="email"][data-qa="signup-email"]').fill('prateekchouhan91@gmail.com');
   // await page.getByPlaceholder('Email Address').fill('prateekchouhan91@gmail.com');
    await expect(page.getByRole('button', { name: 'Signup'})).toBeVisible();
    await page.getByRole('button', { name: 'Signup'}).click();
    await page.pause();
});