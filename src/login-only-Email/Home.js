import React , { Component } from "react";
import fire from "./firebase2";


class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div>
           <h1>Estas Logueado!!!</h1>
    
            <button onClick={this.logout}>Logout</button>
        </div>
    )
}
}
export default Home;