import { test, expect } from "@playwright/test";

const uatUrl =
  process.env.UAT_URL ||
  "https://automate-my-stuff-frontend-uat-26e2dbaf4cf8.herokuapp.com/";

test("has title", async ({ page }) => {
  await page.goto(uatUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Next Social Login/);
});

test("Sign in with Github", async ({ page }) => {
  await page.goto(uatUrl);

  // Click the get started link.
  //await page.getByRole('link', { name: 'Images' }).click();
  await page.getByText("Sign in with Github").click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
});
