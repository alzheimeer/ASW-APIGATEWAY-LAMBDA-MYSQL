import React, { FormEvent, useState } from 'react'
import './Sqlv.css'
import { nQuery } from '../../Services/UserService';
import Swal from 'sweetalert2';


const Sqlv = () => {

    // Creacion Del Estado De Las Variables Del Formulario
    const initialState = {
        host: "",
        database: "",
        user: "",
        password: "",
        querysql: "",
    };

    const [query, setQuery] = useState<any>(initialState);
    const [arrayKeys, setArrayKeys] = useState<any>([" "]);
    const [arrayValues, setArrayValues] = useState<any>([" "]);
    let result: any;

    // Metodo Para Ir Actualizando El Estado Del Los Input Del Formulario
    const handleInputChange = (e: any) => {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    // Metodo Activado Por El Boton
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            result = await nQuery(query);
           
            Swal.showLoading();
            setArrayKeys(Object.keys(result.data[0]));
            setArrayValues(result.data);
            Swal.close();
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Consult the base not valid',
                icon: 'error'
            });
        }
        
        // console.log(result.data);
    }



    return (
        <div className="container">
            <div className="row">
             
                <form onSubmit={handleSubmit}>

                    <label htmlFor="host">Host: </label>
                    <select className="form-select " aria-label="Default select example" name="host" onChange={handleInputChange}>
                        <option selected>Choose</option>
                        <option value="lendiup.ccuvk0hypuej.us-east-1.rds.amazonaws.com">lendiup.ccuvk0hypuej.us-east-1.rds.amazonaws.com</option>
                    </select>

                    <label htmlFor="database">Database name</label>
                    <select className="form-select" aria-label="Default select example" name="database" onChange={handleInputChange}>
                        <option selected>Choose</option>
                        <option value={"lendiup"}>lendiup</option>
                    </select>

                    <label htmlFor="user">user</label>
                    <select className="form-select" aria-label="Default select example" name="user" onChange={handleInputChange}>
                        <option selected>Choose</option>
                        <option value={"admin"}>admin</option>
                    </select>

                    <label htmlFor="password">password</label>
                    <select className="form-select" aria-label="Default select example" name="password" onChange={handleInputChange}>
                        <option selected>Choose</option>
                        <option value={"Zpwjiexxn193*"}>Zpwjiexxn193*</option>
                    </select>

                    



                    <div className="col-md-12 sa">
                        <label htmlFor="querysql">
                            <h2>Enter Sql Statements</h2>
                        </label>
                        <textarea className="form-control sc" name="querysql" rows={12} cols={5} onChange={handleInputChange} placeholder="Write Here Query !!! Select * From ...." />
                        <div className="div row">
                            <div className="col-md-10"></div>
                            <div className="col-md-2">
                                <button className="btn btn-lg btn-block btn-primary mb-3 x">Test</button>
                            </div>
                        </div>

                    </div>
                </form>





                <div className="col-md-12 ">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                {arrayKeys.map((colname: string) => {
                                    return (
                                        <th scope="col">{colname}</th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {arrayValues.map((obj: any) => {
                                return (<tr> {Object.values(obj).map((colname: any) => {
                                    return (
                                        <td>{colname}</td>
                                    );
                                })}
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Sqlv
