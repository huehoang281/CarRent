import React from 'react';
import "./detail.css";
import Header from '../../components/header/Header';
import Catleft from '../../components/catleft/Catleft';
import Product from "../../components/product/Product";
import Footer from "../../components/footer/Footer";
import Carr from "../../images/car.png"
import Car1 from "../../images/car1.png"
import Car2 from "../../images/car2.png"
import Coment from "../../images/coment.png"
import Coment2 from "../../images/coment2.png"
import { Link } from 'react-router-dom';


export default function Detail() {
    return (
        <div >
            < Header />
            <div className="detal content">
                <div className="boc2">
                    <div className="detail-left">
                        < Catleft />
                    </div>
                    <div className="detail-right">
                        <div className="rightbig">

                            <div className="right-left">
                                <div className="right-leftup">
                                    <div className="leftup-title">
                                        Sports car with the best design and acceleration
                                    </div>
                                    <div className="leftup-content">
                                        Sataefy and comfor to driving futuruing and leceting sport car
                                    </div>
                                    <img className="leftup-img" src={Carr} alt="" />

                                </div>




                                <div className="right-123">
                                    <div className="right-1231">
                                        <img src={Carr} alt="" />
                                    </div>
                                    <img className="anhcar" src={Car1} alt="" />
                                    <img className="anhcar" src={Car2} alt="" />
                                </div>



                            </div>
                            <div className="right2">

                                <div className="right2-all">

                                    <div className="all-top">

                                        <div className="top-left">
                                            <h1> Nissan GT - R</h1>
                                            <div className="star-view">
                                                <div className="start">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="star-white fa-regular fa-star"></i>
                                                </div>
                                                <p> 440+Reviewer</p>
                                            </div>
                                        </div>

                                        <div className="top-right">
                                            <i className=" like fa-solid fa-heart"></i>
                                        </div>

                                    </div>

                                    <div className="all-content">
                                        <p>NISMO has become the end embodiment of Nissan's outstanding
                                            performance, inspireed by the most unforgiving proving ground,
                                            the "race track".
                                        </p>
                                    </div>

                                    <div className="all-list">
                                        <div className="all1">
                                            <p>Type Car</p>
                                            <p>Steering</p>
                                        </div>

                                        <div className="all1">
                                            <p>Sport</p>
                                            <p>Manual</p>
                                        </div>

                                        <div className="all1">
                                            <p>Capacity</p>
                                            <p>Gasoline</p>
                                        </div>

                                        <div className="all1">
                                            <p>2 Person</p>
                                            <p>70L</p>
                                        </div>
                                    </div>

                                    <div className="all-bottom">
                                        <div className="bottom-left">
                                            <div className="bottom-title">
                                                <b>$80.00/</b>
                                                <p className="all-day"> days</p>
                                            </div>
                                            <div >$100.00</div>


                                        </div>

                                        <Link to="/payment"><button className="bottom-button">Rent Now</button></Link>



                                    </div>

                                </div>



                            </div>

                        </div>

                        <div className="detail-coment">

                            <div className="coment-title">
                                <div className="title-left">
                                    <h1>Reviews</h1>
                                </div>
                                <div className="title-right">
                                    <h1>13</h1>
                                </div>
                            </div>

                            <div>

                                <div className="coment-name">
                                    <div className="name-left">
                                        <div className="img-coment">
                                            <img src={Coment} alt="" />
                                        </div>
                                        <div className="big-name">
                                            <h1>Alex Stanton</h1>
                                            <p>CEO at Amazon</p>
                                        </div>
                                    </div>
                                    <div className="coment-right">
                                        <div className="coment-day">20 July 2020</div>
                                        <div className="coment-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="starwhite fa-regular fa-star"></i>
                                        </div>

                                    </div>
                                </div>
                                <div className="text-coment">
                                    <p> We are very happy introduc myself,
                                        my name is Hue, fullname is Hue Hoang,
                                        very comfor inprove with goods a large
                                        of cars, the service by the office also
                                        very friendly and polite.
                                        
                                    </p>
                                </div>
                            </div>

                            <div>

                                <div className="coment-name">
                                    <div className="name-left">
                                        <div className="img-coment">
                                            <img src={Coment2} alt="" />
                                        </div>
                                        <div className="big-name">
                                            <h1>Alex Stanton</h1>
                                            <p>CEO at Amazon</p>
                                        </div>
                                    </div>
                                    <div className="coment-right">
                                        <div className="coment-day">20 July 2020</div>
                                        <div className="coment-star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="starwhite fa-regular fa-star"></i>
                                        </div>

                                    </div>
                                </div>
                                <div className="text-coment">
                                    <p> We are very happy introduc myself,
                                        my name is Hue, fullname is Hue Hoang,
                                        very comfor inprove with goods a large
                                        of cars, the service by the office also
                                        very friendly and polite.
                                    </p>
                                </div>
                            </div>

                            <div className="coment-show">
                                <p>Show All</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>

                        </div>



                        <div className='productList '>
                            <div className='product'>
                                <div className="product-left"> Popular Car</div>
                                <div className="product-right">View All</div>
                            </div>

                            <div className="list">
                                <Product />
                                <Product />
                                <Product />
                            </div>
                            <div className='productList '>
                                <div className='product'>
                                    <div className="product-left">Recomedation Car</div>
                                </div>
                            </div>
                            <div className="list">
                                <Product />
                                <Product />
                                <Product />
                            </div>


                        </div>



                    </div>
                </div>


            </div>
            < Footer/>

        </div>
    )
}
