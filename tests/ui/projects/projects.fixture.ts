import { test as base } from '../base-test.fixture';
import { ProjectListPage } from "./project-list/project-list.pom";
import { ProjectDetailsPage } from "./project-details/project-details.pom";

type ProjectsFixture = {
    projectListPage: ProjectListPage;
    projectDetailsPage: ProjectDetailsPage;
}

export const test = base.extend<ProjectsFixture>({
    projectListPage: async ({ page }, use) => {
        const projectListPage = new ProjectListPage(page);
        await use(projectListPage);
    },
    projectDetailsPage: async ({ page }, use) => {
        const projectDetailsPage = new ProjectDetailsPage(page);
        await use(projectDetailsPage);
    },
});

export { expect } from '../base-test.fixture';
