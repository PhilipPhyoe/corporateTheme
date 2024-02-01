import { Link } from "react-router-dom";
import "../assets/Button.css";

const Button = ({ link, text }) => {
  return (
    <div>
      <Link to={link}>
        <p className="button">{text}</p>
      </Link>
    </div>
  );
};

export default Button;
