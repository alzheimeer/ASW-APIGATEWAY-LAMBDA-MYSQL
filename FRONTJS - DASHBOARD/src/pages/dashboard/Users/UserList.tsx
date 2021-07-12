import React, { useEffect, useState } from 'react'
import { User } from '../interfaces/User';
import { getUsers } from '../Services/UserService'
import  UserItem  from './UserItem';

const UserList = () => {

    const [users, setusers] = useState<User[]>([]);
    
    const loadUsers = async () => {
        const res = await getUsers();
        const formatedUsers = res.data.map(user => {
            return {
                ...user,
                createdAt: user.createdAt ? new Date(user.createdAt): new Date(),
                updatedAt: user.updatedAt ? new Date(user.updatedAt): new Date(),
            }
        })
        .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());

        setusers(formatedUsers)
        
    }
    useEffect(() => {
        loadUsers()
        return () => {

        }
    }, [])

    return (

        <div className="row">
            {users.map((user: User) => {
                return <UserItem user={user} key={user.id} loadUsers={loadUsers}></UserItem>
            })}
         
        </div>
    )
}

export default UserList