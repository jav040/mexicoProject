import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';

import fetch from "node-fetch";
import './Feature.css'


class Feature extends React.Component 
{
    render() { 
        return(
  <section id="features-container">
    <div id="feature-header">
        LEARN TO LIVE AND THRIVE 
    </div>
    <div id="feature-one">
        <span>feature 1</span>
        <span> 
            <img id="tj-feature" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Zona_Rio_Tijuana.jpg" />
        </span>
    </div>
    <div id="feature-two">
        <span> 
            <img id="tj-feature" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Zona_Rio_Tijuana.jpg" />
        </span>
         <span>feature 2</span>
    </div>
      <div id="feature-three">
       <span>feature 3</span>
       <span> 
            <img id="tj-feature" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Zona_Rio_Tijuana.jpg" />
        </span>
      </div>
  </section>
);
}}

export default Feature;