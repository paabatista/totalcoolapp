//import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagen from "../keto_real.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class newNavbar extends Component {
  render() {
    return (
      <header>
        {/* <div className="top-bar">
       <form className="top-bar__form mx-auto">
         <div className="top-bar__social-links">
           <Link href="http://pinterest.com"><FontAwesomeIcon icon={['fab', 'pinterest']} size="lg" /></Link>
           <Link href="http://twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></Link>
           <Link href="http://instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></Link>
         </div>

        

         <div className="form-section-horizontal">
           <span><input type="text" name="first_name" className="" id="ck_firstNameField" placeholder="your name"></input></span>
           <span><input type="email" name="email" className="" id="ck_emailField" placeholder="your email" ></input></span>
           <button >Registrate</button>
           
           
         </div>
         
         <div className="form-section-user">
         <Link href="http://instagram.com"><FontAwesomeIcon icon="user" size="lg" /></Link>
         </div>
       </form>
     </div> */}
        <nav className="navbar  navbar-expand-lg navbar-light bg-light mx-auto">
          <img width="700" height="124" src={imagen}></img>

          <Link className="text-dark navbar-brand" to="/"></Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="#navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
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

            <form class="md-form mt-0 form-inline my-2 my-lg-0">
              <Link class="material-icons mdc-button__icon">search</Link>
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}
