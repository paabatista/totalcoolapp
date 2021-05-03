import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./style.css"; //style css //all components have access to css with this import
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// Pages //
import Home from "./components/home-component.js";
import Navbartest from "./components/navbar-test.js";
import PreFooter from "./components/new-prefooter.js";
import Footer from "./components/new-footer.js";

import ArticlesList from "./components/articles-list.component.js";
import Article from "./components/article-component.js";
import Macro from "./components/Calculadora.js";
import React from "react";
import EmailRecetas from "./components/email-recetas.js";

library.add(fab, faUser);

function App() {
  return (
    <Router>
      <Navbartest />

      {/*we can declare a container here or in each component render render={(      
      )}                        */}
      <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/calculadora-de-macro-nutrientes" component={Macro} /> 
        <Route path="/posts" component={ArticlesList} />
        <Route path="/single/:id" component={Article} />
        <Route path="/recetas-keto-email/" component={EmailRecetas} />
      </Switch>
      {/* <div className="ad-container"></div> */}
      
      <PreFooter />
       <Footer /> 
    </Router>
  );
}

export default App;
