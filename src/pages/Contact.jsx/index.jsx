import { useState } from "react";
import { validate } from "../../validation";
import { API_KEY } from "../../key";
import { ReactSVG } from "react-svg";

import zigzagIcon from "../../assets/icons/lightening.svg";
import mailIcon from "../../assets/icons/Envelope.svg";
import smileIcon from "../../assets/icons/smily.svg";

import "./styles.css";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [userInput, setUserInput] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", API_KEY);
    const res = await validate(userInput, "contactForm");

    console.log(res);

    if (!res) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        console.log(response);

        setSubmitted(true);
      } catch (error) {
        console.log(error);
      }
    }
    setErrors(!res ? {} : res);
  };

  if (submitted) {
    return (
      <div className="thanksMsg">
        <h1>Thanks for getting in touch!</h1>
        <div className="smiley">
          <ReactSVG src={smileIcon} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="contactWrapper">
        <form
          onInput={(e) => {
            setUserInput({ ...userInput, [e.target.name]: e.target.value });
          }}
          onSubmit={handleSubmit}
        >
          <div className="contactText">
            <div className="contactHeading">
              <ReactSVG src={zigzagIcon} />
              <h2>Get in Touch</h2>
              <ReactSVG src={mailIcon} />
            </div>

            <h3>Please fill in the form below</h3>
          </div>
          <div className="nameFeild">
            <label htmlFor="name">
              <p>Name:</p>
            </label>
            <input type="text" id="name" name="name" required />
            <p>{errors.name}</p>
          </div>
          <div className="emailFeild">
            <label htmlFor="email">
              <p>Email:</p>
            </label>
            <input type="email" id="email" name="email" required />
            <p>{errors.email}</p>
          </div>
          <div className="msgFeild">
            <label htmlFor="message">
              <p>Message:</p>
            </label>
            <textarea id="message" name="message" required />
            <p>{errors.message}</p>
          </div>
          <div className="formButton">
            <button type="submit">Submit</button>
          </div>
          <div className="disclaimer">
            <h3>FYI - We won&apos;t share your details!</h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
