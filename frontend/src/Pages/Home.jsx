import Counters from "../Components/Counters";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Marketing from "../Components/Marketing";
import Sales from "../Components/Sales";
import {
  faCarOn,
  faScrewdriverWrench,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div>
      <Hero
        headline="Reliable"
        pitch="Corporate"
        follow="Rental Services"
        second="Our corporate car rental services ensure"
        second2="safety, comfort and punctuality."
        image="/images/hero1.jpg"
      />
      <Sales pitch="2300+ staff enjoy their daily routines with our car rental service." />
      <Features
        header="Nationwide Transportation"
        lowerThird1="Hector Myanmar provides an integrated rental services to customers"
        lowerThird2="across various industries and locations."
        icon1={faCarOn}
        icon2={faScrewdriverWrench}
        icon3={faSuitcase}
        card1="Office Rental"
        card2="Vehicle Maintenance"
        card3="Business Travel"
        text1="We offer day-to-day rental operations in major cities for all staff."
        text2="We offer scheduled repair and troubleshooting solutions for all
            vehicles."
        text3="We offer transportation and accomodation services for business
            travellers."
      />
      <Marketing
        png="/images/homecar2.png"
        title="Trusted Experience"
        text="Our team has a wealth of experience in logistics, business travel, and
          office routines. We use advanced technologies such as mobile tracking
          system to keep our customers safe and secured. We always emphasize to
          be on time and budget limitations."
      />
      <Counters />
    </div>
  );
};

export default Home;
