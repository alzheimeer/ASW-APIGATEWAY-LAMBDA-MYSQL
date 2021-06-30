export interface User {
    idusers?: string;
    name: string;
    secondname: string;
    surname: string;
    secondsurname: string;
    email: string;
    password?: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}

export interface Query {
    "host": string;
    "user": string;
    "password": string;
    "database": string;
    "querysql": string;
}