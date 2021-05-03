import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Carousel (){

    const [carousel, setCarousel] = useState([]);

  useEffect( () =>{
    getcarouselData();
    
},[])

function carouselHover  (event)  {
  
  console.log(event.target.children);

 
};

async function getcarouselData() {
    const res = await axios.get(
      `http://18.223.20.99/articles`
    );
    setCarousel(res.data);
    console.log(res.data);
  }

  function renderCarousel() {
    //this is for displaying divs of articles info
    return carousel.slice(0,12).map((carousel) => {
      return<Link to={{ pathname: `/single/${carousel._id}` }}>
      
    
      <div className="item">
        
      
      <img onMouseOver={carouselHover} src={process.env.PUBLIC_URL+ `/img/${carousel._id}.jpg`} alt={carousel.title}></img>
      <div className="item__overlay">
        <p key={carousel}>{carousel.title}</p>
        </div>
    </div>
    </Link>
      ;
    });

    
  }

  
                return (
                
    <section className="carousel__row">

          
        <div className="wrapper">
            <div className="row">
                <div  className="col-lg-12"></div>
                <div className="col-lg-4 col-md-4 col-xs-12 carousel__calculadora">
                    <h2 className="entry-title"> <a href="localhost:3000/calculadora-de-macro-nutrientes" className="entry-title-link"> Calculadora de Macronutrientes </a></h2>
                        <div className="entry-excerpt">Te ayudamos a calcular tus carbohidratos netos y calorias para perdida de peso o ganar masa muscular. 
                        </div>
                </div>

                <div className="col-lg-8 col-md-8 col-xs-12 carousel__carousel">
                <h1>Publicaciones Recientes</h1>
                    <div className="owl-carousel">
               {renderCarousel()}
               
                    </div>
                </div>

            </div>
            

        </div>

    </section>
                )
    }

    export default Carousel;