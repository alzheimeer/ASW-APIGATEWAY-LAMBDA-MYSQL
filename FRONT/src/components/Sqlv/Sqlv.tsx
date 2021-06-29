import React, { FormEvent } from 'react'
import './Sqlv.css'
import { nUser } from '../../Services/UserService';



const Sqlv = () => {
     // Metodo Activado Por El Boton
     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await nUser();
    }
  

    return (
        <div className="container">
            <div className="row">
                {/* conlumna de centrado */}
                <div className="col-md-4"></div>

                <div className="col-md-4 mb-5">

                    <label htmlFor="database">Enter DataBase: </label>
                    <select className="m-2" name="database" id="database">
                        <option value="">Db ali</option>
                        <option value="">Db SQl productos</option>
                        <option value="">Db SQL Aurora</option>
                        <option value="">Db pepe </option>
                    </select>

                </div>
                {/* conlumna de centrado */}
                <div className="col-md-4"></div>


                <form onSubmit={handleSubmit}>
                <div className="col-md-12 sa form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        <h2>Enter Sql Statements</h2>
                    </label>
                    <textarea className="form-control sc" id="exampleFormControlTextarea1" rows={12} cols={5} placeholder="Select * From ...." />
                    <div className="div row">
                        <div className="col-md-10"></div>
                        <div className="col-md-2">
                            <button className="btn btn-lg btn-block btn-primary mb-3 x">Test</button>
                        </div>
                    </div>

                </div>
                </form>
                <div className="col-md-12 sb form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        <h2>Results</h2>
                    </label>
                    <textarea className="form-control mb-2" id="exampleFormControlTextarea1" rows={12} cols={5} disabled />
                </div>
            </div>
        </div>
    )
}

export default Sqlv
