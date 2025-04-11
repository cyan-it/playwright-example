import { expect, test } from '../ui/base-test.fixture'


test.describe("Api tests", { tag: "@api" }, async () => {

    test.use({
        baseURL: "http://localhost:4500",
        storageState: ".auth/admin.json",
        extraHTTPHeaders: {
            // We set this header per GitHub guidelines.
            'Accept': 'application/json',
            // Add authorization token to all requests.
            // Assuming personal access token available in the environment.
            'Authorization': `Bearer ${process.env.TOKEN}`,
        }
    })

    test('Current user contains valid data', async ({ request }) => {
        const response = await request.get('/user/current');
        expect(response.status()).toBe(200);

        const user = await response.json();
        expect(user.fullname).toBe("Volker Holz");
    });

    test('Projects contains correct list', async ({ request }, { tags}) => {
        const response = await request.get('/project');
        expect(response.status()).toBe(200);

        const projects = await response.json();
        expect(projects.length).toBe(119);
    });
});
