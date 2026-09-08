import React from "react";
import { Logo } from "../../common/common-import-images";
const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="overlay">
          <div className="container">
            <div className="row d-flex header-area">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                  <img src={Logo} className="logo" alt="logo" />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-content"
                >
                  <i className="fas fa-bars" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbar-content"
                >
                  {/* Nav item Home */}
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="Plans">
                        Plans
                      </a>
                    </li>
                    <li className="nav-item dropdown main-navbar">
                      <a className="nav-link dropdown-toggle" href="">
                        Our Clients
                      </a>
                      <ul className="dropdown-menu main-menu shadow show">
                        <li>
                          <a
                            className="nav-link"
                            id="NavOld_People"
                            href="Old_People"
                          >
                            Old People
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavSingle_Moms"
                            href="Single_Moms"
                          >
                            Single Moms
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavBusy_People"
                            href="Busy_People"
                          >
                            Busy People
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavWorking_Women"
                            href="Working_Women"
                          >
                            Working Women
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavBusinessman"
                            href="Businessman"
                          >
                            Businessman
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavEducational_Institutes"
                            href="Educational_Institutes"
                          >
                            Educational Institutes
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavOffices"
                            href="Offices"
                          >
                            Offices
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavDisable_People"
                            href="Disable_People"
                          >
                            Disable People
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            id="NavHomemaker"
                            href="Homemaker"
                          >
                            Homemaker
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="NavContactUS" href="Contact">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  {/* @if (session('user'))  
         <div className="right-area header-action d-flex align-items-center">
           <a href="Dashboard" className="cmn-btn">Goto Dashboard</a>
         </div> */}
                  <div
                    style={{ background: "transparent" }}
                    className="right-area header-action d-flex align-items-center"
                  >
                  </div>
                  <div className="right-area header-action d-flex align-items-center">
                    <a href="/login" className="cmn-btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
