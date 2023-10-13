import React from 'react'
import Product from '../product/Product';
import "./productList.css"

export default function ProductList() {
  return (
    
    
    
    <div className='productList '>
      <div className='product'>
        <div className="product-left"> Popular Car</div>
        <div className="product-right">View All</div>
      </div>

      <div className="list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
      <div className='productList '>
      <div className='product'>
        <div className="product-left">Recomedation Car</div>
      </div>
    </div>
    <div className="list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        
    </div>

      <div className='productList1 '>
      <div className='product11'>
        <button className="product-left1">Show more Car</button>
        <div className="product-right">120 Car</div>

      </div>
    </div>
    </div>
  )
}
