import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import './App.css';
import WeatherSummary from './WeatherSummary.js';
import ResponsiveAppBar from './containers/ResponsiveAppBar.js';
import './ProductDisplay.css'

import fetch from "node-fetch";


// class ProductDisplay extends React.Component 
// const ProductDisplay = ({currentUser}) => 
const ProductDisplay = () => 
{
    
    
        return(
  <section id="top-container">
    <div className="product" id="info-container">
      <h3>20 Responses That Will Help You</h3>
      <div className="description">
         <h5>$20.00</h5>
      </div>
      <div id="form-container">
        <form action="https://localhost:7127/api/Server" method="POST">
          <button type="submit">
             Checkout
          </button>
        </form>
      </div>
    </div>
  </section>
);

}

export default ProductDisplay;