import { expect as baseExpect } from  "@playwright/test";
import { assert } from "../../base-expect";
import { DataGrid } from "./dx-datagrid.com";

export { test } from "@playwright/test";

export const expect = baseExpect.extend({
    async toHaveAFilterRow(dataGrid: DataGrid) {
        const pass = await dataGrid.getFilterRow().isVisible();
        return assert(pass, `toHaveAFilterRow() assertion failed.\n`);
    },
    async toHaveColumn(dataGrid: DataGrid, columnName: string) {
        const pass = await dataGrid.getColumn(columnName).isVisible();
        return assert(pass, `toHaveColumn(${columnName}) assertion failed.\n`);
    }
});
