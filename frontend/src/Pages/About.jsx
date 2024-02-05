import Hero from "../Components/Hero";
import Features from "../Components/Features";
import {
  faFlag,
  faHandshake,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import Marketing from "../Components/Marketing";
import Sales from "../Components/Sales";

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
      <Marketing
        png="/images/bus.png"
        title="Reliable Comfort"
        text="We focus customer satisfaction while maintaing sustainable benefits for all stakeholders. We enhance travel experience of our customers bringing security, ease of use and flexibility. Safety is our first priority, emphasizing affordability as the same level."
      />
      <Sales pitch="Companies who trust our services." />
    </div>
  );
};

export default About;
