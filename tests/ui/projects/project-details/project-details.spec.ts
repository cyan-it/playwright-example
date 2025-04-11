import { expect, test } from '../projects.fixture';

test.describe("Projects Details Page", async () => {

    test.use({ storageState: ".auth/admin.json" });

    test('is reachable', { tag: "@e2e" }, async ({projectDetailsPage}) => {

        await projectDetailsPage.gotoById(1224);
        await expect(projectDetailsPage.header).toHaveText("Projekt 'Meal Booking'");
    });
})
