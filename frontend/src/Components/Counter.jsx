import { faCarTunnel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Counter.css";
import { useEffect, useState } from "react";

const Counter = ({ start, end, multiply, counterTitle }) => {
  const [number, setNumber] = useState("0");
  const x = parseInt(start);
  const y = parseInt(end);
  useEffect(() => {
    var begin = x;
    const interval = 3000 / (y - x);
    setInterval(() => {
      if (begin < y) {
        begin += 1;
        setNumber(String(begin));
      } else {
        clearInterval();
      }
    }, Math.round(interval));
  }, [x, y]);

  return (
    <div className="counter">
      <p className="counter-text">
        {number}
        <span>{multiply}</span>
        <span>+</span>
      </p>
      <div className="highlight">
        <p className="counter-title">{counterTitle}</p>
      </div>
    </div>
  );
};

export default Counter;
