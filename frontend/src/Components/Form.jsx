import "../assets/Form.css";

const Form = () => {
  return (
    <div className="form">
      <h2 className="form-title">Get a quote</h2>
      <p className="form-text">Our team would love to hear from you.</p>
      <form className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input className="input" name="name" type="text" />
        <label htmlFor="email">Your Email</label>
        <input className="input" name="email" type="email" />
        <label htmlFor="phone">Your Phone Number</label>
        <input className="input" name="phone" type="text" />
        <input type="submit" value="Submit Now" />
      </form>
    </div>
  );
};

export default Form;
