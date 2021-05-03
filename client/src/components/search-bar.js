import React, { Component, useEffect, useState} from 'react';

import axios from "axios";
import Foodata from './food-data.js';
import { render } from 'react-dom';




export default class SearchBar extends Component {

   

    
  constructor(props) {
    super(props);
    this.state = {
        nutritionFacts: [],
        totalFat: 0,
        isLoading: true,
        array:[],
        satFat:0,
        transFat:0,
        cholesterol:0,
        sodium:0,
        carbs:0,
        dietFiber:0,
        sugars:0,
        protein:0,
        vitaminaA:0,
        vitaminaC:0,
        calcio:0,
        iron:0
        
      };

      
  }

 
  componentDidMount(){
      this.loadFacts();
      
      
  }

  
 loadFacts = () =>{
    const selff  = this;
    const  API_ID = "63e56e59";
    const  API_KEY = "02b80a7e681a313aa61789be7abe412c";
    const ingredientes = [
        "1 ounce walnut",
        "1 ounce rice"
    ];
    return axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${ingredientes}`)
    
    
    
    
    .then(function (response) {
            
        
        
    selff.setState({
        
        nutritionFacts: response.data, 
        // totalFat:response.data.totalNutrientsKCal.FAT_KCAL.quantity,
        // isLoading:false,
        // satFat:response.data.totalNutrients.FASAT.quantity.toFixed(2),
        // cholesterol:response.data.totalNutrients.CHOLE.quantity.toFixed(2),
        // sodium:response.data.totalNutrients.NA.quantity.toFixed(2),
        // carbs:response.data.totalNutrients.CHOCDF.quantity.toFixed(2),
        // dietFiber:response.data.totalNutrients.FIBTG.quantity.toFixed(2),
        // sugars:response.data.totalNutrients.SUGAR.quantity.toFixed(2),
        // protein:response.data.totalNutrients.PROCNT.quantity.toFixed(2),
        // vitaminaA:response.data.totalNutrients.VITA_RAE.quantity.toFixed(2),
        // vitaminaC:response.data.totalNutrients.VITC.quantity.toFixed(2),
        // calcio:response.data.totalNutrients.CA.quantity.toFixed(2),
        // iron:response.data.totalNutrients.FE.quantity.toFixed(2),
    });
   
       console.log(selff.state.nutritionFacts)
    //    console.log(selff.state.array)
       })
       .catch(function (error) {
         // handle error
         console.log(error);
         
       })

  }

    render(){
                const {isLoading,nutritionFacts} = this.state;
               
        

    const selff = this;

     return ( 
         
                    <div className="container">
                   <form  className="search-form">
        <input className="search-bar" type="text"  ></input>

        <button className="search-button" type="submit">
            Search
        </button>

    </form>
                     
           {  isLoading  && <div>Loading...</div>}
        <Foodata 
            calories={selff.state.nutritionFacts.calories}
            totalfat={selff.state.totalFat}
            satfat={selff.state.satFat}
            transfat={selff.state.transFat}
            cholesterol={selff.state.cholesterol}
            sodium={selff.state.sodium}
            carbs={selff.state.carbs}
            dietfiber={selff.state.dietFiber}
            sugars={selff.state.sugars}
            protein={selff.state.protein}
            vitaminaa={selff.state.vitaminaA}
            vitaminac={selff.state.vitaminaC}
            calcio={selff.state.calcio}
            iron={selff.state.iron}
            
        />
   

    


               
                     
    
           
            
           







                    {/* <Foodata 
                    calories={selff.state.nutritionFacts.calories} 
                      totalfat={selff.state.totalfat}
                    /> */}
                    {/* {isLoading && <p>Loading....</p>} */}


                     {/* {this.state.nutritionFacts} */}
        
        </div>

     );
    }
                    
    }

       