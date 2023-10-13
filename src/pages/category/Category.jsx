import React from 'react';
import "./category.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PickUp from "../../components/pickUp/PickUp";
import Arrow from "../../components/arrow/Arrow";
import Product from "../../components/product/Product";
import Catleft from '../../components/catleft/Catleft';

export default function Category() {
    
    return (
        <div>
            <Header />
            
            <div className="category content">

                <div className="above">
                <div className="category-left12">
                    < Catleft/>
                </div>


                    <div className="category-right">
                        <div className='content-right'>
                            <PickUp />
                            <Arrow />
                            <PickUp bien="category-pickUp" />
                        </div>
                        <div className="content-product">
                            <Product />
                            <Product />
                            <Product />

                        </div>

                        <div className="content-product">
                            <Product />
                            <Product />
                            <Product />

                        </div>
                        <div className="content-product">
                            <Product />
                            <Product />
                            <Product />

                        </div>
                        <div className='productList1 '>
                            <div className='product11'>
                                <button className="product-left1">Show more Car</button>
                                <div className="product-right">120 Car</div>

                            </div>
                        </div>




                    </div>
                </div>


            </div>
    
            <Footer/>
            
        </div>
    )
}
