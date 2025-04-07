import type { Locator, Page } from "@playwright/test";

export class DataGrid {

    loadingIndicator: Locator;

    constructor(public page: Page, public locator: Locator) {
        this.loadingIndicator = this.locator.locator('.dx-loadindicator-wrapper');
    }

    getLoadingIndicator = () => this.locator
        .locator(".dx-loadindicator-wrapper");

    getRow = (rowIndex: number) => this.locator
        .getByRole("row")
        .locator(":scope:not(.dx-datagrid-filter-row, .dx-header-row)")
        .nth(rowIndex);

    getFilterRow = () => this.locator
        .getByRole("row")
        .locator(":scope.dx-datagrid-filter-row")
        .nth(0);

    getCell = (rowIndex: number, columnIndex: number) => this
        .getRow(rowIndex)
        .getByRole("gridcell")
        .nth(columnIndex);

    getRowCount = () => this.locator
        .getByRole("row")
        .locator(":scope:not(.dx-datagrid-filter-row, .dx-header-row)")
        .count();

    getColumn(columnName: string)  {
        return this.locator.getByRole('columnheader', {name: columnName });
    }

    getColumnIndex = async (columnName: string) => + await this.locator
        .getByRole('columnheader', {name: columnName })
        .first()
        .evaluate((el) => el.ariaColIndex);

    async filter(column: number | string, value: string) {

        const columnIndex = typeof column === "string" ? await this.getColumnIndex(column) : column;
        const filterCell = this.getFilterRow()
            .getByRole("gridcell").nth(columnIndex - 1)
            .getByLabel('Filter cell')
            .first();

        const role = await filterCell.evaluate((el) => el.role);

        if (role === "textbox") {
            await filterCell.fill(value);
        }
        else {
            await filterCell.click();
            const ariaControls = await filterCell.evaluate((el) => el.getAttribute("aria-controls"));
            await this.page.locator(`#${ariaControls}`)
                .getByText(value)
                .click();
        }

        await this.page.waitForTimeout(2000);
        //await this.loadingIndicator.waitFor({state: "hidden"});
    }
}
