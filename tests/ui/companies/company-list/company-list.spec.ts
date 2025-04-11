import { expect, test } from '../companies.fixture';

test.describe("Company List Page", async () => {

    test.use({ storageState: ".auth/admin.json" });

    test('is functional', { tag: "@e2e" }, async ({companyListPage, companyDetailsPage}) => {

        await test.step("Test general navigation", async () => {
            await companyListPage.goto();

            await expect(companyListPage.header).toContainText("Unternehmen");
            await companyListPage.grid.getLoadingIndicator().waitFor({state: "hidden"});

            await expect(companyListPage.grid.locator).toBeVisible();
            await expect(companyListPage.grid).toHaveAFilterRow();
            await expect(companyListPage.grid).toHaveColumn("Name");
            await expect(companyListPage.grid).not.toHaveColumn("Bananen");
        });

        await test.step("Filter by inactivity and caption", async () => {
            await companyListPage.grid.filter("Name", "Cyan");
            await companyListPage.grid.filter("Aktiv", "Ja");

            expect(await companyListPage.grid.getRowCount()).toBe(1);
            await expect(companyListPage.grid.getCell(0,2)).toContainText("Cyan");

            await companyListPage.grid.getRow(0).click();

            await expect(companyDetailsPage.header).toContainText("Unternehmen '");
        });
    });
});
