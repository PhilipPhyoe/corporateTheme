import Hero from "../Components/Hero";
import Features from "../Components/Features";
import {
  faFlag,
  faHandshake,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <Hero
        headline="Carefree"
        pitch="Transportation"
        follow="Quality Services"
        second="We grow with your satisfaction."
        second2="Fully responsible for your staff."
        image="/images/hero2.jpg"
      />
      <Features
        header="We grow with sustainability."
        lowerThird1="We value honesty and transparency as core values"
        lowerThird2="to serve all stakeholders with quality."
        icon1={faStreetView}
        icon2={faFlag}
        icon3={faHandshake}
        card1="Leadership"
        card2="Commitment"
        card3="Integrity"
        text1="We provide salary plus benefits and training for local drivers."
        text2="We never compromise quality for affordability and flexibility."
        text3="We follow rules and regulations to avoid frauds and corruptions."
      />
    </div>
  );
};

export default About;
