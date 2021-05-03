import React from "react";
//import { urlencoded } from "express";

 import { Link } from "react-router-dom";

function Cards  (props)  {
 



    return (
     
        <div className="cards-bg">
      <section className="card-wrap">  
      <div className="card-wrap-title"><h2>Descubre mas recetas</h2></div>
        <div className="recetas-cards-container">
          <div className="card pancake-keto">
          <Link
                to={{ pathname: `/single/5f42da0a071e496730375701` }}
                
              >
               <div className="card-image"></div>
              </Link>
            <div className="card-body">
              <p className="card-text">
                 Pancakes Keto
                
              </p>
            </div>
          </div>

          <div className="card dalgona-coffee">
          <Link
                to={{ pathname: `/single/5ee93076071e4967303756ff` }}
                
              >
               <div className="card-image"></div>
              </Link>
            <div className="card-body">
              <p className="card-text">
              Dalgona Coffee
              </p>
            </div>
          </div>

          <div className="card champinones">
          <Link
                to={{ pathname: `/single/5f42d94a071e496730375700` }}
                
              >
               <div className="card-image"></div>
              </Link>
            <div className="card-body">
              <p className="card-text">
              Champinones
              </p>
            </div>
          </div>

          <div className="card keto-empanadas">
          <Link
                to={{ pathname: `/single/5f42da83071e496730375702` }}
                
              >
               <div className="card-image"></div>
              </Link>
            
            <div className="card-body">
              <p className="card-text">
              Keto Empanadas
              </p>
              
            </div>
          </div>
        </div>
        
      </section>
      </div>



     
      
      
    );
  
}


export default Cards;