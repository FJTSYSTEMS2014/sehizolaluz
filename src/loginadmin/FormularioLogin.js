import React, { useState } from 'react';
import img from '../img/login-temp.png';

//import img2 from '../components/img/login-button.png';

function FormularioLogin({ Login, error }) {
    const [informacion, setInformacion] = useState({ username: "", password: "" });
    Login(informacion);
    const submitHandler = e => {
        
        e.preventDefault();
        
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <h2 className="display-4"></h2><img src={img} className="img-fluid" alt="img-navbar" />
                <div class="container">
    <h1 className="display-4">Noticias de Franck</h1>
    <p className="lead">Ingresar en modo invitado</p>
    <p className="lead">Username:<strong>franck</strong> Password:<strong>franck</strong></p>
  </div>
                {(error != "") ? (<div className="alert alert-warning">{error}</div>) : ""}
                <div className=" justify-content-center col-md-10">
                    <label className="form-control alert-success" htmlFor="username">Username  </label>
                    <input className="form-control" type="text" name="username" id="username" onChange={e => setInformacion({ ...informacion, username: e.target.value })} value={informacion.username} />
                </div>
               <br></br>
                <div className="justify-content-center col-md-10 ">
                    <label className="form-control alert-success"htmlFor="password">Password </label>
                    <input className="form-control"  type="password" name="password" id="password" onChange={e => setInformacion({ ...informacion, password: e.target.value })} value={informacion.password} />
                </div> <br></br>
                <div className="alert alert-success"> <input className="btn btn-primary text-center" type="submit" value="Ingresar"/></div>  
               
            </div></form>
    )
}

export default FormularioLogin;

