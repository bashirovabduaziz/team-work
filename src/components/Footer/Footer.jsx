import React from 'react';
import './Footer.css'; // Make sure to adjust the path based on your project structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <img src="./img/shape-17-1.svg" alt="" />
              <p></p>
              <p>hello@skillbridge.com</p>
              <p>+91 91813 23 2309</p>
              <p>Somewhere in the World</p>
              <div className="card-area">
                <i className="fa fa-cc-visa"></i>
                <i className="fa fa-credit-card"></i>
                <i className="fa fa-cc-mastercard"></i>
                <i className="fa fa-cc-paypal"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h2>Home</h2>
              <ul>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">Our Courses</a></li>
                <li><a href="#">WordPress Hosting</a></li>
                <li><a href="#">Our Testimonials</a></li>
                <li><a href="#">Our FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h2>About Us</h2>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Achievements</a></li>
                <li><a href="#">Our Goals</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h2>Newsletter</h2>
              <div className="input-group-mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Enter your Email ..." aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"><i className="fa fa-long-arrow-right"></i></span>
              </div>
              <h2>Follow us on</h2>
              <p className="socials">
                <i className="fa-fa-facebook"></i>
                <i className="fa-fa-dribbble"></i>
                <i className="fa-fa-pinterest"></i>
                <i className="fa-fa-twitter"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;