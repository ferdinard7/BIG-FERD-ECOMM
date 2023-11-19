import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Footer() {
    return (
    <div className="footer">
        <div className="footer-left">
           <h1 className="footer-logo">Big_Ferd</h1>
           <p className="footer-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
           don't look even slightly believable</p>
           <div className="social-container">
              <div className="social-icon" style={{backgroundColor: "#3B5999"}}>
              <FacebookIcon />
              </div>
              <div className="social-icon" style={{backgroundColor: "#E4405F"}}>
              <InstagramIcon />
              </div>
              <div className="social-icon"  style={{backgroundColor: "#55ACEE"}}>
              <TwitterIcon />
              </div>
              <div className="social-icon"  style={{backgroundColor: "#E60023"}}>
              <PinterestIcon />
              </div>
           </div>
        </div>
        <div className="footer-center">
             <h3 className="footer-center-title">Useful Links</h3>
             <ul className="footer-center-list">
             <li className="list-item">Home</li>
             <li className="list-item">Cart</li>
             <li className="list-item">Man Fashion</li>
             <li className="list-item">Woman Fashion</li>
             <li className="list-item">Accessories</li>
             <li className="list-item">My Account</li>
             <li className="list-item">Order Tracking</li>
             <li className="list-item">WishList</li>
             <li className="list-item">Terms</li>            

             </ul>
        </div>
        <div className="footer-right">
        <h3 className="footer-center-title">Contact</h3>
        <div className="contact-item">
        <RoomIcon style={{marginRight: "10px"}}/>
          622 Dixie Path, South Tobinchester 98336
        </div>
        <div className="contact-item">
        <PhoneIcon style={{marginRight: "10px"}}/>
          +234 9156218746
      </div>
        <div className="contact-item">
        <MailOutlineIcon style={{marginRight: "10px"}}/>
          contact@Big_Ferd.dev
        </div>
        <img className="payment" src="../images/payment.png" alt="payment-pic" />
        </div>
    </div>
    )
}


export default Footer;