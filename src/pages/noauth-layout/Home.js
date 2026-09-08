import React, { useState, useEffect } from "react";
import {
  ContactBanner,
  FeatureItems,
  GetPersonalLoan,
  HowWorksBusiness,
  MoreFeatures1,
  MoreFeatures11,
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Personalized,
  Remittance1,
  Remittance11,
  Remittance3,
  Remittance33,
  Savings,
  Savings1,
} from "../../common/noauth-layout/image-imports";
import BannerButtons from "../../Components/Home/BannerButtons";
import { CheckTickImage } from "../../common/common-import-images";

const Home = () => {
  const [BannerCount, setBannerCount] = useState(1);

  useEffect(() => {
    const timer = () => {
      setBannerCount(BannerCount + 1);
    };

    // if you want it to finish at some point
    if (BannerCount >= 5) {
      setBannerCount(1);
    }
    const id = setInterval(timer, 5000);
    return () => clearInterval(id);
  }, [BannerCount]);
  return (
    <div>
      {/* banner-section start */}
      <section
        className="banner-section homeslider w3-animate-right"
        style={BannerCount == 1 ? {} : { display: "none" }}
      >
        <div className="overlay">
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <div className="top-area section-text justify-content-center">
                      <h5 className="sub-title">
                        Pay your all bills from one place. PayBill
                      </h5>
                      <h2 className="title">Introducing PayBill</h2>
                      <p className="xlr">
                        Pay your electricity, gas, water, internet and other
                        bills through PayBill.
                      </p>
                    </div>
                    {/*-------- banner buttons --------*/}
                    <BannerButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}
      {/* banner-section2 start */}
      <section
        className="banner-section homeslider w3-animate-right"
        style={BannerCount == 2 ? {} : { display: "none" }}
      >
        <div
          className="overlay"
          style={{ backgroundImage: "url(assets/images/blog-banner.png)" }}
        >
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <div className="top-area section-text justify-content-center">
                      {/* <h5 class="sub-title">Pay your all bills from one place. PayBill</h5> */}
                      <h2 className="title">Easy Transactions</h2>
                      <p className="xlr">
                        You can now accept payment transactions from client bank
                        accounts both domestically as well as internationally at
                        no additional cost or effort. To make an online payment,
                        your customers simply log in with their usual banking
                        credentials.
                      </p>
                    </div>
                    {/*-------- banner buttons --------*/}
                    <BannerButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}
      {/* banner-section3 start */}
      <section
        className="banner-section homeslider w3-animate-right"
        style={BannerCount == 3 ? {} : { display: "none" }}
      >
        <div
          className="overlay"
          style={{
            backgroundImage:
              "url(../../../..assets/images/about-home-loan-Illus.png)",
          }}
        >
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <div className="top-area section-text justify-content-center">
                      {/* <h5 class="sub-title">Pay your all bills from one place. PayBill</h5> */}
                      <h2 className="title">A Miracle for the Bills.</h2>
                      <p className="xlr">
                        All of your payments are at a glance and always current.
                        Pay Bill allows you to pay your water, electricity, gas,
                        internet, and other bills.
                      </p>
                    </div>
                    {/*-------- banner buttons --------*/}
                    <BannerButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}
      {/* banner-section4 start */}
      <section
        className="banner-section homeslider w3-animate-left"
        style={BannerCount == 4 ? {} : { display: "none" }}
      >
        <div
          className="overlay"
          style={{ backgroundImage: "url(assets/images/account-banner.png)" }}
        >
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7 col-md-10">
                  <div className="main-content">
                    <div className="top-area section-text justify-content-center">
                      {/* <h5 class="sub-title">Pay your all bills from one place. PayBill</h5> */}
                      <h3 className="title">Services for Senior Citizens</h3>
                      <p className="xlr">
                        People with disabilities or those who are older and need
                        help with budgeting and paying bills can use bill
                        payment services.
                      </p>
                    </div>
                    {/*-------- banner buttons --------*/}
                    <BannerButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner-section end */}
      {/* Partners Section */}
      <section className="banner-section">
        <div className="partner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-3">
                <h4>Partners</h4>
              </div>
              <div className="col-md-9 col-9">
                <div className="partner-box partner-carousel slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: "744px",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        style={{ width: "186px" }}
                      >
                        <div>
                          <div
                            className="single"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="item">
                              <img src={Partner2} alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        style={{ width: "186px" }}
                      >
                        <div>
                          <div
                            className="single"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="item">
                              <img src={Partner1} alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        style={{ width: "186px" }}
                      >
                        <div>
                          <div
                            className="single"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="item">
                              <img src={Partner3} alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={3}
                        aria-hidden="false"
                        style={{ width: "186px" }}
                      >
                        <div>
                          <div
                            className="single"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="item">
                              <img src={Partner4} alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partner Section End */}
      {/* Features In start */}
      <section className="features-section">
        <div className="overlay pt-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-section">
                  <h5 className="sub-title">How?</h5>
                  <h2 className="title">Can you assist me.</h2>
                  <p>
                    Keeping track of your finances is difficult! You only get
                    paid a few times per month, but you have bills due all the
                    time. PayBill combines all of your money, bills, and pay to
                    provide you with a complete picture. Pay your bills actively
                    on PayBill with complete confidence, and we'll do the rest!
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src={CheckTickImage} alt="icon" />
                      </span>
                      <span>Money Saving.</span>
                    </li>
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src={CheckTickImage} alt="icon" />
                      </span>
                      <span>Time Saving.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <div className="img-area">
                  <img src={FeatureItems} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features In end */}
      {/* Features In start */}
      <section className="features-section second">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 text-start cus-ord">
                <div className="img-area">
                  <img src={GetPersonalLoan} alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="top-section">
                  <h5 className="sub-title">How?</h5>
                  <h2 className="title">Does it function.</h2>
                  <p>
                    PayBill will ask you to select all of your billers. We will
                    integrate your financial accounts and bills and reveal them
                    to you straight in PayBill once you link them. You can then
                    pay your bills directly!
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src={CheckTickImage} alt="icon" />
                      </span>
                      <span>Notification Alert.</span>
                    </li>
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <img src={CheckTickImage} alt="icon" />
                      </span>
                      <span>Easy to use.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features In end */}
      {/* Personalized In start */}
      <section className="personalized">
        <div className="overlay">
          <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-6 col-xl-5 d-flex align-items-center justify-content-end">
                <div className="img-area">
                  <img src={Personalized} alt="image" />
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 pt-120 pb-120">
                <div className="section-text">
                  <h3 className="title">Our Plans</h3>
                  <p>
                    Here, we're presenting to you a variety of unique and
                    interesting options.
                  </p>
                </div>
                <a href="Plans" className="cmn-btn">
                  Our Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Personalized In end */}
      {/* Features In start */}
      <section className="features-section second">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-section">
                  <h5 className="sub-title">What?</h5>
                  <h2 className="title">is your name.</h2>
                  <p>
                    We are an enthusiastic team committed to assisting you in
                    staying on top of your finances, with a focus on
                    streamlining how you handle and pay your regular payments. A
                    business that believes that everyone should have direct
                    exposure to a payment system that makes tomorrow better than
                    today.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <div className="img-area">
                  <img src={HowWorksBusiness} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features In end */}
      {/* Features In start */}
      <section className="features-section second">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 text-start cus-ord">
                <div className="img-area">
                  <img src={ContactBanner} alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="top-section">
                  <h5 className="sub-title">How?</h5>
                  <h2 className="title">Can I contact you.</h2>
                  <p>
                    You can contact us directly via email at support@paybill.pk
                    or contact us via our{" "}
                    <a style={{ color: "blue" }} href="SignUP">
                      Contact Form
                    </a>
                    , or on Twitter or Facebook.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features In end */}
      <section className="call-action">
        <div className="overlay pt-120">
          <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="main-content">
                  <div className="section-header text-center">
                    <h2 className="title">
                      <span>How can we help you?</span>Our Features.
                    </h2>
                  </div>
                  <BannerButtons text="text-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="financial-planning">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-24 col-lg-24">
                <div className="row cus-mar">
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img src={Remittance3} alt="icon" className="active" />
                        <img src={Remittance33} alt="icon" className="alt" />
                      </div>
                      <a>
                        <h5>Time Saving</h5>
                      </a>
                      <p>
                        <br />
                        Why wait in long lines or be concerned about paying
                        bills when you can pay your utility bills immediately
                        and comfortably at PayBill?
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img
                          src={MoreFeatures1}
                          alt="icon"
                          className="active"
                        />
                        <img src={MoreFeatures11} alt="icon" className="alt" />
                      </div>
                      <a>
                        <h5>Reminder Notification</h5>
                      </a>
                      <p>
                        Our primary concern is to keep you from submitting bills
                        late. We reminded you of your bill submitting the cutoff
                        date just two days ago by introducing an additional
                        distinctive property to our software.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img src={Remittance1} alt="icon" className="active" />
                        <img src={Remittance11} alt="icon" className="alt" />
                      </div>
                      <a>
                        <h5>Bill Payment Service</h5>
                      </a>
                      <p>
                        Anyone can now pay their bills quickly and easily thanks
                        to the internet. You can save time and energy by using
                        internet bill pay customer support to establish a safe
                        account online that allows you to pay all of your
                        payments from one location. Not only that, but automatic
                        data payments or planned schedule reminders and
                        notifications can prevent you from getting late
                        payments.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <img src={Savings} alt="icon" className="active" />
                        <img src={Savings1} alt="icon" className="alt" />
                      </div>
                      <a>
                        <h5>Saving Plans</h5>
                      </a>
                      <p>
                        <br />
                        <br />
                        By helping you with particularly appropriate plans, we
                        are doing everything we can.
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
