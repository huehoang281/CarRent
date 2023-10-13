import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='h'>
      <div className="h-left">
        <Link to="/home"> <h1 className="h-title">morent</h1></Link>
        <div className="h-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="h-text" placeholder='Search something here' />
          <i className="fa-solid fa-filter"></i>
        </div>
      </div>


      <div className="h-right">
      <i className=" h-icon fa-solid fa-heart"></i>
      <i className="h-icon fa-solid fa-bell"></i>
      <i className=" h-icon fa-solid fa-gear"></i>
      <Link to="/admin">
        <img className="h-img" src="https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=i2M2IgCcw574LT-bXFY92g" alt="" />
        </Link>
      </div>
        

    </div>
  )
}
