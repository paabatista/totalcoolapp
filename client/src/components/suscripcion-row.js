import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Suscripcion (props){

  const [emailRecetas, setemailRecetas] = useState("");

  useEffect( () =>{

    
},[])



function updateEmail(e){
      setemailRecetas(e.target.value);
}

  function showSubscription(){

  }
                return <section className="suscripcion">

          
        <div className="wrapper">
        <div className="form__container">
        <div class="titles"><h2 class="pre-title">Recibe <span class="enfasis">Keto</span>Recetas</h2><h3 class="title">Videos, recetas y mas a tu e-mail.</h3></div>
<form>
  <div class="form-row sub">
  <div className="col sub-email">
  
    <input placeholder="Correo electronico"name="email" onChange={updateEmail} type="email" class="form-control" value={emailRecetas} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <small id="emailHelp" class="form-text text-muted">No compartiremos tu informacion con nadie.</small>
  </div>
    
    
  
  
  {/* <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}

    <div className="col submit">
    <Link
                  to={{
                    pathname: '/recetas-keto-email',
                    state: {
                      email: emailRecetas
                    }
                  }}
                >
                  
                
      <button type="submit" class="btn btn-primary">Suscribete</button>
      
      </Link>  
    </div>
    </div>
</form>
</div>

        </div>

      </section>
    }

    export default Suscripcion;