import Counter from "./Counter";
import "../assets/Counters.css";

const Counters = () => {
  return (
    <div className="counters">
      <Counter start="0" end="50" />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default Counters;
