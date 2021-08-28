import React from "react";

import Firebase from "../../Services/firebase";

//import config from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
        usuarios: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("salvar datos");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let role = this.refs.role.value;
    let uid = this.refs.uid.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if (uid && name && role) {
      const { usuarios } = this.state;
      const devIndex = usuarios.findIndex(data => {
        return data.uid === uid;
      });
      usuarios[devIndex].name = name;
      usuarios[devIndex].role = role;
      usuarios[devIndex].email = email;
      usuarios[devIndex].password = password;
     
      this.setState({ usuarios });
    } else if (name && role) {
      const uid = new Date().getTime().toString();
      const { usuarios } = this.state;
      usuarios.push({ uid, name, role,email,password });
      this.setState({ usuarios });
    }

    this.refs.name.value = "";
    this.refs.role.value = "";
    this.refs.uid.value = "";
    this.refs.email.value = "";
    this.refs.password.value = "";
  };

  removeData = developer => {
    const { usuarios } = this.state;
    const newState = usuarios.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ usuarios: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.name.value = developer.name;
    this.refs.role.value = developer.role;
    this.refs.email.value = developer.email;
    this.refs.password.value = developer.password;
  };

  render() {
    const { usuarios } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Equipo de Desarrollo</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {usuarios.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.role}</p>
                    <p className="card-text">{developer.email}</p>
                    <p className="card-text">{developer.password}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Agregar un nuevo miembro al Equipo</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Role</label>
                    <input
                      type="text"
                      ref="role"
                      className="form-control"
                      placeholder="Role"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>email</label>
                    <input
                      type="text"
                      ref="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Password</label>
                    <input
                      type="text"
                      ref="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                 OK
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
           
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;