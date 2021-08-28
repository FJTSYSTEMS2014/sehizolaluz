import React, { Component } from "react";
//import logo from "./logo.svg";
//import "./App.css";
import fireDB from "../Services/firebase";

import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
const firebase=fireDB.database().ref();

class App extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEditar: false,
    form: {
      nombre: '',
      apellido: '',
      username: '',
      password: '',
      admin: 'false'
    },
    id: 0
  };

  peticionGet = () => {
    firebase.child("usuario").on("value", (nombre) => {
      if (nombre.val() !== null) {
        this.setState({ ...this.state.data, data: nombre.val() });
      } else {
        this.setState({ data: [] });
      }
    });
  };

  peticionPost = () => {
    firebase.child("usuario").push(this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalInsertar: false });
  }

  peticionPut = () => {
    firebase.child(`usuario/${this.state.id}`).set(
      this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalEditar: false });
  }
  peticionDelete = () => {
    if (window.confirm(`Estás seguro que deseas eliminar al usuario ${this.state.form && this.state.form.nombre}?`)) {
      firebase.child(`usuario/${this.state.id}`).remove(
        error => {
          if (error) console.log(error)
        });
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
   // console.log(this.state.form);
  }

  seleccionarNombre = async (nombre, id, caso) => {

    await this.setState({ form: nombre, id: id });

    (caso === "Editar") ? this.setState({ modalEditar: true }) :
      this.peticionDelete()

  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="App">
        <br />
        <button className="btn btn-success btn-block" onClick={() => this.setState({ modalInsertar: true })}>Crear Nuevo Usuario</button>
        <br />
        <br />

        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Username</th>
              <th>Password</th>
              <th>Admin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            
            {Object.keys(this.state.data).map(i => {
              // console.log(i);
              return <tr key={i}>
                <td>{this.state.data[i].nombre}</td>
                <td>{this.state.data[i].apellido}</td>
                <td>{this.state.data[i].username}</td>
                <td>{this.state.data[i].password}</td>
                <td>{this.state.data[i].admin}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => this.seleccionarNombre(this.state.data[i], i, 'Editar')}>Editar</button> {"   "}
                  <button className="btn btn-danger" onClick={() => this.seleccionarNombre(this.state.data[i], i, 'Eliminar')}>Eliminar</button>
                </td>

              </tr>
            })}
          </tbody>
        </table>


        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>Registrar Nuevo Usuario</ModalHeader>
          <ModalBody>
                <div className=" p-3 justify-content-center">
            
              <label>Nombre: </label>
              <br />
              <input type="text" className="form-control" name="nombre" onChange={this.handleChange} />
              <br />
              <label>Apellido: </label>
              <br />
              <input type="text" className="form-control" name="apellido" onChange={this.handleChange} />
              <br />
              <label>Username (e-mail): </label>
              <br />
              <input type="text" className="form-control" name="username" onChange={this.handleChange} />
              <br />
              <label>Password: </label>
              <br />
              <input type="text" className="form-control" name="password" onChange={this.handleChange} />
              <br />
              <br />
              <label>Admin: </label>
              <br />
              <input type="text" className="form-control" name="admin" value="false" disabled />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className=" container-fluid h-100 btn btn-primary" onClick={() => this.peticionPost()}>Guardar</button>{"   "}
            <button className=" container-fluid h-100 btn btn-danger" onClick={() => this.setState({ modalInsertar: false })}>Cancelar</button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>Editar Registro</ModalHeader>
          <ModalBody>
            <div className="p-3 justify-content-center">
              <label>Nombre: </label>
              <br />
              <input type="text" className="form-control" name="nombre" onChange={this.handleChange} value={this.state.form && this.state.form.nombre} />
              <br />
              <label>Apellido: </label>
              <br />
              <input type="text" className="form-control" name="apellido" onChange={this.handleChange} value={this.state.form && this.state.form.apellido} />
              <br />
              <label>Username (e-mail): </label>
              <br />
              <input type="text" className="form-control" name="username" onChange={this.handleChange} value={this.state.form && this.state.form.username} />
              <br />
              <label>Password: </label>
              <br />
              <input type="text" className="form-control" name="password" onChange={this.handleChange} value={this.state.form && this.state.form.password} />
              <br />
              <label>Admin: </label>
              <br />
              <select type="text" className="form-control" name="admin" onChange={this.handleChange} value={this.state.form && this.state.form.admin} >
                <option value="false">Deshabilitar</option>
                <option value="true" selected>Habilitar</option>
              </select>

            </div>
          </ModalBody>
          <ModalFooter>
            <button className=" container-fluid h-100 btn btn-primary" onClick={() => this.peticionPut()}>Guardar</button>{"   "}
            <button className=" container-fluid h-100 btn btn-danger" onClick={() => this.setState({ modalEditar: false })}>Cancelar</button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default App;
