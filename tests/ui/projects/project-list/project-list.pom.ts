import type { Locator, Page } from "@playwright/test";
import { PostLoginBasePom } from "../../post-login.base.pom";
import { DataGrid } from "../../components/dx-datagrid.com";

export class ProjectListPage extends PostLoginBasePom
{
    toolsMenu: Locator;
    toolsSynchronizeMenuItem: Locator;

    loadingIndicator: Locator;

    grid: DataGrid;

    constructor(page: Page) {
        super(page);
        this.toolsMenu = page.getByTestId("tools-menu");
        this.toolsSynchronizeMenuItem = page.getByRole('menuitem', { name: 'Synchronisieren' });

        this.loadingIndicator = page.locator('.dx-loadindicator-wrapper');
        this.grid = new DataGrid(page, page.getByRole("group").locator(":scope.dx-datagrid"));

    }

    async goto() {
        await this.page.goto(`${this.baseUrl}/projects`);
    }

}
