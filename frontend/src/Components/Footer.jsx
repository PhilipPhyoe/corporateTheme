import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import "../assets/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src="/images/main logo.png" className="footer-logo" />
      </div>
      <div className="address">
        <h2 className="footer-company">Hector Myanmar Group</h2>
        <div className="street">
          <FontAwesomeIcon icon={faLocationArrow} className="icon1" />
          <p>
            No.920/921, Bayint Naung road, 43 ward, <br />
            North Dagon Township, Yangon., Yangon, Myanmar
          </p>
        </div>
        <div className="footer-email">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon2" />
          <p>info@hectormyanmar.com</p>
        </div>
        <Info />
      </div>
    </div>
  );
};

export default Footer;
