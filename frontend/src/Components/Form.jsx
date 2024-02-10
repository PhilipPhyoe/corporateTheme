import { useState } from "react";
import "../assets/Form.css";
import axios from "axios";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameValidate = /^[a-zA-Z]{2,10}$/;
  const emailValidate =
    /^([a-zA-Z\d.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,6})(\.[a-zA-Z]{2,5})?$/;

  const phoneValidate = /^[\d]{7,9}$/;

  const validateFunction = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !phone) {
      setError(true);
    } else if (
      !nameValidate.test(firstname) ||
      !nameValidate.test(lastname) ||
      !emailValidate.test(email) ||
      !phoneValidate.test(phone)
    ) {
      if (!nameValidate.test(firstname)) {
        setFirstnameError(true);
      } else {
        setFirstnameError(false);
      }
      if (!nameValidate.test(lastname)) {
        setLastnameError(true);
      } else {
        setLastnameError(false);
      }
      if (!emailValidate.test(email)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (!phoneValidate.test(phone)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    } else {
      /*
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(Data),
      })
        .then(setSuccess(true))
        .then(console.log(Data));*/
      axios
        .post("http://localhost:5000/api/visitors", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
        })
        .then(setSuccess(true))
        .then(() => {
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
        });
    }
  };

  return (
    <div className="form">
      <h2 className="form-title">Get a quote</h2>
      <p className="form-text">Our team would love to hear from you.</p>
      <form className="contact-form">
        <div className="fullname">
          <div className="firstname">
            <label htmlFor="firstname">First Name</label>
            <input
              className="input"
              name="firstname"
              value={firstname}
              type="text"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            {firstnameError && (
              <p className="error-message">
                Be 2 to 10 characters long without numbers.
              </p>
            )}
          </div>
          <div className="lastname">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="input"
              name="lastname"
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            {lastnameError && (
              <p className="error-message">
                Be 2 to 10 characters long without numbers.
              </p>
            )}
          </div>
        </div>

        <label htmlFor="email">Email</label>
        <input
          className="input"
          name="email"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError && <p className="error-message">Invalid email.</p>}
        <label htmlFor="phone">Phone Number</label>
        <div className="phone-input">
          <div className="phone-type">
            <label>+959</label>
          </div>
          <div className="number">
            <input
              className="input"
              name="phone"
              value={phone}
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {phoneError && (
              <p className="error-message">Invalid phone number.</p>
            )}
          </div>
        </div>

        <input
          className="form-btn"
          type="submit"
          value="Submit Now"
          onClick={validateFunction}
        />
        {error && <p className="error-message">Please input all fields.</p>}
        {success && (
          <p className="success-message">
            Your data is sent successfully. We will contact you soon!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
