import { test as base } from '@playwright/test';
import { mergeExpects } from "@playwright/test";
import { expect as dataGridExpects } from "./components/dx-datagrid.expect";
import { LoginPage } from './login/login.pom';
import { DashboardPage } from "./dashboard/dashboard.pom";
// @ts-expect-error "Module is present and tsconfig is correct. Error is showing in Webstorm not in VSCode"
import data from "../data/test-data.json";
import { TestData } from "../data/test-data";

type BaseTestFixture = {
    failOnJsError: boolean;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    testData: TestData;
}

export const test = base.extend<BaseTestFixture>({
    failOnJsError: [true, { option: true }],
    page: async ({ page, failOnJsError }, use) => {

        const errors: Array<Error> = [];
        page.addListener("pageerror", (error) => errors.push(error));

        await use(page);

        if (failOnJsError) {
            expect(errors).toHaveLength(0);
        }
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    testData: data
});

export const expect = mergeExpects(dataGridExpects);
