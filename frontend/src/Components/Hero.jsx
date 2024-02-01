import "../assets/Hero.css";
import Button from "./Button";

const Hero = ({ headline, pitch, follow, second, second2, image }) => {
  return (
    <div className="hero">
      <img src={image} className="hero-img" />
      <div className="hero-content">
        <h1 className="hero-title">
          {headline} <span style={{ color: "orange" }}>{pitch}</span>
          <br />
          {follow}
        </h1>
        <p className="hero-text">
          {second}
          <br />
          {second2}
        </p>
        <Button text="Get Vehicles Now" link="/contact" />
      </div>
    </div>
  );
};

export default Hero;
