import "../assets/Form.css";

const Form = () => {
  return (
    <div className="form">
      <h2 className="form-title">Get a quote</h2>
      <p className="form-text">Our team would love to hear from you.</p>
      <form className="contact-form">
        <div className="fullname">
          <div className="firstname">
            <label htmlFor="firstname">First Name</label>
            <input className="input" name="firstname" type="text" />
          </div>
          <div className="lastname">
            <label htmlFor="lastname">Last Name</label>
            <input className="input" name="lastname" type="text" />
          </div>
        </div>

        <label htmlFor="email">Email</label>
        <input className="input" name="email" type="email" />
        <label htmlFor="phone">Phone Number</label>
        <input className="input" name="phone" type="text" />
        <input className="form-btn" type="submit" value="Submit Now" />
      </form>
    </div>
  );
};

export default Form;
