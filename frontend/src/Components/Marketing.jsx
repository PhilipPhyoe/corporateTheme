import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Marketing.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const Marketing = ({ png, title, text }) => {
  return (
    <div className="marketing">
      <div className="image">
        <img src={png} className="home-image" />
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
        <h2 className="message-title">{title}</h2>
        <p className="message-text">{text}</p>
        <Button link="/services" text="Book Us Now" />
      </div>
    </div>
  );
};

export default Marketing;
