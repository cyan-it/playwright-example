import { PostLoginBasePom } from "../../post-login.base.pom";

export class ProjectDetailsPage extends PostLoginBasePom {

    async gotoById(projectId: number) {
        await this.page.goto(`${this.baseUrl}/projects/${projectId}`);
    }
}
