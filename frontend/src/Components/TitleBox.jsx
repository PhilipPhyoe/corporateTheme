import "../assets/TitleBox.css";
const TitleBox = ({ text }) => {
  return (
    <div className="title-box">
      <p className="title-text">{text}</p>
    </div>
  );
};

export default TitleBox;
