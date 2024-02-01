import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Marketing.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const Marketing = () => {
  return (
    <div className="marketing">
      <div className="image">
        <img src="/images/homecar2.png" className="home-image" />
        <div className="img-icon1">
          <FontAwesomeIcon icon={faLocationDot} className="mark-icon1" />
        </div>
        <div className="img-icon1">
          <FontAwesomeIcon icon={faLocationDot} className="mark-icon2" />
        </div>
        <div className="img-icon1">
          <FontAwesomeIcon icon={faLocationDot} className="mark-icon3" />
        </div>
        <div className="img-icon1">
          <FontAwesomeIcon icon={faLocationDot} className="mark-icon4" />
        </div>
        <div className="img-icon1">
          <FontAwesomeIcon icon={faLocationDot} className="mark-icon5" />
        </div>
      </div>
      <div className="message">
        <h2 className="message-title">Trusted Experience</h2>
        <p className="message-text">
          Our team has a wealth of experience in logistics, business travel, and
          office routines. We use advanced technologies such as mobile tracking
          system to keep our customers safe and secured. We always emphasize to
          be on time and budget limitations.
        </p>
        <Button link="/services" text="Book Us Now" />
      </div>
    </div>
  );
};

export default Marketing;
