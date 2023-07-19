import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Next Social Login/);
});

test('Sign in with Github', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Images' }).click();
  await page.getByText('Sign in with Github').click();
  
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
});
