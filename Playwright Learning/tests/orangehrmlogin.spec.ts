//import { test, expect } from '@playwright/test';
// Valid login test case
//test('Successful login', async ({ page }) => {
  //await page.goto('https://opensource-demo.orangehrmlive.com/');

  //await page.getByPlaceholder('Username').fill('Admin');
  //await page.getByPlaceholder('Password').fill('admin123');

  //await page.getByRole('button', { name: 'Login' }).click();

  //await expect(page).toHaveURL(/dashboard/);
//});
// wrong password test case
//test('Login with wrong password', async ({ page }) => {
  //await page.goto('https://opensource-demo.orangehrmlive.com/');

  //await page.getByPlaceholder('Username').fill('Admin');
  //await page.getByPlaceholder('Password').fill('wrongpassword');

  //await page.getByRole('button', { name: 'Login' }).click();

  //await expect(
   // page.getByText('Invalid credentials')
 // ).toBeVisible();
//});
//refactored code using page object model
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('OrangeHRM Login Tests', () => {

    test('Successful login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'Admin',
            'admin123'
        );

        await expect(page).toHaveURL(/dashboard/);
    });

    test('Login with wrong password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'Admin',
            'wrongpassword'
        );

        await expect(
            loginPage.getInvalidCredentialsMessage()
        ).toBeVisible();
    });

});
