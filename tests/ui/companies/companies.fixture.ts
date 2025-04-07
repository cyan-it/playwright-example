import { test as base } from '../base-test.fixture';
import { CompanyListPage } from "./company-list/company-list.pom";
import { CompanyDetailsPage } from "./company-details/company-details.pom";

type CompaniesFixture = {
    companyListPage: CompanyListPage;
    companyDetailsPage: CompanyDetailsPage;
}

export const test = base.extend<CompaniesFixture>({
    companyListPage: async ({ page }, use) => {
        const companyListPage = new CompanyListPage(page);
        await use(companyListPage);
    },
    companyDetailsPage: async ({ page }, use) => {
        const companyDetailsPage = new CompanyDetailsPage(page);
        await use(companyDetailsPage);
    },
});

export { expect } from '../base-test.fixture';
