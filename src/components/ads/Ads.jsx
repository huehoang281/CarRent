import React from 'react';
import "./ads.css";
import Ads1 from "../../images/asd1.png"

export default function Ads() {
  return (
    <div className='ads'>
        <div className="ads-title">The Best Platform for Car Rental</div>
        <div className="ads-content">Ease of doing a carental safely and reliably. Of course at a low price. </div>
        <button className="ads-button"> Rental Car </button>

        <div>
        <img  className="ads-img" src={Ads1} alt="" />
        </div>

    </div>
  )
}
