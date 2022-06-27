const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const title = page.locator('head > title');
    await expect(title).toHaveText('The Internet');
    await page.locator('text=Add/Remove Elements').click();
    await page.locator('text=Add Element').click();
    await page.locator('text=Delete').click();
});


test('test', async ({ page }) => {
    // Go to https://the-internet.herokuapp.com/
    await page.goto('https://the-internet.herokuapp.com/');
    // Click text=Add/Remove Elements
    await page.locator('text=Add/Remove Elements').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');
    // Click text=Add Element
    await page.locator('text=Add Element').click();
    // Click text=Delete
    await page.locator('text=Delete').click();
  });