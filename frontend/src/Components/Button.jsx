import { Link } from "react-router-dom";
import "../assets/Button.css";

const Button = () => {
  return (
    <div>
      <Link to="/contact">
        <p className="button">Get Vehicles Now</p>
      </Link>
    </div>
  );
};

export default Button;
