import React from 'react';
import {useState, useEffect} from 'react';


  const url4='https://se-hizo-la-luz-default-rtdb.firebaseio.com/usuario.json';
function Get_Marvel2 () {
  const [personajes, setPersonajes] = useState ([]);

  // apenas inicie el componente usamos useEffect
  useEffect (() => {
    fetch (url4) // hacemos la petición get
      .then (res => res.json ()) // cuando hayamos terminado (then) e texto plano lo parseamos a json la respuesta de la petición
      .then (res => setPersonajes (res), console.log(personajes))// cuando hayamos terminado (then) actualizamos el estado nombre
      .catch (error => {
        console.log (error);
      });
  }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.

  console.log (personajes);

  return (
    <div className=" row row-cols-1 row-cols-md-4 g-3">

      {personajes.map (per => (
        <div className="row-2 shadow-lg p-1 mb-1 bg-dark rounded">
        
          <div className="card-body">

          
              <li className="list-group-item fw-bold">Name:{per.admin}</li>
        
      
             
         

          </div>

        </div>
      ))}
    </div>
  );
}

export default Get_Marvel2;


