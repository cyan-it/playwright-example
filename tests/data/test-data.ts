export interface TestData {
    admin: Credentials;
    user: Credentials;
    users: User[];
    project: any;
}

export interface User {
    id: string;
    fullName: string;
}

export interface Credentials {
    username: string;
    password: string;
    fullName: string;
}
