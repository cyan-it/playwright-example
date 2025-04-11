import { expect, test } from '../companies.fixture';

test.describe("Companies Detail Page", async () => {

    test.describe.configure({ mode: "parallel"});

    test.use({ storageState: ".auth/admin.json" });

    test('is reachable', { tag: "@e2e" }, async ({companyDetailsPage}) => {

        await companyDetailsPage.gotoById(104);
        await expect(companyDetailsPage.header).toContainText("Unternehmen 'Cyan IT'");
    });
})
