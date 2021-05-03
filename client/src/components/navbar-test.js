//import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import imagen from "../keto_real.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class newNavbar extends Component {
  onShowArticle() {
    document
      .getElementById("mobile-menu")
      .addEventListener("click", (window.location.pathname = "/posts"));
  }

  render() {
    return (
      <header>
        <div className="top-bar">
          <form className="top-bar__form mx-auto">
            <div className="top-bar__social-links">
              <Link href="http://pinterest.com">
                <FontAwesomeIcon icon={["fab", "pinterest"]} size="lg" />
              </Link>
              <Link href="http://twitter.com">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
              </Link>
              <Link href="http://instagram.com">
                <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
              </Link>
            </div>

            <div className="form-section-horizontal">
              <span>
                <input
                  type="text"
                  name="first_name"
                  className=""
                  id="ck_firstNameField"
                  placeholder="your name"
                ></input>
              </span>
              <span>
                <input
                  type="email"
                  name="email"
                  className=""
                  id="ck_emailField"
                  placeholder="your email"
                ></input>
              </span>
              <button>Registrate</button>
            </div>

            <div className="form-section-user">
              <Link href="http://instagram.com">
                <FontAwesomeIcon icon="user" size="lg" />
              </Link>
            </div>
          </form>
        </div>
        {/* fin de top bar */}

        <Link className="text-dark navbar-brand" to="/">
          {/* logo de keto*/}
          <div id="logo-navbar"></div>
          <div id="logo-navbar-mobile"></div>
        </Link>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <img width="700" height="124" src={imagen}></img> */}

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
          <div className="navbar-wrap">
            <ul className="navbar-nav" id="desktop-navbar">
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
                  <Link className="dropdown-item" to="#Desayunos">
                    Desayunos
                  </Link>
                  <Link className="dropdown-item" to="#Scnacks">
                    Snacks
                  </Link>
                  <Link className="dropdown-item" to="#Bebidas">
                    Bebidas
                  </Link>
                  <Link className="dropdown-item" to="#Platos">
                    Platos Fuertes
                  </Link>
                  <Link className="dropdown-item" to="#jPostres">
                    Postres
                  </Link>
                  <Link className="dropdown-item" to="#Acompa">
                    Acompañamientos
                  </Link>
                  <Link className="dropdown-item" to="/posts">
                    Varios
                  </Link>
                </div>
              </li>
              <li className="nav-item ">
                <Link to="/macro-calculator" className="nav-link">
                  DIETA KETO
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/experiencias" className="nav-link">
                  TIPS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/detodo" className="nav-link">
                  BLOG
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  ARTICULOS
                </Link>
              </li> */}

              <form class="md-form mt-0 form-inline my-2 my-lg-0">
                <Link class="material-icons mdc-button__icon">search</Link>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Buscar"
                  aria-label="Search"
                ></input>
              </form>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            aria-expanded="false"
          >
            <ul id="navbar-mobile" className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li
                className="nav-item active"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
              >
                <Link to="/">HOME</Link>
              </li>

              <li
                className="nav-item dropdown"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
              >
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
                  <Link className="dropdown-item" to="#Desayunos">
                    Desayunos
                  </Link>
                  <Link className="dropdown-item" to="#Scnacks">
                    Snacks
                  </Link>
                  <Link className="dropdown-item" to="#Bebidas">
                    Bebidas
                  </Link>
                  <Link className="dropdown-item" to="#Platos">
                    Platos Fuertes
                  </Link>
                  <Link className="dropdown-item" to="#jPostres">
                    Postres
                  </Link>
                  <Link className="dropdown-item" to="#Acompa">
                    Acompañamientos
                  </Link>
                  <Link className="dropdown-item" to="/posts">
                    Varios
                  </Link>
                </div>
              </li>

              <li
                className="nav-item "
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
              >
                <Link to="/macro-calculator" className="nav-link">
                  DIETA KETO
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
              >
                <Link to="/experiencias" className="nav-link">
                  TIPS
                </Link>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
              >
                <Link to="/detodo" className="nav-link">
                  BLOG
                </Link>
              </li>
              {/* <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
              >
                <Link id="mobile-menu" to="/posts" className="nav-link">
                  ARTICULOS>
                </Link>
              </li> */}

              <form class="md-form mt-0 form-inline my-2 my-lg-0">
                <Link class="material-icons mdc-button__icon">search</Link>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </form>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default newNavbar;
