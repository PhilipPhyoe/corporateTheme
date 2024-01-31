import "../assets/Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Reliable <span style={{ color: "orange" }}>Corporate</span>
          <br />
          Rental Services
        </h1>
        <p className="hero-text">
          Our corporate car rental services ensure
          <br />
          safety, comfort and punctuality.
        </p>
        <Button cta="Get Vehicles Now" />
      </div>
    </div>
  );
};

export default Hero;
