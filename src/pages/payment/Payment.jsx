import React from 'react';
import "./payment.css"
import Header from '../../components/header/Header';
import Visa from "../../images/Visa.png";
import Paypal from "../../images/PayPal.png";
import Bitcoin from "../../images/Bitcoin.png";
import Visat from "../../images/vsat.png";
import Footer from "../../components/footer/Footer";
import Carr from "../../images/car.png"

export default function Payment() {
  return (
    <div>
      <Header />
      <div className="payment content">
        <div className="pay-left">

          <div className="payment-content">
            <div className="pay-top">
              <div className="Pay-left1">
                <div className="pay-title">Billing Info</div>
                <p>Please enter your biling info</p>
              </div>
              <div className="pay-left2">
                <p>Step 1 of 4</p>
              </div>
            </div>

            <div className="pay-bottom">
              <div className="pay-bottom1">
                <div className="pay-name">Name</div>
                <input type="text" placeholder="Your name" />

                <div className="pay-name">Address</div>
                <input type="text" placeholder="Address" />
              </div>
              <div className="pay-bottom2">
                <div className="pay-name">Phone Number</div>
                <input type="text" placeholder="Phone Number" />

                <div className="pay-name">Town/City</div>
                <input type="text" placeholder="Town or city" />

              </div>
            </div>
          </div>

          <div className="payment-content">
            <div className="pay-top2">
              <div className="Pay-left1">
                <div className="pay-title">Rental Info</div>
                <p>Please select your rental date</p>
              </div>
              <div className="pay-left2">
                <p>Step 2 of 4</p>
              </div>
            </div>
            <div className="cupicup">
              <div className="pay-pickup">Pick - Up</div>

              <div className="pay-bottom">
                <div className="pay-bottom3">

                  <div className="pay-name">Locations</div>
                  <div className="pay-input">
                    <input className="nut" type="text" placeholder="Select your city" />
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>


                  <div className="pay-name">Time</div>
                  <div className="pay-input">
                    <input type="text" placeholder="Select your time" />
                    <i class="fa-solid fa-chevron-down"></i>

                  </div>
                </div>
                <div className="pay-bottom4">
                  <div className="pay-name">Date</div>
                  <div className="pay-input">
                    <input type="text" placeholder="Select your date" />
                    <i class="fa-solid fa-chevron-down"></i>



                  </div>
                </div>
              </div>
            </div>

            <div className="cudropoff">

              <div className="pay-pickup">Drop - Off</div>

              <div className="pay-bottom">
                <div className="pay-bottom3">

                  <div className="pay-name">Locations</div>
                  <div className="pay-input">
                    <input className="nut" type="text" placeholder="Select your city" />
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>


                  <div className="pay-name">Time</div>
                  <div className="pay-input">
                    <input type="text" placeholder="Select your time" />
                    <i class="fa-solid fa-chevron-down"></i>

                  </div>
                </div>
                <div className="pay-bottom4">
                  <div className="pay-name">Date</div>
                  <div className="pay-input">
                    <input type="text" placeholder="Select your date" />
                    <i class="fa-solid fa-chevron-down"></i>



                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="payment-content">
            <div className="pay-top">
              <div className="Pay-left1">
                <div className="pay-title">Payment Method</div>
                <p>Please enter your payment method</p>
              </div>
              <div className="pay-left2">
                <p>Step 3 of 4</p>
              </div>
            </div>

            <div className="pay-bottom">
              <div className="cre-card">
                <div className="crea-card">
                  <b>Creadit Card</b>
                  <img src={Visa} alt="" />
                </div>

                <div className="cre-in">
                  <div className="pay-bottom5">
                    <div className="pay-name">Card Number</div>
                    <input type="text" placeholder="Card number" />

                    <div className="pay-name">Card Holder</div>
                    <input type="text" placeholder="Card holder" />
                  </div>
                  <div className="pay-bottom6">
                    <div className="pay-name">Expration Date</div>
                    <input type="text" placeholder="DD/MM/YY" />

                    <div className="pay-name">CVC</div>
                    <input type="text" placeholder="CVC" />

                  </div>
                </div>
                <div className="paypal">
                  <div className="paypal-left">
                    <input type="radio" />
                    <b> PayPal</b>
                  </div>
                  <img src={Paypal} alt="" />
                </div>
                <div className="bitcoin">
                  <div className="bitcoin-left">

                    <input type="radio" />
                    <b>Bitcoin</b>
                  </div>
                  <img src={Bitcoin} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="payment-content">
            <div className="pay-top">
              <div className="Pay-left1">
                <div className="pay-title">Confirmation </div>
                <p>We are getting to the end. Just fews clicks and your rental is ready! </p>
              </div>
              <div className="pay-left2">
                <p>Step 4 of 4</p>
              </div>
            </div>
            <div className="confi1">
              <input type="checkbox" />
              <b> I agree with sending an Marketing and newsletter emails. No spam, promissed!</b>
            </div>
            <div className="confi2">
              <input type="checkbox" />
              <b> I agree with sending an Marketing and newsletter emails.</b>
            </div>
            <div className="cre-butoon">
              <button className="pro-button">Rent Now</button>
            </div>
            <div className="img-vsat">

              <img src={Visat} alt="" />
            </div>
            <div className="cre-end">

              <b>All your data are safe</b>
              <p>We are using the most advaned security to provide your the best expensive ever.  </p>
            </div>


          </div>



        </div>

        <div className="pay-right">
          <div className="pay-righttop">
            <div className="pay-title">Rental Summary</div>
            <p>Please select your rental date please select your rental date please select your rental date please select your rental date. </p>
          </div>

          <div className="right-second">
            <div className="img-crecar">
              <img src={Carr} alt="" />
            </div>
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

          </div>

          <div className="right-line"></div>

          <div className="boc2right">
            <div className="right-nay">
              <p>Subtotal</p>
              <p>Tax</p>
            </div>
            <div className="right-kia">
              <p>$80.00</p>
              <p>$0</p>
            </div>
          </div>

          <div className="input-rightt">
          <div className="input-input">
            <input  type="text" placeholder="Apply promo code" />
            <b>Apply now</b>
          </div>
          </div>

          <div className="right-end">
            <div className="end-left">
              <div className="end-title">Total Rental Price </div>
              <p>Oven price and oven discode cost</p>

            </div>
            <div className="end-right">
              <p>$80.00</p>

            </div>
          </div>


        </div>
      </div>
      <Footer/>
    </div>
  )
}
