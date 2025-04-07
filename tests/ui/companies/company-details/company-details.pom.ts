import { PostLoginBasePom } from "../../post-login.base.pom";

export class CompanyDetailsPage extends PostLoginBasePom {

    async gotoById(companyId: number) {
        await this.page.goto(`${this.baseUrl}/companies/${companyId}`);
    }
}
