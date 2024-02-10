import { Link } from "react-router-dom";
import "../assets/Error.css";
const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">Oh no! Your link is wrong.</h1>
      <Link to="/">
        <p className="error-text">
          You can go back to the home page by clicking here, though!
        </p>
      </Link>
    </div>
  );
};

export default Error;
