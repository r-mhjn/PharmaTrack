import React from "react";
import pic1 from './images/SalesPrediction.png';
import pic2 from './images/Weather_VS_Sales.png';



export default class Predection extends React.Component {
  render() {
    return (
         <div>
          <img src={pic1} alt="..."></img>
          <img src={pic2} alt=".."></img>
        </div>);
  }
}
