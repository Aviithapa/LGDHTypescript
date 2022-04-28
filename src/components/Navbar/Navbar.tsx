import React from "react";
import Logo from "../../logo.svg";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export const Navbar: React.FC  =  () => {
  const location = useLocation();
  return (
    <div className="container-navbar">
      <div className="container-navbar__left">
        <h2 className="container-navbar__logo">
          <img src={Logo} className="container-navbar__applogo" alt="logo" />
        </h2>
      </div>
      <div className="container-navbar__center">
        <div className="main-menu">
          <div className="main-menu__item">
            <Link
              className={location.pathname.includes("/") ? "active" : ""}
              to={`/`}
            >
              <button>
                <span>Home</span>
              </button>
            </Link>
          </div>
          <div className="main-menu__item active">
            <Link
              className={location.pathname.includes("/support") ? "active" : ""}
              to={`/support`}
            >
              <button>
                <span>Support</span>
              </button>
            </Link>
          </div>
          <div className="main-menu__item">
            <Link
              className={location.pathname.includes("/contact") ? "active" : ""}
              to={`/contact`}
            >
              <button>
                <span>Contact</span>
              </button>
            </Link>
          </div>
          <div className="main-menu__item">
            <Link
              className={location.pathname.includes("/map") ? "active" : ""}
              to={`/map`}
            >
              <button>
                <span>Map</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-navbar__right">
        <div className="container-navbar__item">
          <form>
            <input
              type="text"
              placeholder="search"
              className="search"
              name="search"
              id="search"
            ></input>
          </form>
        </div>
        <div className="container-navbar__item">
          <button className="container-navbar__SignupButton">Signup  </button>
        </div>
      </div>
    </div>
  );
};
