import React from 'react';
import"./footer.css"

export default function Footer() {
  return (
    <div className="big-footer content">

    <div className="footer">
        <div className="footer-left">
            <div className="left-title">morent</div>
            <p className="left-p">Our vision is to provide convenience and help increase your sales business. </p>

        </div>

        <div className="footer-right">
            <div className="right1">
            <div className="right-title"> About
        </div>
            <div className="right-p">
                <p>How it works</p>
                <p>Featured</p>
                <p>Partnership</p>
                <p>Bussiness Relation</p>
                
            </div>
            </div>
                
            <div className="right1">
            <div className="right-title"> Community
            </div>
            <div className="right-p">
            <p>Events</p>
                <p>Blog</p>
                <p>Podcast</p>
                <p>Invite a friend</p>
            </div>
            </div>

            <div className="right1">
            <div className="right-title"> Socials
            </div>
            <div className="right-p">
                <p>Discord</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
            </div>
            </div>
     </div>
    </div>

    <div className="footer-line"></div>

    <div className="end-footer">
        <div className="end-left">
            2022MORENT.ALL rights reserved
        </div>
        <div className="end-right">
            
                <b> Privacy & Policy</b>
                <b> Terms & Condition</b>
            
        </div>
    </div>


        </div>
  )
}
