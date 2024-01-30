import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Info.css";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="info">
      <Link to="https://www.facebook.com/profile.php?id=100063921074901">
        <FontAwesomeIcon icon={faSquareFacebook} className="facebook" />
      </Link>

      <p className="fa-address">
        Hector Myanmar <br /> Facebook Page
      </p>
    </div>
  );
};

export default Info;
