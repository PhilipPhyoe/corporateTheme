import { faSmog, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Logo.css";

const Logo = () => {
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
        className="main-logo"
      />
    </div>
  );
};

export default Logo;
