import Hero from "../Components/Hero";
import Sales from "../Components/Sales";

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
    </div>
  );
};

export default Home;
