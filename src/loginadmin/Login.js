import React, { useState } from 'react';
import Formulario from '../Login/FormularioLogin';
import App from '../App';

function Login() {
    const usuarioAdmin = {
        username: "franck",
        password: "franck"
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
        <div className="text-center">
            {(usuario.username != "") ? (

<div className="text-center"> <div  className="text-center alert alert-dark"><h2>Bienvenido,<span>{usuario.username}</span></h2>

                    <button  className="btn btn-primary text-center" onClick={ExitLogin}>Salir</button>
                   
                </div > <App/></div>
            ) : (<Formulario Login={Login} error={error} />)}


        </div>
    )
}

export default Login
