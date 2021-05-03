import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Quicklinks extends Component {
  render() {
    return (
      <div className="quick-links">
        <div className="quick-links-wrap">
          <div className="quick-link platos-principales">
            <Link className="quick-link-item"> Platos Fuertes</Link>
          </div>
          <div className="quick-link acompanamientos">
            <Link className="quick-link-item">Acompanantes</Link>
          </div>
          <div className="quick-link desayunos">
            <Link className="quick-link-item">Desayunos</Link>
          </div>
          <div className="quick-link snacks">
            <Link className="quick-link-item">Snacks</Link>
          </div>
          <div className="quick-link bebidas">
            <Link className="quick-link-item">Bebidas</Link>
          </div>
          <div className="quick-link postres">
            <Link className="quick-link-item">Postres</Link>
          </div>

          <div className="quick-link sin-lactosa">
            <Link className="quick-link-item">Sin lactosa</Link>
          </div>
          <div className="quick-link vegetariano">
            <Link className="quick-link-item">Vegetariano</Link>
          </div>
          <div className="quick-link todo">
            <Link to="posts" className="quick-link-item">
              Todas las recetas
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
