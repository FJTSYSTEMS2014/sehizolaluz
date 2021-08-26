import React, { useState } from 'react';
import img from '../img/Crystal_Project.png';


function FormularioLogin({ Login, error }) {
    const [informacion, setInformacion] = useState({ username: "", password: "" });
    const submitHandler = e => {
        e.preventDefault();
        Login(informacion);
    }
    return (
        <form className="d-flex justify-content-center " onSubmit={submitHandler}>
            <div className="form-group">
                <h2 className="display-4"></h2><img src={img} className="img-fluid" alt="img-navbar" />
                <div class="container">
                    <h1 className="display-4">Testing</h1>
                    <p className="lead">Ingresar en modo invitado</p>
                    <p className="lead">Username:<strong>testing</strong> Password:<strong>testing</strong></p>
                </div>


                <div className=" justify-content-center col-md-12">
                    <label className="form-control " htmlFor="username">Username  </label>
                    <input className="form-control text-dark" type="text" name="username" id="username" onChange={e => setInformacion({ ...informacion, username: e.target.value })} value={informacion.username} required/>
                </div>


                <div className="justify-content-center col-md-12 ">
                    <label className="form-control " htmlFor="password">Password </label>
                    <input className="form-control text-dark" type="password" name="password" id="password" onChange={e => setInformacion({ ...informacion, password: e.target.value })} value={informacion.password} required/>
                </div> <br></br>{(error != "") ? (<div className="bg-light">{error}</div>) : ""}
                <div className=" "> <input className="btn-block btn-primary text-center" type="submit" value="Ingresar" /></div>

            </div></form>
    )
}

export default FormularioLogin

