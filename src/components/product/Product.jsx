import React, {useState} from 'react';
import  "./product.css"
import Xe from "../../images/xe.png"
import { Link } from 'react-router-dom';
import ButtonCustom from '../Button';

export default function Product() {
  const [like, setLike] = useState(false);
  return (

    
      

      <div className="product1">
        <div className="p-product">
        <div className="pdu-left">
          <b className="pdu-title">HondaCar</b>
          
          <p>Sport</p>
        </div>

        <div className="pdu-right">
          <div className="pdu-icon">
         
          {like ? <i className="fa-solid fa-heart" style={{"color" : "red"}} onClick={( ) => setLike(!like) }> </i> : <i className="fa-regular fa-heart" onClick={( ) => setLike(!like) }></i>  }
          
          </div>
        </div>
        
        </div>
        <Link to="/detail">

        <img className="img-pdu" src={Xe} alt="" />
        </Link>
        
        <div className="p-icon">

          <div className="p-icon1">
            <i className="fa-solid fa-gas-pump"> </i>
            <p>90L</p>
          </div>

          <div className="p-icon1">
          <i className="fa-solid fa-cruzeiro-sign"> </i>
          <p>Manual</p>
          </div>

          <div className="p-icon1">
          <i className="fa-solid fa-users"></i>
          <p>7 people</p>
          </div>
        

        </div>

        <div className="p-under">
          <div className="pro-left">
            <div className="pro-title">
            <b>$76.00/</b>
            <p className="remargin"> day</p>
            </div>
            <div>$80.00</div>

        
          </div>
          
          {/* <a href="/payment"> <button className="pro-button"> buy </button> </a> */}
          <Link to='/payment'>
          <ButtonCustom content=' Rent Now' buttonType='btn-danger' className="pro-button" />
          </Link>


          
        </div>



      </div>
      

      
  );
}
