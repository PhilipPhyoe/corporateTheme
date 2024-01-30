import { Link, NavLink } from "react-router-dom";
import "../assets/Menu.css";

const Menu = () => {
  return (
    <div className="menu-bar">
      <NavLink to="/" className="menu-item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="menu-item" activeClassName="active">
        About Us
      </NavLink>
      <NavLink to="/services" className="menu-item" activeClassName="active">
        Services
      </NavLink>
      <NavLink to="/contact" className="menu-item" activeClassName="active">
        Contact Us
      </NavLink>
    </div>
  );
};

export default Menu;
