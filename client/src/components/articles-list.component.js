// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import axios from "axios";
import ArticlesListItem from "./articles-list-item-component";

export default class ArticlesList extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    //pass array of all articles to front-end
    const res = await axios.get("http://18.223.20.99/articles/");
    this.setState({ articles: res.data });
  }

  renderList() {
    //this is for displaying divs of articles info
    return this.state.articles.map((article) => {
      return <ArticlesListItem article={article} key={article._id} />;
    });
  }

  render() {
    return <div className="article-wrap wrapper lista__articulos">{this.renderList()}</div>;
  }
}
