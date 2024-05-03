import { IUser } from "./user";

export interface IPost {
    _id?: String;
    title: string;
    content: string;
    author: IUser
}



