import React from "react";
import { Logo } from "../../common/common-import-images";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        {/* @if (Request::path() == 'SignUP' || Request::path() == 'Profile')
<div className="container pt-20">*/}
        <div className="container pt-120">
          <div className="row cus-mar pt-120 pb-5 justify-content-between wow fadeInUp">
            <div className="col-xl-3 col-lg-3 col-md-4 col-6">
              <div className="footer-box">
                <a href="/" className="logo">
                  <img src={Logo} alt="logo" />
                </a>
                <p>
                  Pay your electricity, gas, water, internet and other bills
                  through PayBill
                </p>
                <div className="social-link d-flex align-items-center">
                  <a href="https://web.facebook.com/Paybill-106950945149017?_rdc=1&_rdr">
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="footer-box">
                <h5>Our Plans</h5>
                <ul className="footer-link">
                  <li>
                    <a href="Plans">Normal Plan</a>
                  </li>
                  <li>
                    <a href="Plans">Executive Plan</a>
                  </li>
                  <li>
                    <a href="Plans">Business Plan</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-6">
              <div className="footer-box">
                <h5>Get in touch</h5>
                <ul className="footer-link">
                  <li>
                    <a href="mailto:support@paybill.pk">
                      <b>Mail: </b>support@paybill.pk
                    </a>
                  </li>
                  <li>
                    <a href="tel:923213815818">
                      <b>Phone: </b>+92 3213815818
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-8">
              <div className="footer-box">
                <h5>Subscribe</h5>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Enter Your Email address" />
                    <button className="cmn-btn">Subscribe</button>
                  </div>
                </form>
                <p>
                  Get the latest updates via email. Any time you may unsubscribe
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom">
                <div className="left">
                  <p>Copyright © PayBill | All rights reserved.</p> <p />
                </div>
                <div className="right">
                  <a href="Privacy-Policy" className="cus-bor">
                    Privacy Policy
                  </a>
                  <a href="Terms-Conditions">Terms &amp; Condition </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
