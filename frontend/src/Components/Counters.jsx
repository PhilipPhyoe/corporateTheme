import Counter from "./Counter";
import "../assets/Counters.css";
import TitleBox from "./TitleBox";

const Counters = () => {
  return (
    <div>
      <div className="counter-title">
        <TitleBox text="MILESTONES" />
      </div>
      <div className="counters">
        <Counter start="0" end="300" multiply="K" counterTitle="Trips" />
        <Counter start="0" end="250" counterTitle="Vehicles" />
        <Counter start="250" end="650" counterTitle="Passengers" />
        <Counter start="10" end="310" counterTitle="Employees" />
      </div>
    </div>
  );
};

export default Counters;
