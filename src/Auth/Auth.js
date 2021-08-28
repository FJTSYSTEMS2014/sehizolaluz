import React, { useState, useEffect } from "react";
import firebase from "../Services/firebase";
import "firebase/auth";
import App from '../App';
import EstadoLuz from '../components/EstadoLuz';
import hor from '../img/horizontal-line.gif';
import welcome from '../img/welcome.gif';

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  //verificando el user actual con el auth de firebase
  const [user, setUser] = useState(() => {
    const user = firebase.auth().currentUser;
   
    return user;
  });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
     
    });
  });

  //creacion de usuario con mail y pass
  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  //login en firebase
  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };
  //logout del auth firebase
  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <div>
         <div className="text-center">
        <br />
        <img className="img-fluid" src={hor} />
        <img className="img-fluid" src={welcome} />
        <br />
      {!user && (
        <div >{''}
          <label  htmlFor="email"><h2>Correo Electronico</h2></label>
          <br></br>
         
          <input cla
            type="email"
            id="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />  <br></br>
          <label htmlFor="password"><h2>Contraseña</h2></label>
          <br></br>
          <input
            type="password"
            id="password"
            onChange={(ev) => setPassword(ev.target.value)}
          /> <hr></hr> 
        
<div className="d-flex">  <button className="btn btn-primary btn-block" onClick={login}>Iniciar sesion</button><hr></hr><br></br></div>
        </div>
      )}

</div>


      
      {user && <button className="btn btn-warning btn-block"onClick={logout}> Cerrar Sesion</button> }
      {user&&<h2>Bienvenid@<span>{user.username}</span></h2>}
      {user&&<App/>}
    </div>
    
  );
};

/*
          <button className="btn btn-primary btn-block" onClick={submit}>Crear Cuenta</button>
          */