import { type Locator, type Page } from '@playwright/test';
import { BasePom } from "./base.pom";

export class PostLoginBasePom extends BasePom  {

    readonly page: Page;
    readonly header: Locator;

    readonly logo: Locator;
    readonly identityButton: Locator;

    readonly projectGroupMenuItem: Locator;
    readonly projectMenuItem: Locator;
    readonly opportunitiesButton: Locator;
    readonly estimationMenuItem: Locator;
    readonly forecastButton: Locator;
    readonly offerMenuItem: Locator;
    readonly orderMenuItem: Locator;
    readonly paymentsMenuItem: Locator;
    readonly costsMenuItem: Locator;
    readonly travelExpensesMenuItem: Locator;
    readonly absencesMenuItem: Locator;
    readonly worktimeComplianceMenuItem: Locator;
    readonly planingMenuItem: Locator;
    readonly overtimeMenuItem: Locator;
    readonly assetsMenuItem: Locator;
    readonly assetInstancesMenuItem: Locator;
    readonly myAssetInstancesMenuItem: Locator;
    readonly trainingsMenuItem: Locator;
    readonly certificationsMenuItem: Locator;
    readonly trainingParticipantsMenuItem: Locator;
    readonly myTrainingsMenuItem: Locator;
    readonly myTimeAccountMenuItem: Locator;

    readonly userContextMenu: Locator;
    readonly profileMenuItem: Locator;
    readonly messagesMenuItem: Locator;
    readonly administrationMenuItem: Locator;
    readonly logoutMenuItem: Locator;

    constructor(page: Page) {
        super();

        this.page = page;

        this.header = this.page.locator(".page-header");
        this.logo = this.page.locator(".logo-container");

        this.identityButton = this.page.getByTestId("identity-panel");

        this.projectGroupMenuItem = this.page.getByRole('button', { name: 'Projektgruppen' });
        this.projectMenuItem = this.page.getByRole('button', { name: 'Projekte' });
        this.opportunitiesButton = this.page.getByRole('button', { name: 'Opportunities' });
        this.estimationMenuItem = this.page.getByRole('button', { name: 'Aufwandsschätzungen' });
        this.forecastButton = this.page.getByRole('button', { name: 'Forecast' });
        this.offerMenuItem = this.page.getByRole('button', { name: 'Angebote' });
        this.orderMenuItem = this.page.getByRole('button', { name: 'Bestellungen' });
        this.paymentsMenuItem = this.page.getByRole('button', { name: 'Zahlungen' });
        this.costsMenuItem = this.page.getByRole('button', { name: 'Kosten', exact: true });
        this.travelExpensesMenuItem = this.page.getByRole('button', { name: 'Reisekosten' });
        this.absencesMenuItem = this.page.getByRole('button', { name: 'Abwesenheiten' });
        this.worktimeComplianceMenuItem = this.page.getByRole('button', { name: 'Arbeitszeitregeln' });
        this.planingMenuItem = this.page.getByRole('button', { name: 'Planung' });
        this.overtimeMenuItem = this.page.getByRole('button', { name: 'Überstunden' });
        this.assetsMenuItem = this.page.getByRole('button', { name: 'Assets', exact: true });
        this.assetInstancesMenuItem = this.page.getByRole('button', { name: 'Alle Instanzen' });
        this.myAssetInstancesMenuItem = this.page.getByRole('button', { name: 'Meine Assets' });
        this.trainingsMenuItem = this.page.getByRole('button', { name: 'Schulungen' });
        this.certificationsMenuItem = this.page.getByRole('button', { name: 'Zertifizierungen' });
        this.trainingParticipantsMenuItem = this.page.getByRole('button', { name: 'Schulungsteilnehmer' });
        this.myTrainingsMenuItem = this.page.getByRole('button', { name: 'Meine Trainings' });
        this.myTimeAccountMenuItem = this.page.getByRole('button', { name: 'Mein Zeitkonto' });


        this.userContextMenu = this.page.getByTestId("ser context menu");
        this.profileMenuItem = this.page.getByRole('button', { name: 'Profil' });
        this.messagesMenuItem = this.page.getByTestId('messages');
        this.administrationMenuItem = this.page.getByTestId('administration');
        this.logoutMenuItem = this.page.getByRole('button', { name: 'Abmelden' });
    }

    async goto() {
        await this.page.goto('http://localhost:4400/');
    }
}
