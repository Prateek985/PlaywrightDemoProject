// @ts-check
import { test, expect } from "@playwright/test";

test("Search the text 'Palm Treo Pro ", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: "Shop by Category" }).click();
  await page
    .locator("span.title", { hasText: " Desktops and Monitors" })
    .click();
  await page
    .locator("div.carousel-item.active > img[title = 'Apple Cinema 30&quot;']")
    .click();
  await page.locator("#input-option231-216836").selectOption("35");
  await page.getByRole("button", { name: "Add to Cart" }).click();
  await page.getByRole("link", { name: "View Cart" }).click();
  await expect(
    page.locator("td.text-left", { hasText: "Apple Cinema 30" })
  ).toBeVisible();
  await expect(page.locator("div[class$='flex-nowrap'] > input")).toHaveValue(
    "2"
  );
});
