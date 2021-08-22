import React, { useEffect, useState } from 'react';
import img from '../img/off.png';
import img2 from '../img/on.png';
import App from '../App';

function Luz() {

    const [estado, setEstado] = useState("off");


    return (
        <div>

            <button
                onClick={() => {
                setEstado("on");
                }}
                type="button"
                className="btn btn-success btn-lg"
            >
                Encender Luz
            </button>
            <button
                onClick={() => {
                    setEstado("off");
                }}
                type="button"
                className="btn btn-danger btn-lg"
            >
                Apagar Luz
            </button>
            <button
                onClick={() => {

                    setEstado("user");
                }}
                type="button"
                className="btn btn-warning btn-lg"
            >
                Usuarios
            </button>
            {(estado === "off") && (<img src={img} />)}
            {(estado === "on") && (<img src={img2} />)}
            {(estado === "user") && (<App />)}
        </div>
    )
}

export default Luz
