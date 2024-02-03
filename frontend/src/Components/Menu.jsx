import { NavLink } from "react-router-dom";
import "../assets/Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Menu = () => {
  const [mobile, setMobile] = useState(false);
  const showMobileMenu = () => {
    setMobile(!mobile);
  };
  return (
    <div>
      <div className="menu-bar">
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          Contact Us
        </NavLink>
      </div>
      <div className="small-menu">
        <FontAwesomeIcon icon={faBars} onClick={showMobileMenu} />
      </div>
      <div
        className={`mobile-menu ${mobile ? "show" : ""}`}
        onClick={showMobileMenu}
      >
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={(navData) => (navData.isActive ? "active" : "menu-item")}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
