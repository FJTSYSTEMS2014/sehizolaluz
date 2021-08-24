import React, { useEffect, useState } from 'react';
import img from './img/img.png';

import Usuarios from './components/Usuarios';
import EstadoLuz from './components/EstadoLuz'

function App() {

    const [estado, setEstado] = useState("undefined");


    return (
        <div className="text-center">

            {(estado === "undefined") && (<div><img className="img-fluid" src={img} /><h1><strong>Se hizo la Luz</strong></h1></div>)}
            <br></br>

            <br></br>
            <button onClick={() => {
                setEstado("user");
            }}
                type="button"
                className="btn btn-warning btn-lg"
            >
                Usuarios
            </button> {"   "} {"   "}
            <button
                onClick={() => {

                    setEstado("luz-new");
                }}
                type="button"
                className="btn btn-dark btn-lg"
            >
                On/Off Luz
            </button>

            {(estado === "user") && (<Usuarios />)}
            {(estado === "luz-new") && (<EstadoLuz />)}
        </div>
    )
}

export default App;
