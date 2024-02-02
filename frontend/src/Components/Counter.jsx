import { faCarTunnel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Counter.css";
import { useEffect, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState("0");

  useEffect(() => {
    var start = 0;
    setInterval(() => {
      if (start < 50) {
        start += 1;
        setNumber(String(start));
      } else {
        clearInterval();
      }
    }, 50);
  }, []);

  return (
    <div className="counter">
      <p className="counter-text">{number}</p>
      <div className="highlight">
        <FontAwesomeIcon icon={faCarTunnel} className="counter-icon" />
        <p className="counter-title">Trips</p>
      </div>
    </div>
  );
};

export default Counter;
