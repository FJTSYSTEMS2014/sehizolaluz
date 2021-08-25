import React, { useState, useEffect } from "react";
import "firebase/auth";
import firebase from "../Services/firebase";

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
      {!user && (
        <div>
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="email"
            id="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button onClick={login}>Iniciar sesion</button>
          <button onClick={submit}>Crear Cuenta</button>
        </div>
      )}
      {user && <button onClick={logout}> Cerrar Sesion</button>}
    </div>
  );
};
