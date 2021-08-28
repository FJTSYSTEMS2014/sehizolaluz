
import React, { Component } from "react";
import fireDB from "../Services/firebase";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import imgOFF from '../img/off.png';
import imgON from '../img/on.png';
const firebase = fireDB.database().ref();

class App2 extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEditar: false,
    form: {
      luz: false,
      fecha: `${Date()}`,
    },
    id: 0
  };

  peticionGet = () => {

    firebase.child("luz").on("value", (luz) => {
      if (luz.val() !== null) {
        this.setState({ ...this.state.data, data: luz.val() });
        //console.log({ ...this.state.data, data: luz.val() });
      } else {
        this.setState({ data: [] });

      }
    });
  };

  peticionPost = () => {
    firebase.child("luz").push(this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalInsertar: false });
  }

  peticionPut = () => {
    firebase.child(`luz/${this.state.id}`).set(
      this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalEditar: false });
  }


  peticionDelete = () => {
    if (window.confirm(`Estás seguro que deseas eliminar luz${this.state.form && this.state.form.luz}?`)) {
      firebase.child(`luz/${this.state.id}`).remove(
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

  }

  seleccionarluz = async (luz, id, caso) => {

    await this.setState({ form: luz, id: id });

    (caso === "Editar") ? this.setState({ modalEditar: true }) :
      this.peticionDelete()

  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className=" ">
        <br />

        <br />
        <br />

        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Estado de la Luz</th>
              <th>Fecha de Actualizacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            {Object.keys(this.state.data).map(i => {
              // console.log(i); 
              return <tr key={i}>
                <td>{this.state.data[i].luz}</td>
                <td>{this.state.data[i].fecha}</td>

                <td>
                  <button className="btn btn-primary" onClick={() => this.seleccionarluz(this.state.data[i], i, 'Editar')}>Cambiar Estado de la luz</button> {"   "}
                </td>

              </tr>
            })}
          </tbody>
        </table>


        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>Registrar Nuevo</ModalHeader>
          <ModalBody>
            <div className="form-group ">
              <label>Estado Luz: </label>
              <br />
              <input type="text" className="form-control" name="luz" onChange={this.handleChange} />
              <br />
              <label>Fecha de la ultima actualizacion: </label>
              <br />
              <input type="text" className="form-control" name="fecha" value={Date()} />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => this.peticionPost()}>Guardar</button>{"   "}
            <button className="btn btn-danger" onClick={() => this.setState({ modalInsertar: false })}>Cancelar</button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>Editar Registro</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Estado Luz: </label>
              <br />
              <select type="text" className="form-control" name="luz" onChange={this.handleChange} value={this.state.form && this.state.form.luz} >
                <option value={false}>Apagar</option>
                <option value={true} selected>Encender</option>
              </select>
              <br />
              <label>Fecha de Modificacion: </label>
              <br />
              <input type="text" className="form-control" name="fecha" onChange={this.handleChange} value={this.state.form && (this.state.form.fecha = Date())} />
              <br />


            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onClick={() => this.peticionPut()}>Cambiar</button>{"   "}
            <button className="btn btn-danger" onClick={() => this.setState({ modalEditar: false })}>Cancelar</button>
          </ModalFooter>
        </Modal>
        <div className="btn-primary">

        </div>
        <ModalBody>
          {(this.state.form.luz === true) && (<img className="img-fluid" src={imgON} />)}
          {(this.state.form.luz === false) && (<img className="img-fluid" src={imgOFF} />)}
        </ModalBody>
      </div>
    );
  }
}

export default App2;