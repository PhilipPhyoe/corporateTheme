import { faSmog, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Logo.css";
import { useEffect, useState } from "react";

const Logo = () => {
  const [logoClass, setLogoClass] = useState("main-logo");
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY) {
        setLogoClass("scroll-logo");
      } else {
        setLogoClass("main-logo");
      }
    };
  }, []);
  return (
    <div className="logo">
      <div
        style={{ display: "flex", alignItems: "center", columnGap: "0.6rem" }}
      >
        <FontAwesomeIcon icon={faSmog} className="left-icon1" />
        <FontAwesomeIcon icon={faTruckMoving} className="left-icon2" />
      </div>

      <img
        src="/images/text.png"
        alt="Hector Myanmar - Car Rental"
        className={logoClass}
      />
    </div>
  );
};

export default Logo;
