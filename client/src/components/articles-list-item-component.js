import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArticlesListItem extends Component {
  constructor(props) {
    //whenever we call this ArticleListItem this gets executed
    super(props); //*you have to ask for props for it to work, more research needed
    //to se how this works, JS is one of few lang that has this flaw
    this.onShowArticle = this.onShowArticle.bind(this); //link onshow class to this
  }

  onShowArticle() {
    window.location.pathname = `/single/${this.props.article._id}`;
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

  renderTags(tags) {
    return tags.map((tag) => {
      return (
        <div className={tag}>
          <Link href="#" key={tag}>
            {tag}
          </Link>
        </div>
      ); // we need to prevent duplicated tags because of KEY{this.onShowArticle()}
    });
  }

  render() {
    const { article } = this.props; // propiedad pasada desde el componente <ArticlesListItem article={article}
    return (
     
        <div className="card sm-col-2 md-col-4" key={this.props.article._id}>
         
          <Link onClick={this.onShowArticle}>
          <div className="card-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL+ `/img/${this.props.article._id}.jpg`})`}}>
            
            </div>
          </Link>

          <div className="card-body">
            <h2 className="card-header">
              <Link
                to={{ pathname: `/single/${article._id}` }}
                id={article._id}
                article={article}
                props={article._id}
              >
                {article.title}(Beta)
              </Link>
            </h2>
            <div className="article__tags">{this.renderTags(article.tags)}</div>
            <br></br>
            
          </div>
          <span><small>{this.renderDate(article.createdAt)}</small></span>
        </div>
      
    );
  }
}

export default ArticlesListItem;
