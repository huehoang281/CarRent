import React from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import AdsList from '../../components/adsList/AdsList';
import PickList from '../../components/pickList/PickList';
import ProductList from '../../components/productList/ProductList';
import Footer from '../../components/footer/Footer';

export default function Home() {
  return (
    <div>
        {/* <Lable/> */}
        <Header />
        <div className="content">
        <AdsList />
        <div className="magrin">
        <PickList/>
        </div>
        <ProductList/>


        </div>
        < Footer/>
      

    </div>
  )
}
