// @ts-expect-error "Module is present and tsconfig is correct. Error is showing in Webstorm not in VSCode"
import data from "../data/test-data.json";

export class BasePom {

    baseUrl: string = data.baseUrl;

}
