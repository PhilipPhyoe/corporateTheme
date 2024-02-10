import { faBolt, faHeart, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Sales from "../Components/Sales";
import "../assets/Valueadded.css";
const Services = () => {
  return (
    <div>
      <Hero
        headline="Integrated"
        pitch="Risk-free"
        follow="Motor Services"
        second="We value both customers and vehicles"
        second2="with regular repair schedule."
        image="/images/workshop.jpg"
      />
      <div className="value-added-service">
        <h2 className="value-added-title">Our Value Added Services</h2>
        <div className="value-added">
          <div className="value-container">
            <img src="/images/drugtest.png" className="value-img" />
            <p className="value-text">Drug Test</p>
          </div>
          <div className="value-container">
            <img src="/images/gps.png" className="value-img" />
            <p className="value-text">Tracking</p>
          </div>
          <div className="value-container">
            <img src="/images/roadtest.png" className="value-img" />
            <p className="value-text">Regulation</p>
          </div>
        </div>
      </div>
      <div className="workshop">
        <div className="repair">
          <h2 className="repair-title">Integrated Services</h2>
          <ul className="service-list">
            <li className="service-item">Periodical Maintenance</li>
            <li className="service-item">Troubleshooting</li>
            <li className="service-item">Body and Paint Service</li>
            <li className="service-item">Suspension Repair</li>
            <li className="service-item">Overhaul Services</li>
          </ul>
        </div>
        <div className="repair-photo">
          <div className="img-container">
            <img className="repair-img" src="/images/hectorworkshop.jpg" />
          </div>
        </div>
      </div>
      <Features
        header="Accountable Rental Services"
        lowerThird1="We aim to serve with empathy and sympathy"
        lowerThird2="to ensure safety and security for all passengers."
        icon1={faHeart}
        icon2={faBolt}
        icon3={faUmbrella}
        card1="Accountability"
        card2="Agility"
        card3="Flexibility"
        text1="We take ownership for any problem within contract period."
        text2="We move faster than our competitors in emergencies."
        text3="We design scalable packages for all ranges of clients."
        toLink="/contact"
      />
      <Sales pitch="Companies who trust our services." />
    </div>
  );
};

export default Services;
