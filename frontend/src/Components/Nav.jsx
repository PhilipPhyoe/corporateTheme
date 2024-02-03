import Logo from "./Logo";
import "../assets/Nav.css";
import Menu from "./Menu";
import Info from "./Info";
import { useEffect, useState } from "react";

const Nav = () => {
  const [navBar, setNavBar] = useState("nav-bar");
  useEffect(() => {
    document.onscroll = () => {
      if (window.scrollY) {
        setNavBar("on-scroll");
        //console.log("scrolled");
      } else {
        setNavBar("nav-bar");
        //console.log("!scrolled");
      }
    };
  }, []);
  return (
    <div className={navBar}>
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
