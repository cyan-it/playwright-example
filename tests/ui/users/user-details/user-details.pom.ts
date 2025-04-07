import { PostLoginBasePom } from "../../post-login.base.pom";

export class UserDetailsPage extends PostLoginBasePom {

    async gotoById(userId: string) {
        await this.page.goto(`${this.baseUrl}/users/${userId}`);
    }
}
