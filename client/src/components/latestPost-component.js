import React, { Component } from "react";
import { Link } from "react-router-dom";
import fotoketo2 from "./keto_composition.jpg";
import axios from "axios";

class LatestPost extends Component {
  render() {
    // propiedad pasada desde el componente <ArticlesListItem article={article}
    // const { article } = this.props;
    return (
      <div className="fondo-wrap">
        <div class="wrap">
          <div class="feature-layout-1">
            <div class="feature-container-flexbox">
              <div style={{backgroundImage: `url(${process.env.PUBLIC_URL+ `/img/${this.props.article._id}.jpg`})` }} class="feature-image">
                <Link onClick={this.onShowArticle}>
                  {/* <img
                    src={fotoketo}
                    
                    alt="Leche de Almendras baja en carbohidratos"
                  ></img> */}
                </Link>
              </div>
              <div class="feature-content">
                <div class="feature-content-wrap">
                  <h2 class="feature-content-pre-titulo">Lo mas reciente</h2>
                  <h2 class="titulo-feature">{this.props.article.title}</h2>
                  <p>{this.props.article.subtitle}</p>
                  <Link to={{ pathname: `/single/${this.props.article._id}` }}>
                    <span class="btn btn-primary ver-receta-container">
                      Ver Receta
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="feature-layout-2">
            <div class="feature-layout-2-wrap">
              <div class="feature-container-flexbox">
                <div class="entry-col">
                  <Link onClick={this.onShowArticle} class="entry-link">
                    <img
                      src={fotoketo2}
                      alt="Alimentos keto variados"
                      className="foto-keto-desktop"
                    ></img>
                  </Link>
                  <p class="pre-titulo">Conoce mas</p>
                  <Link
                    onClick={this.onShowArticle}
                    class="entry-col-titulo-link"
                  ></Link>
                  <h2 class="entry-col-titulo">¿Que es Keto?</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestPost;
