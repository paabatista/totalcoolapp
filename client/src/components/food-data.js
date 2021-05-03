import React, { Component, Fragment } from 'react'; 



const Foodata = ({title, calories, image,
    totalfat,
    satfat,
    transfat,
    cholesterol,
    sodium,
    carbs,
    dietfiber,
    sugars,
    protein,
    vitaminaa,
    vitaminac,
    calcio,
    iron
})=> {
    
        return (
         <Fragment>

{/* <div className="performance-facts__header">
    <h1 className="performance-facts__title">Nutrition Facts</h1>
    <p>Serving Size 1/2 cup (about 82g)</p>
    <p>Serving Per Container 8</p>
  </div> */}
              <table className="performance-facts__table">
    <thead>
      <tr>
        <th colspan="3" className="small-info">
          Amount Per Serving
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="2">
          <b>Calories</b><br></br>
          {calories}
        </th>
        <td>
          Calories from Fat<br></br>
          {totalfat}
        </td>
      </tr>
      <tr className="thick-row">
        <td colspan="3" className="small-info">
          <b>% Daily Value*</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Total Fat</b>
          14g
        </th>
        <td>
          <b>22%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Saturated Fat&nbsp;{satfat}g
        </th>
        <td>
          <b>22%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Trans Fat
          &nbsp;{transfat}g
        </th>
        <td>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Cholesterol</b>
          &nbsp;{cholesterol}mg
        </th>
        <td>
          <b>18%</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Sodium</b>
          &nbsp;{sodium}mg
        </th>
        <td>
          <b>2%</b>
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <b>Total Carbohydrate</b>
          &nbsp;{carbs}g
        </th>
        <td>
          <b>6%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Dietary Fiber
          &nbsp;{dietfiber}g
        </th>
        <td>
          <b>4%</b>
        </td>
      </tr>
      <tr>
        <td className="blank-cell">
        </td>
        <th>
          Sugars
          &nbsp;{sugars}g
        </th>
        <td>
        </td>
      </tr>
      <tr className="thick-end">
        <th colspan="2">
          <b>Protein</b>
          &nbsp;{protein}g
        </th>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
  
  <table className="performance-facts__table--grid">
    <tbody>
      <tr>
        <td colspan="2">
          Vitamin A
          &nbsp;{vitaminaa}%
        </td>
        <td>
          Vitamin C
          &nbsp;{vitaminac}%
        </td>
      </tr>
      <tr className="thin-end">
        <td colspan="2">
          Calcium
          &nbsp;{calcio}%
        </td>
        <td>
          Iron
          &nbsp;{iron}%
        </td>
      </tr>
    </tbody>
  </table>
    <p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>
    <table className="performance-facts__table--small small-info">
    <thead>
      <tr>
        <td colspan="2"></td>
        <th>Calories:</th>
        <th>2,000</th>
        <th>2,500</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colspan="2">Total Fat</th>
        <td>Less than</td>
        <td>65g</td>
        <td>80g</td>
      </tr>
      <tr>
        <td className="blank-cell"></td>
        <th>Saturated Fat</th>
        <td>Less than</td>
        <td>20g</td>
        <td>25g</td>
      </tr>
      <tr>
        <th colspan="2">Cholesterol</th>
        <td>Less than</td>
        <td>300mg</td>
        <td>300 mg</td>
      </tr>
      <tr>
        <th colspan="2">Sodium</th>
        <td>Less than</td>
        <td>2,400mg</td>
        <td>2,400mg</td>
      </tr>
      <tr>
        <th colspan="3">Total Carbohydrate</th>
        <td>300g</td>
        <td>375g</td>
      </tr>
      <tr>
        <td className="blank-cell"></td>
        <th colspan="2">Dietary Fiber</th>
        <td>25g</td>
        <td>30g</td>
      </tr>
    </tbody>
  </table>
    <p className="small-info">
    Calories per gram:
  </p>
  <p className="small-info text-center">
    Fat 9
    &bull;
    Carbohydrate 4
    &bull;
    Protein 4
  </p>  

  

        </Fragment>
      

    );                            
          
    };    
    
export default Foodata;