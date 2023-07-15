// AboutPage.js
import React from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';


let del, pass, FinToken = localStorage.getItem('token')


export const AboutPage = () => {

  
  const handleClearDatabase = async () => {
  if(FinToken){
    try {
      del = prompt("Are you sure you want to clear all data? (y,n)?");
      if (del === "y") {
        pass = prompt("Enter password ?");
          if (pass === "42281719") {
            await axios.delete("/cleardata");
            alert("Elev database cleared successfully.");
    
          }else {
            alert("Wrong password!")
          }
      } 
    } catch (error) {
      console.error("Error clearing elev database:", error);
    }
  }};
  
  return( 
    <div>
        <Link to = "/modify"><button class="home"><h3><b>Back</b></h3></button></Link> 
        <div class="container">
            <div class="center">
              <div class="center-align">Be careful, you will delete the database:<br/>
                <button class="cleardata"  onClick={handleClearDatabase}>Clear Database </button>
              </div>
            </div>
        </div>
    </div>
  )}

export default AboutPage;
