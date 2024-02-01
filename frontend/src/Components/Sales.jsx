import "../assets/Sales.css";

const Sales = ({ pitch }) => {
  return (
    <div className="sales">
      <p className="pitch">{pitch}</p>
      <div className="client-logos">
        <img src="/images/mpt.png" className="logo-item" />
        <img src="/images/cb.png" className="logo-item" />
        <img src="/images/cdsg.png" className="logo-item" />
        <img src="/images/central.png" className="logo-item" />
        <img src="/images/daung.png" className="logo-item" />
        <img src="/images/wonder.png" className="logo-item" />
      </div>
    </div>
  );
};

export default Sales;
