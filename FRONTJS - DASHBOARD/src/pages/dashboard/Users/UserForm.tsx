import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { User } from '../interfaces/User';
import { createUsers } from '../Services/UserService';
import Swal from 'sweetalert2';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../Services/UserService';

interface Params {
    id: string;
}



const UserForm = () => {
    
    // Se Crea History Y Params
    // const history = useHistory();
    <Outlet />
    const params = useParams();
    console.log('ID:',params.id);
    // Creacion Del Estado De Las Variables Del Formulario
    const inicialState = {
        name: '',
        secondname: '',
        surname: '',
        secondsurname: '',
        email: '',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    const [user, setUser] = useState<User>(inicialState);

    // Metodo Para Ir Actualizando El Estado Del Los Input Del Formulario
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // Metodo Activado Por El Boton
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if (!params.id) {
            await createUsers(user);
            // Manda aviso de que se creo el usuario
            Swal.fire({
                title: 'OK!',
                text: 'User Created',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            // Manda el formulario a su estado inicial
            setUser(inicialState);
        } else {
            await updateUser(params.id, user)
        }
        // Redirecciona a la ruta deseada
        <Link to='/'>Back</Link>
        // history.push('/');
    }

    const fgetUser = async (id: string) => {
        const resp = await getUser(id);
        // console.log(resp)
        const { name, secondname, surname, secondsurname, email, password } = resp.data[0];
        setUser({ name, secondname, surname, secondsurname, email, password });

    }
    useEffect(() => {
        if (params.id) fgetUser(params.id); 
    }, [])

    // HTML

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>Create New User</h3>


                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Names</label>
                                <input type="text" name="name" className="form-control" placeholder="Write First Name" value={user.name} autoFocus onChange={handleInputChange} />
                                <input type="text" name="secondname" className="form-control" placeholder="Write Second Name" value={user.secondname} onChange={handleInputChange} />
                            </div>

                            <div className="form-group  mb-3">
                                <label htmlFor="surname">Surnames</label>
                                <input type="text" name="surname" className="form-control" placeholder="Write Surname" value={user.surname} onChange={handleInputChange} />
                                <input type="text" name="secondsurname" className="form-control" placeholder="Write Second Surname" value={user.secondsurname} onChange={handleInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" className="form-control" placeholder="Write your email" value={user.email} onChange={handleInputChange} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="text" name="password" className="form-control" placeholder="Write your password" value={user.password} onChange={handleInputChange} />
                            </div>

                            {
                                params.id ? <button className="btn btn-info">Update User</button> : <button className="btn btn-primary">Create User</button>
                            }

 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm
