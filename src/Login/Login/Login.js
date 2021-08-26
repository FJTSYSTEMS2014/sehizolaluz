import React, { useState } from 'react';
import Formulario from './FormularioLogin';
import App from "../../App";

function Login() {
    const usuarioAdmin = {
        username: "testing",
        password: "testing"
    }
    const [usuario, setUsuario] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const Login = datoLogin => {
        /* console.log(datoLogin); */
        if (datoLogin.username == usuarioAdmin.username && datoLogin.password == usuarioAdmin.password) {
            console.log(`bienvenido usuario ${datoLogin.username}`)
            setUsuario({
                username: datoLogin.username,
                password: datoLogin.password

            });
        } else {
            console.log('usuario invalido');
            setError('Usuario invalido');
        }
    }
    const ExitLogin = () => {
        console.log("Chau");
        setUsuario({ username: "", password: "" });

    }
    return (
        <div className="justify-content-center text-center ">
            {(usuario.username != "") ? (

                <div className="d-inflex justify-content-center text-center">
                    <div className="text-center text-light bg-dark">
                        <h2>Bienvenido,<span>{usuario.username}</span></h2>
                        <div className="btn-warning text-center"> <button className="btn-block btn-lg btn-warning text-center" onClick={ExitLogin}>Salir</button></div>
                       
                    </div>  <App /></div>

                       
            ) : (<Formulario Login={Login} error={error} />)}


        </div>
    )
}

export default Login
