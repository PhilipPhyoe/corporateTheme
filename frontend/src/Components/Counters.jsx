import Counter from "./Counter";
import "../assets/Counters.css";

const Counters = () => {
  return (
    <div className="counters">
      <Counter start="0" end="300" multiply="K" counterTitle="Trips" />
      <Counter start="0" end="250" counterTitle="Vehicles" />
      <Counter start="250" end="650" counterTitle="Passengers" />
      <Counter start="10" end="310" counterTitle="Employees" />
    </div>
  );
};

export default Counters;
