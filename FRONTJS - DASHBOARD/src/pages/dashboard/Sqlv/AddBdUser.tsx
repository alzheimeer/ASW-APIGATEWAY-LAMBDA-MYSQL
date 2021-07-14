import React, { FormEvent, useState } from 'react'
import './Sqlv.css'
import { nQuery } from '../Services/UserService';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core'


const AddBdUser = () => {

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
        // console.log("query:", query);
        result = await nQuery(query);
        setArrayKeys(Object.keys(result.data[0]));
        setArrayValues(result.data);
        // console.log(result.data);
    }

    function searchEmail() {
        console.log('das')
    }

    return (
        <div>
            <Grid container className="sa">

                <Grid item xs={12}>
                    <h1 className="text-center">PANEL ADMINISTRATOR </h1>
                    <form onSubmit={handleSubmit}>
                        <Grid item xs={3}>
                            <label htmlFor="email">Type Email User: </label>
                            <input type="email" name="email" id="email" className="m-3" placeholder="...@...com" />
                            <Button variant="outlined" color="primary" onClick={() => { searchEmail() }}>Search Email</Button>
                            <hr />
                        </Grid>

                        <Grid item xs={3}>
                            <label htmlFor="database">Database name</label>
                            <select className="form-select" aria-label="Default select example" name="database" onChange={handleInputChange}>
                                <option selected>Choose</option>
                                <option value={"lendiup"}>lendiup</option>
                            </select>
                        </Grid>
                        <Grid item xs={3}>
                            <label htmlFor="user">user</label>
                            <select className="form-select" aria-label="Default select example" name="user" onChange={handleInputChange}>
                                <option selected>Choose</option>
                                <option value={"admin"}>admin</option>
                            </select>
                        </Grid>

                        <Grid item xs={3}>
                            <Box border={1}>
                            <label htmlFor="password">password</label>
                            <select className="form-select" aria-label="Default select example" name="password" onChange={handleInputChange}>
                                <option selected>Choose</option>
                                <option value={"Zpwjiexxn193*"}>Zpwjiexxn193*</option>
                            </select>
                            </Box>
                        </Grid>




                        <Grid item xs={12}>

                           
                                    <button className="btn btn-lg btn-block btn-primary mb-3 x">Test</button>
                            
                        </Grid>
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
                </Grid>
            </Grid>
        </div>
    )
}

export default AddBdUser

