import { test as base } from '../base-test.fixture';
import { UserListPage } from "./user-list/user-list.pom";
import { UserDetailsPage } from "./user-details/user-details.pom";

type UsersFixture = {
    userListPage: UserListPage;
    userDetailsPage: UserDetailsPage;
}

export const test = base.extend<UsersFixture>({
    userListPage: async ({ page }, use) => {
        const userListPage = new UserListPage(page);
        await use(userListPage);
    },
    userDetailsPage: async ({ page }, use) => {
        const userDetailsPage = new UserDetailsPage(page);
        await use(userDetailsPage);
    },
});

export { expect } from '../base-test.fixture';
