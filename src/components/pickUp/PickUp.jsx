import React from 'react';
import "./pickUp.css";

export default function PickUp({bien}) {
  return (
    <div className={`pickup ${bien}`}>
      <div className="p-left">  
     <input type="radio" className="p-button"></input>
     <b className="p-title"> Pick-Up</b>
      </div>

     <div className="p-category">
      
      <div className="p-colum">
      <div className="p-lo">Locations</div>
      <div className="p-select">
      <p> Select your city </p>
      <i className="fa-solid fa-chevron-down"></i>
      </div>
      </div>
        
        
      <div className="p-colum">
      
      <div className="p-lo">Date</div>
      <div className="p-select">

      <p> Select your date</p>
      <i className="fa-solid fa-chevron-down"></i>
      </div>
      </div>

      <div className="p-colum">

      <div className="p-lo">Time</div>
      <div className="p-select">

      <p> Select your time</p>
      <i className="fa-solid fa-chevron-down"></i>
      </div>
      </div>

    
     </div>

     
      
    </div>
    
  )
}
