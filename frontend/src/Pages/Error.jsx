import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Oh no! Your link is wrong.</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default Error;
