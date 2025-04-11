import { expect, test } from '../users.fixture';

test.describe("User List Page", async () => {

    test.describe.configure({ mode: "parallel"});

    test.use({ storageState: ".auth/admin.json" });

    test('is reachable', { tag: "@e2e" }, async ({userListPage}) => {

        await test.step("Test general navigation", async () => {
            await userListPage.goto();

            await expect(userListPage.header).toHaveText("Benutzer");
            await userListPage.grid.getLoadingIndicator().waitFor({state: "hidden"});

            await expect(userListPage.grid.locator).toBeVisible();
            await expect(userListPage.grid).toHaveAFilterRow();
            await expect(userListPage.grid).toHaveColumn("Name");
            await expect(userListPage.grid).not.toHaveColumn("Bananen");
        });

        await test.step("Filter by inactivity and caption", async () => {
            await userListPage.grid.filter("Name", "Admin");
            await expect(await userListPage.grid.getRowCount()).toBe(2);
            await expect(userListPage.grid.getCell(0,1)).toContainText( "Admin");
        });

    });
});
