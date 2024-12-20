// @ts-check
const { test, expect } = require('@playwright/test');

test("AppHasAddButton", async ({ page }) => {
  await page.goto("http://192.168.1.197:3000");
  await expect(page.getByRole('button', {name: "add"})).toBeVisible();
})

test("AppCanSubtract", async ({ page }) => {
  await page.goto("http://192.168.1.197:3000");
  await page.fill('input[name="number1"]', "3");
  await page.fill('input[name="number2"]', "7");
  await page.getByRole('button', {name: "subtract"}).click();
  await expect(page.getByRole('heading', {name: "result"})).toHaveText("The result is: -4");
})