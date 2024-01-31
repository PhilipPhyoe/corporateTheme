import { Link, NavLink } from "react-router-dom";
import "../assets/Menu.css";

const Menu = () => {
  return (
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
  );
};

export default Menu;
