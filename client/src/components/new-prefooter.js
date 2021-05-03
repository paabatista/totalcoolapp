import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Suscripcion from "./suscripcion-row.js";

export default class Footer extends Component {
  render() {
    return (
      
        <div className="wrapper">
        <div class="fluid-container">
  <div class="row">
    <div class="col-lg-6 col-md-6 col-xs-12">
    <Suscripcion />
    </div>
    <div class="col-lg-6 col-md-6 col-xs-12">
      One of three columns
    </div>
   
  </div>
</div>

        </div>
        
     
    );
  }
}
