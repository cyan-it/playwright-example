import { expect, test } from "../base-test.fixture";

test.describe("admin@dashboard", async () => {

    test.use({ storageState: ".auth/admin.json" });

    test("has identity panel with correct name", async ({ dashboardPage, testData }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.identityButton).toHaveText(testData.admin.fullName);
    });

    test("has expected menu items", async({ dashboardPage }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.projectGroupMenuItem).toBeVisible();
        await expect(dashboardPage.projectMenuItem).toBeVisible();

        await expect(dashboardPage.opportunitiesButton).toBeVisible();
        await expect(dashboardPage.estimationMenuItem).toBeVisible();
        await expect(dashboardPage.forecastButton).toBeVisible();
        await expect(dashboardPage.offerMenuItem).toBeVisible();
        await expect(dashboardPage.offerMenuItem).toBeVisible();
        await expect(dashboardPage.orderMenuItem).toBeVisible();
        await expect(dashboardPage.paymentsMenuItem).toBeVisible();
        await expect(dashboardPage.costsMenuItem).toBeVisible();

        await expect(dashboardPage.travelExpensesMenuItem).toBeVisible();
        await expect(dashboardPage.absencesMenuItem).toBeVisible();
        await expect(dashboardPage.worktimeComplianceMenuItem).toBeVisible();
        await expect(dashboardPage.planingMenuItem).toBeVisible();
        await expect(dashboardPage.overtimeMenuItem).toBeVisible();
        await expect(dashboardPage.myTimeAccountMenuItem).not.toBeVisible();

        await expect(dashboardPage.assetsMenuItem).toBeVisible();
        await expect(dashboardPage.assetInstancesMenuItem).toBeVisible();
        await expect(dashboardPage.myAssetInstancesMenuItem).toBeVisible();

        await expect(dashboardPage.trainingsMenuItem).toBeVisible();
        await expect(dashboardPage.certificationsMenuItem).toBeVisible();
        await expect(dashboardPage.trainingParticipantsMenuItem).toBeVisible();
        await expect(dashboardPage.myTrainingsMenuItem).toBeVisible();
    });

    test("has expected identity menu items", async({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.identityButton.click();

        await expect(dashboardPage.profileMenuItem).toBeVisible();
        await expect(dashboardPage.messagesMenuItem).toBeVisible();
        await expect(dashboardPage.administrationMenuItem).toBeVisible();
        await expect(dashboardPage.logoutMenuItem).toBeVisible();

    });

    test("has all required tiles", async ({ dashboardPage, testData }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.identityButton).toHaveText(testData.admin.fullName);
        await expect(dashboardPage.changeLogTile).toBeVisible();
        await expect(dashboardPage.turnoverTile).toBeVisible();
    })

});

test.describe("user@dashboard", async () => {

    test.use({storageState: ".auth/user.json"});

    test("has identity panel with correct name", async ({ dashboardPage, testData }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.identityButton).toHaveText(testData.user.fullName);
    });

    test("has expected menu items", async({ dashboardPage }) => {
        await dashboardPage.goto();
        await expect(dashboardPage.projectGroupMenuItem).toBeVisible();
        await expect(dashboardPage.projectMenuItem).toBeVisible();

        await expect(dashboardPage.opportunitiesButton).not.toBeVisible();
        await expect(dashboardPage.estimationMenuItem).toBeVisible();
        await expect(dashboardPage.forecastButton).not.toBeVisible();
        await expect(dashboardPage.offerMenuItem).not.toBeVisible();
        await expect(dashboardPage.offerMenuItem).not.toBeVisible();
        await expect(dashboardPage.orderMenuItem).not.toBeVisible();
        await expect(dashboardPage.paymentsMenuItem).not.toBeVisible();
        await expect(dashboardPage.costsMenuItem).not.toBeVisible();

        await expect(dashboardPage.travelExpensesMenuItem).toBeVisible();
        await expect(dashboardPage.absencesMenuItem).not.toBeVisible();
        await expect(dashboardPage.worktimeComplianceMenuItem).toBeVisible();
        await expect(dashboardPage.planingMenuItem).toBeVisible();
        await expect(dashboardPage.overtimeMenuItem).not.toBeVisible();
        await expect(dashboardPage.myTimeAccountMenuItem).toBeVisible();

        await expect(dashboardPage.assetsMenuItem).not.toBeVisible();
        await expect(dashboardPage.assetInstancesMenuItem).not.toBeVisible();
        await expect(dashboardPage.myAssetInstancesMenuItem).toBeVisible();

        await expect(dashboardPage.trainingsMenuItem).not.toBeVisible();
        await expect(dashboardPage.certificationsMenuItem).not.toBeVisible();
        await expect(dashboardPage.trainingParticipantsMenuItem).not.toBeVisible();
        await expect(dashboardPage.myTrainingsMenuItem).toBeVisible();
    });

    test("has expected identity menu items", async({ dashboardPage }) => {
        await dashboardPage.goto();
        await dashboardPage.identityButton.click();

        await expect(dashboardPage.profileMenuItem).toBeVisible();
        await expect(dashboardPage.messagesMenuItem).toBeVisible();
        await expect(dashboardPage.administrationMenuItem).toBeVisible();
        await expect(dashboardPage.logoutMenuItem).toBeVisible();

    });

    test("has all required tiles", async ({dashboardPage, testData}) => {
        await dashboardPage.goto();
        await expect(dashboardPage.identityButton).toHaveText(testData.user.fullName);
        await expect(dashboardPage.changeLogTile).toBeVisible();
        await expect(dashboardPage.turnoverTile).not.toBeVisible();
    })

});
