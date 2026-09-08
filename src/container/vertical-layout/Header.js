import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import LogoPro from "../../assets/images/logo_org.png";
import ProfileDefaultImage from "../../assets/images/Default.png";
import { useNavigate } from "react-router-dom";

const Header = ({ setSlideNav, SlideNav }) => {
  const [toggleProfileMenu, settoggleProfileMenu] = useState(false);
  const navigate = useNavigate();
  const toggleProfileMenuHandler = () =>
    settoggleProfileMenu(!toggleProfileMenu);
  const toggleSidebar = (e) => {
    e.preventDefault();
    if (document.body.classList[0] == "mini-sidebar") {
      document.body.classList.remove("mini-sidebar");
    } else {
      document.body.classList.add("mini-sidebar");
    }
  };
  const slideNavHandler = () => setSlideNav(!SlideNav);

  const LogoutHnadler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header-left">
        <a href="/" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <a href="/" className="logo logo-small">
          <img src={LogoPro} alt="Logo" width={30} height={30} />
        </a>
      </div>
      <a href="" id="toggle_btn" onClick={toggleSidebar}>
        <i className="fas fa-bars" />
      </a>
      {/*?php $IsSeach = true; ?*/}
      <div className="top-nav-search">
        <form action="?" method="get">
          <input
            type="text"
            className="form-control DataSearch"
            placeholder="Search Record"
          />
          <a className="btn">
            <i className="fas fa-search" />
          </a>
        </form>
      </div>
      <a className="mobile_btn" id="mobile_btn" onClick={slideNavHandler}>
        <i className="fas fa-bars" />
      </a>
      <ul className="nav nav-tabs user-menu">
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className={
              toggleProfileMenu
                ? "dropdown-toggle nav-link show"
                : "dropdown-toggle nav-link"
            }
            data-bs-toggle="dropdown"
            onClick={toggleProfileMenuHandler}
          >
            <span className="user-img">
              <img src={ProfileDefaultImage} alt="" />
              <span className="status online" />
            </span>
            <span>03024476386</span>
          </a>
          <div
            className={
              toggleProfileMenu ? "dropdown-menu show" : "dropdown-menu"
            }
            style={{
              position: "absolute",
              inset: "0px 0px auto auto",
              margin: "0px",
              transform: "translate3d(1px, 62px, 0px)",
            }}
          >
            <a className="dropdown-item" href="Profile">
              <i data-feather="user" className="me-1" />
              Profile
            </a>
            {/* <a class="dropdown-item" href="#"><i data-feather="settings" class="me-1"></i>
     Settings</a> */}
            <a className="dropdown-item " href="" onClick={LogoutHnadler}>
              <i data-feather="log-out" className="me-1" />
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
