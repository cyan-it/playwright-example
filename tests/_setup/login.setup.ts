import { expect, test as setup } from '../ui/base-test.fixture';
import { PostLoginBasePom } from "../ui/post-login.base.pom";
//import data from "./data/test-data.json";
// Define the type for the test data

setup('write user auth data', async ({page, loginPage, testData}, testInfo) => {
    await loginPage.goto();
    await loginPage.usernameField.fill(testData.user.username);
    await loginPage.passwordField.fill(testData.user.password);
    await loginPage.loginButton.click();

    const response = await page.waitForResponse('**/connect/token');
    const responseJson = await response.json();

    await testInfo.attach('token', { body: JSON.stringify(responseJson), contentType: 'text/json' });

    expect(responseJson).not.toBeNull();
    expect(responseJson.accessToken).not.toBeNull();
    expect(responseJson.refreshToken).not.toBeNull();

    const pageBase = new PostLoginBasePom(page);
    //const screenshot = await pageBase.identityButton.screenshot();
    //await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await expect(pageBase.identityButton).toBeVisible({timeout: 10000});
    await page.context().storageState({ path: '.auth/user.json' });
});

setup('write admin auth data', async ({page, loginPage, testData}, testInfo) => {
    await loginPage.goto();
    await loginPage.usernameField.fill(testData.admin.username );
    await loginPage.passwordField.fill(testData.admin.password);
    await loginPage.loginButton.click();

    const response = await page.waitForResponse('**/connect/token');
    const responseJson = await response.json();

    await testInfo.attach('token', { body: JSON.stringify(responseJson), contentType: 'text/json' });

    expect(responseJson).not.toBeNull();
    expect(responseJson.accessToken).not.toBeNull();
    expect(responseJson.refreshToken).not.toBeNull();

    process.env.TOKEN = responseJson.access_token;

    const pageBase = new PostLoginBasePom(page);

    //const screenshot = await pageBase.identityButton.screenshot();
    //await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await expect(pageBase.identityButton).toBeVisible({timeout: 10000});
    await page.context().storageState({ path: '.auth/admin.json' });



});

