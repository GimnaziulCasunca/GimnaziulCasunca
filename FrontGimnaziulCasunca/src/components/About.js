// AboutPage.js
import React, { useEffect, useState } from 'react';

import axios from 'axios';

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
  <button onClick={handleClearDatabase}>Clear Database </button>
  
  </div>
  )}

export default AboutPage;
