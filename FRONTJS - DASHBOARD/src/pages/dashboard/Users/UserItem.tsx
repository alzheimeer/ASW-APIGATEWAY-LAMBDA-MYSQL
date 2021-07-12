import React from 'react'
import { User } from '../interfaces/User';
import './UserItem.css'
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { deleteUser } from '../Services/UserService';
import Swal from 'sweetalert2';
import {
    Box,
    Breadcrumbs,
    Button,
    Card,
    Container,
    Dialog,
    Grid,
    Link,
    Typography
  } from '@material-ui/core';



interface Props {
    user: User,
    loadUsers: () => {};  
}


const UserItem = ({ user, loadUsers }: Props) => { 

    // const history = useHistory();  
    <Outlet />

    const handleDelete = async (id: string) => {

        const value = await Swal.fire({
            text: 'Are you sure to delete this User?',
            showCancelButton: true
          })
        if(value.isConfirmed === true) {
            await deleteUser(id);
            loadUsers();    
        }
        
    }

    return (
        <div className="col-md-4">
            <div className="card card-body user-Card" 
                            style={{cursor: 'pointer'}} 
                            >
                <div className="div d-flex justify-content-between">
                    <Link
                    color="textPrimary"
                    component={RouterLink}
                    to={`dashboard/update/${user.id}`}
                    variant="subtitle2"
                    > ID: <small> {user.id}</small>
                    </Link>
                   
                   
                    <span className="text-danger" onClick={() => user.id && handleDelete(user.id)}    >X</span>
                </div>
                
                <h3>Nombres:  {user.name} {user.secondname}</h3>

                <h3>Apellidos:  {user.surname}{user.secondsurname} </h3>

                <h6>email:  {user.email}    </h6>
            </div>
            


        </div>

    )
}

export default UserItem