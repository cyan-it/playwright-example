import { expect, test } from '../users.fixture';

test.describe("admin@user-details", async () => {

    test.use({ storageState: ".auth/admin.json" });

    test('is reachable', { tag: "@e2e" }, async ({userDetailsPage, testData}) => {
        await userDetailsPage.gotoById(testData.users[0].id);
        await expect(userDetailsPage.header).toContainText(`Benutzer '${testData.users[0].fullName}'`);
    });
})


test.describe("user@user-details", async () => {

    test.use({ storageState: ".auth/user.json" });

    test('is reachable', { tag: "@e2e" }, async ({userDetailsPage, testData}) => {
        await userDetailsPage.gotoById(testData.users[0].id);
        await expect(userDetailsPage.header).toContainText(`Benutzer '${testData.users[0].fullName}'`);
    });
})
