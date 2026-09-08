import React from "react";
// import "../../assets/css/style.css";
import CheckImage from "../../../assets/images/icon/check.png";
import PlanLogo from "../../../assets/images/plan-logo.png";

const Plans = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">My Plan</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">My Plan</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="overlay pt-10 solutions-business"
            style={{ background: "none" }}
          >
            <div className="container wow fadeInUp">
              <div className="row cus-mar">
                <div
                  className="col-lg-4 col-md-6"
                  style={{ marginBottom: "40px" }}
                >
                  <div className="single-box text-center">
                    <div className="thumb d-flex justify-content-center align-items-center">
                      <img src={PlanLogo} alt="checking" />
                    </div>
                    <div className="content">
                      <h5>title Plan</h5>
                      <p>category</p>
                      <ul className="list checkmark">
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img src={CheckImage} alt="icon" />
                          </span>
                          <span>feature</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img src={CheckImage} alt="icon" />
                          </span>
                          <span>feature</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img src={CheckImage} alt="icon" />
                          </span>
                          <span>feature</span>
                        </li>
                        hea
                      </ul>
                      <br />
                      <h4>Rs price period </h4>
                      <span>Billed Anually</span>
                      <p>Expiry Date : 2022-14-12</p>
                      <a className="cmn-btn">Current Plan</a>
                      {/* <a
                        className="cmn-btn second"
                        style={{ cursor: "pointer" }}
                        href="/My_Plan/{{ $Plan->title }}"
                      >
                        Choose Plan
                      </a>

                      <a
                        className="cmn-btn second"
                        style={{ cursor: "pointer" }}
                        href=""
                      >
                        Switch Plan
                      </a> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6"
                  style={{ marginBottom: "40px" }}
                >
                  <div className="single-box text-center">
                    <div className="thumb d-flex justify-content-center align-items-center">
                      <img src={PlanLogo} alt="checking" />
                    </div>
                    <div className="content">
                      <h5>title Plan</h5>
                      <p>category</p>
                      <ul className="list checkmark">
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img src={CheckImage} alt="icon" />
                          </span>
                          <span>feature</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img src={CheckImage} alt="icon" />
                          </span>
                          <span>feature</span>
                        </li>
                        <li className="list-item d-flex align-items-center">
                          <span className="check d-flex align-items-center justify-content-center">
                            <img src={CheckImage} alt="icon" />
                          </span>
                          <span>feature</span>
                        </li>
                        hea
                      </ul>
                      <br />
                      <h4>Rs price period </h4>
                      <span>Billed Anually</span>
                      <p>Expiry Date : 2022-14-12</p>
                      <a className="cmn-btn">Current Plan</a>
                      {/* <a
                        className="cmn-btn second"
                        style={{ cursor: "pointer" }}
                        href="/My_Plan/{{ $Plan->title }}"
                      >
                        Choose Plan
                      </a>

                      <a
                        className="cmn-btn second"
                        style={{ cursor: "pointer" }}
                        href=""
                      >
                        Switch Plan
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
