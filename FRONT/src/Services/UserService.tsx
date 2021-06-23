import axios from 'axios';
import { User } from '../interfaces/User';

const baseUrl = 'https://2s2qtbj9yc.execute-api.us-east-1.amazonaws.com'

export const getUsers = async () => {
    const url = `${baseUrl}`;
    return await axios.get<User[]>(url);
}

export const createUsers = async (user: User) => {
    const url = `${baseUrl}`;
    return await axios.post(url, user);
}

export const getUser = async (id: string) => {
    const url = `${baseUrl}/${id}`;
    return await axios.get<User[]>(url);
}

export const updateUser = async (id: string, user: User) => {
    const url = `${baseUrl}/${id}`;
    return await axios.put<User[]>(url, user);
}

export const deleteUser = async (id: string) => {
    const url = `${baseUrl}/${id}`;
    return await axios.delete(url);
}