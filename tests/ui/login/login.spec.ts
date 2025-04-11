import { expect, test } from '../base-test.fixture';
import { PostLoginBasePom } from "../post-login.base.pom";

test.describe("Login Page", async () => {

    test.use({ storageState: ".auth/admin.json" });

    test('can login', async ({page, loginPage, testData}, testInfo) => {

        await test.step("login", async () => {
            await loginPage.goto();
            await loginPage.usernameField.fill(testData.admin.username);
            await loginPage.passwordField.fill(testData.admin.password);
            await loginPage.loginButton.click();
        });

        const response = await page.waitForResponse('**/connect/token');
        const responseJson = await response.json();

        await testInfo.attach('token', { body: JSON.stringify(responseJson), contentType: 'text/json' });

        await expect(responseJson).not.toBeNull();
        await expect(responseJson.accessToken).not.toBeNull();
        await expect(responseJson.refreshToken).not.toBeNull();

        const pageBase = new PostLoginBasePom(page);

        const screenshot = await pageBase.identityButton.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

        await expect(pageBase.identityButton).toHaveCount(1, {timeout: 5000});
        await expect(page).toHaveScreenshot('dashboard.png');
        await expect(await page.screenshot()).toMatchSnapshot("dashboard.png");
    });

});
