import { PostLoginBasePom } from "../post-login.base.pom";
import type { Locator, Page } from "@playwright/test";

export class DashboardPage extends PostLoginBasePom {

    readonly changeLogTile: Locator;
    readonly turnoverTile: Locator;

    constructor(page: Page) {
        super(page);

        this.changeLogTile =  page.getByText("Hinweise zur aktuellen Version");
        this.turnoverTile =  page.getByText("Umsatz / Jahr")
    }

}
