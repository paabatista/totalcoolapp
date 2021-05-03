import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EmailRecetas (props){

  const [emailRecetas, setemailRecetas] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [toggleError, setToggleError] = useState(false);
  useEffect( () =>{
    
    
emailUpdate();
    
},[])
function updateLastName(e){
  e.preventDefault();
  setLastName(e.target.value);
}
function updateFirstName(e){
  e.preventDefault();
  setFirstName(e.target.value);
}

function onChangeEmail(e){
  e.preventDefault();
  setemailRecetas(e.target.value);
}

function emailUpdate(){
  if(props.location.state.email){
    setemailRecetas(props.location.state.email);
  }
  else{
    return
  }
}

function onSubmit(e){
  e.preventDefault();
  if(emailRecetas =="" || firstName=="" ||lastName=="" ){
    return setToggleError(true);
  }
  else{
    
  console.log("Corriendo api call...")
   
    //pass array of all articles to front-end
      axios.post("http://localhost:5000/suscripcion", {
      email: emailRecetas,
      firstName: firstName,
      lastName: lastName
  }).then(response=>{
      console.log(response)
    });
    
  
  
  }
}

                return <section id="suscripcion">

          
        <div className="wrapper">

<form onSubmit={onSubmit}>
  <div class="form-group">
    <label for="emailInput">Correo Electronico</label>
    <input onChange={onChangeEmail} name="email" value={emailRecetas}  type="email" class="form-control"  id="emailInput" aria-describedby="emailHelp"></input>
    <small id="emailHelp" class="form-text text-muted">No compartiremos tu informacion con nadie</small>
    <label for="firstNameInput">Primer Nombre</label>
    
    <input onChange={updateFirstName} name="firstName" value={firstName}  type="text" class="form-control"  id="firstNameInput" ></input>
    <label for="lastNameInput">Segundo Nombre</label>
    
    <input onChange={updateLastName} name="lastName" value={lastName}  type="text" class="form-control"  id="lastNameInput" ></input>
  </div>
    {/* <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}  
        {(toggleError) &&<small id="emailHelp" class="form-text text-muted">Informacion incompleta</small> }      
                  {(toggleError)&& <br></br>}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

        </div>

      </section>
    }

    export default EmailRecetas;