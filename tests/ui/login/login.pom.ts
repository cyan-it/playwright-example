import { type Locator, type Page } from '@playwright/test';
import { BasePom } from "../base.pom";

export class LoginPage extends BasePom {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super();
        this.page = page;
        this.usernameField = page.locator('input[name=username]');
        this.passwordField = page.locator('input[name=passwordInput]');
        this.loginButton = page.locator('[type=submit]');
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }
}
