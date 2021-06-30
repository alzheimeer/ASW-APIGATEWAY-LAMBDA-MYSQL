import axios from 'axios';
import { User, Query } from '../interfaces/User';

const baseUrl = 'https://2s2qtbj9yc.execute-api.us-east-1.amazonaws.com'


export const getUsers = async () => {
    const token = localStorage.getItem('TokenGoogle');
    const url = `${baseUrl}`;
    
        const y = await axios.get<User[]>(url, { headers: { 'Authorization': `Bearer ${token}` }})
        console.log(y)
        return y    
}

export const createUsers = async (user: User) => {
    const token = localStorage.getItem('TokenGoogle');
    const url = `${baseUrl}`;
    return await axios.post(url, user, { headers: { 'Authorization': `Bearer ${token}` }});
}

export const getUser = async (id: string) => {
    const token = localStorage.getItem('TokenGoogle');
    const url = `${baseUrl}/${id}`;
    return await axios.get<User[]>(url,  { headers: { 'Authorization': `Bearer ${token}` }});
}

export const updateUser = async (id: string, user: User) => {
    const token = localStorage.getItem('TokenGoogle');
    const url = `${baseUrl}/${id}`;
    return await axios.put<User[]>(url, user, { headers: { 'Authorization': `Bearer ${token}` }});
}

export const deleteUser = async (id: string) => {
    const token = localStorage.getItem('TokenGoogle');
    const url = `${baseUrl}/${id}`;
    return await axios.delete(url, { headers: { 'Authorization': `Bearer ${token}` }});
}
export const nQuery = async (query: Query) => {
    const token = localStorage.getItem('TokenGoogle');
    const url = `${baseUrl}`;
    const body = {
        "host": query.host,
        "user": query.user,
        "password": query.password,
        "database": query.database,
        "query": query.querysql
    }
    return await axios.post(url, body, { headers: { 'Authorization': `Bearer ${token}` }});
}