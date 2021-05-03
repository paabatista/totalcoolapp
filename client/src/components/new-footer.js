import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Suscripcion from "./suscripcion-row.js";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <br></br>
        <div className="wrapper">
        <div class="fluid-container">
  <div class="row">
    <div class="col-lg-4 col-md-4 col-xs-12">
    <div class="social-container-desktop"><h6 class="social-cta"><strong>Síguenos</strong> en nuestras<br></br>redes <strong>sociales</strong>!</h6><div class="social"><div class="wrapper"> <Link href="http://pinterest.com"><FontAwesomeIcon icon={['fab', 'pinterest']} size="lg" /></Link>
           <Link href="http://twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></Link>
           <Link href="http://instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></Link>
           <Link href="http://facebook.com"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></Link>
           <Link href="http://youtube.com"><FontAwesomeIcon icon={['fab', 'youtube']} size="lg" /></Link>
           </div></div></div>
    </div>
    <div class="col-lg-8 col-md-8 col-xs-12">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  RECETAS
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="#Aceite">
                    Desayunos
                  </Link>
                  <Link className="dropdown-item" to="#fruit">
                    Snacks
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Bebidas
                  </Link>
                  <Link className="dropdown-item" to="#salad">
                    Platos Fuertes
                  </Link>
                  <Link className="dropdown-item" to="#juice">
                    Postres
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Acompañamientos
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Varios
                  </Link>
                </div>
              </li>

              <li className="nav-item ">
                <Link to="#" className="nav-link">
                  TIPS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  EXPERIENCIAS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  DE TODO{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  ARTICULOS
                </Link>
              </li>
            </ul>
    </div>
    
   
  </div>
</div>
        
        </div>
      </footer>
    );
  }
}
