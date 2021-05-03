import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ArticlesListComponent from "./articles-list.component";
import ArticlesListItem from "./articles-list-item-component";
import foto from "./leche_almendras.jpeg";

export default class Article extends Component {
  constructor(props) {
    //whenever we call this ArticleListItem this gets executed
    super(props); //*you have to ask for props for it to work, more research needed
    //to se how this works, JS is one of few lang that has this flaw
    this.rendertags2 = this.rendertags2.bind(this);
    this.renderIngr = this.renderIngr.bind(this); //link onshow class to this
  }

  state = {
    instructions: [],
    ingredients: [],

    article: {},
  };

  componentDidMount() {
    this.getArticle();
  }

  async getArticle() {
    const res = await axios.get(
      `http://18.223.20.99/articles/${this.props.match.params.id}`
    );
    this.setState({ article: res.data });
    this.setState({ ingredients: res.data.ingredients });
    this.setState({ instructions: res.data.instructions }); //this is how we retrieve data from the backend, setting to component state
    // console.log(this.state.article);
  }

  renderIngr(ingredients) {
    return ingredients.map((ingr) => {
      return (
        <li key={ingr}>
          <input
            type="checkbox"
            value={ingr}
            id="find"
            onClick={this.crossLine}
          />
          <span id={ingr} className="amount">
            {ingr}
          </span>
        </li>
      );
    });
  }

  crossLine = (event) => {
    const element = event.target;
    const element2 = document.getElementById(event.target.value);

    element2.classList.toggle("crossed-line");
  };

  renderInstructions(instructions) {
    return instructions.map((paso) => {
      return (
        <li key={paso}>
          <div> {paso}</div>
        </li>
      );
    });
  }

  rendertags2(article) {
    let array = new Array(article);

    return array.map((tag) => {
      return (
        <Link href="#" key={tag}>
          {tag}
        </Link>
      );
    });
  }

  renderArticle() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.state.article.html }}></div>
    );
  }
  renderDate(string) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(string);

    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    const { article } = this.props;
    return (
      //   <div className="content-wrap container-fluid">
      <div className="content-sidebar-wrap">
        <main className="content">
          <article className="receta">
            <header className="receta-header">
    <h1 className="receta-title">{this.state.article.title}</h1>
              <div className="receta-details">
                <div class="receta-buttons">
                  <a
                    href="#commentsAndrating"
                    class="wprm-recipe-jump-to-comments "
                  >
                    Calificar receta
                    <span class="material-icons receta-icons">expand_more</span>
                  </a>
                  <a
                    href=""
                    class="wprm-recipe-print "
                    data-recipe-id="16189"
                    target="_blank"
                    rel="nofollow"
                  >
                    Imprimir receta
                    <span class="material-icons receta-icons">expand_more</span>
                  </a>
                  <a href="#receta-keto" class="wprm-recipe-jump">
                    <span>Ver receta</span>
                    <span class="material-icons receta-icons">expand_more</span>
                  </a>
                </div>
              </div>
            </header>

            <div className="receta-content">
              {this.renderArticle()}
              <br></br>
              <div className="receta-container">
                <div className="receta-keto" id="receta-keto">
                  <div className="receta-keto-header">
                    <div className="header-image">
                      <img className="image-fluid" src={foto} alt="Leche"></img>
                    </div>
                    <div className="logo-rating-stars">
                      <div className="rating_logo"></div>
                      <div className="rating__stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span>
                          <small>5.0 de 1 votos</small>
                        </span>
                      </div>
                    </div>
                    <h1 className="nombre">{this.state.article.title}</h1>
                  </div>

                  <div className="receta-keto-info">
                    <div className="receta-keto-info-columns">
                      <div className="receta-keto-time block-container">
                        <span className="details-label">total time</span>
                        <span>{this.state.article.totalTime}</span>
                      </div>
                      <div className="receta-keto-servings block-container">
                        <span className="details-label">servings</span>
                        <span>{this.state.article.yield}</span>
                      </div>
                      <div className="receta-keto-calories block-container">
                        <span className="details-label">
                          calories per servings
                        </span>
                        <span>{this.state.article.calories}kcal</span>
                      </div>
                    </div>

                    <div className="receta-keto-info-inline">
                      <div className="receta-prep-time ">
                        <span className="bold">prep:</span>
                        <span className="prep-time">
                          {this.state.article.prepTime} minutes
                        </span>
                      </div>
                      <div className="receta-cook-time ">
                        <span className="bold">cook:</span>
                        <span className="cook-time">
                          {this.state.article.cookTime} minutes
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="receta-keto-buttons"></div>
                  <div className="receta-keto-content">
                    <div className="receta-keto-content-ingredients">
                      <h3 className="ingredients-header">Ingredientes:</h3>
                      <div className="ingredients-group">
                        <ul>
                          {this.renderIngr(this.state.ingredients)}
                          {/* {this.state.ingredients} */}
                        </ul>
                      </div>
                      <div className="receta-keto-content-instructions">
                        <h3 className="instructions-header">Instrucciones:</h3>
                        <div className="instructions-group">
                          <ul className="receta-instructions">
                            {this.renderInstructions(this.state.instructions)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="receta-keto-nutrition"></div>
                  <div className="receta-keto-tags"></div>
                  <div className="receta-keto-footer">
                    <div className="call-to-action">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>

        <aside className="sidebar col-5">
          <section className="widget">
            <div className="widget-wrap">
              <div className="widget-image"></div>
              <h3 className="widget-title">Menu</h3>
              <div className="widget-text">
             
                
              </div>
            </div>
          </section>
        </aside>
      </div>
      //   </div>
    );
  }
}
