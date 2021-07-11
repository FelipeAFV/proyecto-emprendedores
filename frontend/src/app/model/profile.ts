import { AppRole } from "./app-role";

export interface Profile {

    firstName: string,
    lastName: string, 
    phoneNumber: string,
    email: string,
    role: AppRole
}