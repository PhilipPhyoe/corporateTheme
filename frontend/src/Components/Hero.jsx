import "../assets/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">
        Reliable <span style={{ color: "var(--primary)" }}>Corporate</span>
        <br />
        Rental Services
      </h1>
      <p className="hero-text">
        Our corporate car rental services ensure
        <br />
        safety, comfort and punctuality.
      </p>
    </div>
  );
};

export default Hero;
