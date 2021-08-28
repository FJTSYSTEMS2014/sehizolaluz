import React, { useEffect, useState } from 'react';
import img from './img/img.png';

import Usuarios from './components/Usuarios';
import EstadoLuz from './components/EstadoLuz';

function App() {

    const [estado, setEstado] = useState("undefined");


    return (
        <div className=" d-inflex justify-content-center  text-center">

            <br></br>
        
            <br></br>
            <button onClick={() => {
                setEstado("user");
            }}
                type="button"
                className="btn btn-warning btn-lg"
            >
                CREAR USUARIOS
            </button> {"   "} {"   "}
            <button
                onClick={() => {

                    setEstado("luz-new");
                }}
                type="button"
                className="btn btn-dark btn-lg"
            >
                PRENDER/APAGAR Luz
            </button>
            <br></br>
            {(estado === "user") && (<Usuarios />)}
            {(estado === "luz-new") && (<EstadoLuz />)}
            <br></br>
            {(estado === "undefined") && (<div><img className="img-fluid" src={img} /><h1 className="display-4">Se hizo la Luz</h1></div>)}
        </div>
    )
}

export default App;
