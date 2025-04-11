import { expect, test } from '../projects.fixture';

test.describe("Projects List Page", async () => {

    test.describe.configure({ mode: "parallel"});

    test.use({ storageState: ".auth/admin.json" });

    test('is reachable', { tag: "@e2e" }, async ({projectListPage, projectDetailsPage}) => {

        await test.step("Test general navigation", async () => {
            await projectListPage.goto();

            await expect(projectListPage.toolsMenu).toBeVisible({timeout: 10000});
            await expect(projectListPage.header).toHaveText("Projekte");
            await projectListPage.grid.getLoadingIndicator().waitFor({state: "hidden"});

            await expect(projectListPage.grid.locator).toBeVisible();
            await expect(projectListPage.grid).toHaveAFilterRow();
            await expect(projectListPage.grid).toHaveColumn("Bezeichnung");
            await expect(projectListPage.grid).not.toHaveColumn("Bananen");

            await expect(projectListPage.grid.getRow(1)).toBeVisible();
            await expect(projectListPage.grid.getCell(0, 2)).toBeVisible();
        });

        await test.step("Filter by inactivity and caption", async () => {
            await projectListPage.grid.filter("Bezeichnung", "Docu");
            await projectListPage.grid.filter("Aktiv", "Nein");

            await expect(await projectListPage.grid.getRowCount()).toBe(4);
            await expect(projectListPage.grid.getCell(0,2)).toContainText("Docu");

        });

        await test.step("Clicking on a row to go to details page", async () => {
            await projectListPage.grid.getRow(2).getByRole("button").click();
            await projectListPage.page.getByRole("menuitem", {name: "Bearbeiten"}).click();

            await expect(projectDetailsPage.header).toContainText("Projekt '");
        });

    });

    test('is reachable 2', { tag: ["@ui", "@fast"] }, async ({projectListPage}) => {
        await projectListPage.goto();

        await expect(projectListPage.toolsMenu).toBeVisible();
        await expect(projectListPage.header).toHaveText("Projekte");
    });

    test('contains mocked data', { tag: [ "@ui" ] }, async ({projectListPage, page, testData}, testInfo) => {
        await page.route('*/**/project/query-list-items', async (route) => {
            const json = testData.project.queryListItems;
            await route.fulfill({ json });
        });

        await projectListPage.goto();
        await expect(projectListPage.toolsMenu).toBeVisible();
        await expect(projectListPage.header).toHaveText("Projekte");

        const screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    })


});
