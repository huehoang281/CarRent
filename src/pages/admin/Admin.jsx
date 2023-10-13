import React, { useContext } from 'react';
import "./admin.css"
import Header from '../../components/header/Header';
import Moon from "../../images/moon.png";
import Sun from "../../images/sun.png"
import { ThemeContext } from '../../context';
import Carr from "../../images/car.png";
import Chart from "../../images/Chart.png"
import Cham1 from "../../images/cham1.png"
import Cham2 from "../../images/cham2.png"
import Cham3 from "../../images/cham3.png"
import Cham4 from "../../images/cham4.png"
import Cham5 from "../../images/cham6.png"
import Part1 from "../../images/part1.png"
import Part2 from "../../images/part2.png"
import Part3 from "../../images/part3.png"
import Part4 from "../../images/part4.png"






export default function Admin() {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }

  return (
    <div>
      <Header />
      <div className="admin content1">
        <div className="admin1">
          <p className="title-admin" >MAIN MENU</p>
          <div className="left-tren">
            <div className="admin-icon">
              <i className="fa-solid fa-house "></i>
              <p >Dashboard</p>
            </div>

            <div className="admin-icon">
              <i className="fa-solid fa-car  "></i>
              <p >Car Rent</p>
            </div>

            <div className="admin-icon">
              <i className="fa-solid fa-chart-simple "></i>
              <p >Insight</p>
            </div>
            <div className="admin-icon ">
              <i className="fa-solid fa-wallet "></i>
              <p >Reimburse</p>
            </div>

            <div className="admin-icon ">
              <i className="fa-solid fa-message"></i>
              <p >Inbox</p>
            </div>

            <div className="admin-icon ">
              <i className="fa-solid fa-calendar-days"></i>
              <p >Calender</p>
            </div>
          </div>

          <p className=" title-admin">PREFERENCES</p>
          <div className="left-under ">
            <div className="admin-icon  ">
              <i className="fa-solid fa-gear"></i>
              <p >Settings</p>
            </div>

            <div className="admin-icon ">
              <i className="fa-solid fa-circle-exclamation "></i>
              <p >Help & Center</p>
            </div>

            <div className="admin-icon ">
              <i className="fa-solid fa-briefcase"></i>
              <p >Dark Mode</p>
              <div className='t'>
                <img src={Sun} className="t-icon" alt="" />
                <img src={Moon} className="t-icon" alt="" />
                <div className="t-button" onClick={handleClick}
                  style={{ left: theme.state.darkMode ? 0 : 25 }}> </div>
              </div>


            </div>

          </div>
          <div className="left-logout">
            <i className="fa-solid fa-right-from-bracket"></i>
            <p >LogOut</p>
          </div>


        </div>
        <div className=" admin2">
          <div className="inside1 ">
            <div className="inside-title">Details Rental</div>

            <iframe className="inside-mapp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.5765183822955!2d108.21712907571381!3d16.035545684639104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ec03e53a89%3A0xea1f801c23e4582b!2zNDggSOG7kyBCaeG7g3UgQ2jDoW5oLCBIb8OgIEPGsOG7nW5nIE5hbSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1694602392459!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className="inside2">
              <div className="right-second">
                <div className="img-inside">
                  <img src={Carr} alt="" />
                </div>
                <div className="top-left">
                  <h1> Nissan GT-R</h1>
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
              <p>#9761</p>
            </div>
            <div className="inside3">

              <div className="inside3-left">
                <button className="inside3-button"></button>
                <b className="inside3-title"> Pick-Up</b>
              </div>

              <div className="inside3-category">

                <div className="inside3-colum">
                  <div className="inside3-lo">Locations</div>
                  <div className="inside3-select">
                    <p> Kota Semarang </p>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>


                <div className="inside3-colum">

                  <div className="inside3-lo">Date</div>
                  <div className="inside3-select">

                    <p> 20 July 2022</p>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>

                <div className="inside3-colum">

                  <div className="inside3-lo">Time</div>
                  <div className="inside3-select">

                    <p> 07.00</p>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>





              </div>
            </div>

            <div className="inside3">

              <div className="inside3-left2">
                <button className="inside3-button"></button>
                <b className="inside3-title"> Drop-off</b>
              </div>

              <div className="inside3-category">

                <div className="inside3-colum">
                  <div className="inside3-lo">Locations</div>
                  <div className="inside3-select">
                    <p> Kota Semarang </p>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>


                <div className="inside3-colum">

                  <div className="inside3-lo">Date</div>
                  <div className="inside3-select">

                    <p> 21 July 2022</p>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>

                <div className="inside3-colum">

                  <div className="inside3-lo">Time</div>
                  <div className="inside3-select">

                    <p> 01.00</p>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>





              </div>
            </div>
            <div className="inside-line"></div>
            <div className="inside-rightbottom">
              <div className="bottom-left">
                <div className="inside-title">Total Rental Price </div>
                <p>Oven price and oven discode cost</p>

              </div>
              <div className="inside-right ">
                <p>$80.00</p>

              </div>
            </div>


          </div>
        </div>
        <div className=" admin3">

          <div className="admin-over">

            <div className="admin3-top">
              <div className="admin3-topover">
                <div className="topover-title">Top 5 Car Rental</div>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>

            <div className="admin3-top2">

              <div className="div-left">
                <div className="admin3-chart">
                  <img src={Chart} alt="" />
                  <div className="circle-text">
                    <b>72,030</b>
                    <p>Rental Car</p>
                  </div>
                </div>
              </div>

              <div className="div-right">

                <div className="sport-car">
                  <div className="sportcar-left">
                    <img src={Cham1} alt="" />
                    <p>Sport Car</p>
                  </div>
                  <div className="sportcar-right">17,439</div>
                </div>

                <div className="sport-car">


                  <div className="sportcar-left">
                    <img src={Cham2} alt="" />
                    <p>SUV</p>
                  </div>
                  <div className="sportcar-right">9,459</div>
                </div>

                <div className="sport-car">


                  <div className="sportcar-left">
                    <img src={Cham3} alt="" />
                    <p>Coupe</p>
                  </div>
                  <div className="sportcar-right">12,577</div>
                </div>

                <div className="sport-car">


                  <div className="sportcar-left">
                    <img src={Cham4} alt="" />
                    <p>Hatchback</p>
                  </div>
                  <div className="sportcar-right">14,413</div>
                </div>

                <div className="sport-car">


                  <div className="sportcar-left">
                    <img src={Cham5} alt="" />
                    <p>MPV</p>
                  </div>
                  <div className="sportcar-right">10,132</div>
                </div>
              </div>

            </div>
            <div className="under">
              {/* top */}
              <div className="under-top">
                <div className="topover-title">Recent Transaction</div>
                <p>View All </p>
              </div>
              {/* thanh phan 1 */}
              <div className="part1">
                <div className="part1-left">
                  <img src={Part1} alt="" />
                  <div className="part1-title">
                    <h4>Nissan GT-R</h4>
                    <p>Sport Car</p>
                  </div>
                </div>
                <div className="part1-day">
                  <p>20 July</p>
                  <h4>$80.00</h4>
                </div>
              </div>
              <div className="part-line"></div>
              {/* thanh phan 2 */}
              <div className="part1">
                <div className="part1-left">
                  <img src={Part2} alt="" />
                  <div className="part1-title">
                    <h4>HungRyKany</h4>
                    <p>Sport Car</p>
                  </div>
                </div>
                <div className="part1-day">
                  <p>22 July</p>
                  <h4>$54.00</h4>
                </div>
              </div>
              <div className="part-line"></div>
              {/* thanh phan 3 */}
              <div className="part1">
                <div className="part1-left">
                  <img src={Part3} alt="" />
                  <div className="part1-title">
                    <h4>Rolls-Royce</h4>
                    <p>Sport Car</p>

                  </div>
                </div>
                <div className="part1-day">
                  <p>24 July</p>
                  <h4>$67.00</h4>
                </div>
              </div>
              <div className="part-line"></div>
              {/* thanh phan 4 */}
              <div className="part1">
                <div className="part1-left">
                  <img src={Part4} alt="" />
                  <div className="part1-title">
                    <h4>CR-V</h4>
                    <p>SUV</p>
                  </div>
                </div>
                <div className="part1-day">
                  <p>29 July</p>
                  <h4>$90.00</h4>
                </div>
              </div>


            </div>


          </div>
        </div>
      </div>



    </div>
  )
}
