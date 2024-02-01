import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Features.css";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Features = ({
  header,
  lowerThird1,
  lowerThird2,
  icon1,
  icon2,
  icon3,
  card1,
  card2,
  card3,
  text1,
  text2,
  text3,
}) => {
  return (
    <div className="features">
      <div className="title-box">
        <p className="title-text">SERVICES</p>
      </div>
      <div className="feature-header">
        <h2 className="header-text">{header}</h2>
        <p className="header-lower-third">
          {lowerThird1}
          <br />
          {lowerThird2}
        </p>
      </div>
      <div className="feature-cards">
        <div className="card-hover1">
          <div className="card1">
            <FontAwesomeIcon icon={icon1} className="card-icon" />
            <h4 className="card-title">{card1}</h4>
            <p className="card-text">{text1}</p>
          </div>
          <Link to="/services" className="link1">
            <p className="link-text">Learn More</p>
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </div>
        <div className="card-hover2">
          <div className="card2">
            <FontAwesomeIcon icon={icon2} className="card-icon" />
            <h4 className="card-title">{card2}</h4>
            <p className="card-text">{text2}</p>
          </div>
          <Link to="/services" className="link2">
            <p className="link-text">Learn More</p>
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </div>
        <div className="card-hover3">
          <div className="card3">
            <FontAwesomeIcon icon={icon3} className="card-icon" />
            <h4 className="card-title">{card3}</h4>
            <p className="card-text">{text3}</p>
          </div>
          <Link to="/services" className="link3">
            <p className="link-text">Learn More</p>
            <FontAwesomeIcon icon={faArrowRight} className="link-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
