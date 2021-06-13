import {User} from "./user";

export interface UserAccount {
    id: string;
    login: string;
    password: string;
    role: string;
    user: User;
}
