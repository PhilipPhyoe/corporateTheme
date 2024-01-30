import Logo from "./Logo";
import "../assets/Nav.css";
import Menu from "./Menu";
import Info from "./Info";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="social">
        <Info />
      </div>
    </div>
  );
};

export default Nav;
