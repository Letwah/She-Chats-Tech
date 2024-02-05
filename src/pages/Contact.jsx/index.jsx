import { useState } from "react";
import { validate } from "../../validation";
// import { useDispatch } from "react-redux";
import { API_KEY } from "../../key";

import "./styles.css";

const Contact = () => {
  // const dispatch = useDispatch();
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
        // dispatch(setToastContent("Thanks for getting in touch!"));
        setSubmitted(true);
      } catch (error) {
        console.log(error);
      }
    }
    setErrors(!res ? {} : res);
  };

  if (submitted) {
    return <p>Thanks for getting in touch!</p>;
  }

  return (
    <>
      <div className="contactWrapper">
        <h1>CONTACT</h1>
        <form
          onInput={(e) => {
            setUserInput({ ...userInput, [e.target.name]: e.target.value });
          }}
          onSubmit={handleSubmit}
        >
          <div className="contactText">
            <h3>Please fill in the form below 🙌</h3>
            <p>
              Alternatively if you would rather just get in touch via{" "}
              <a href="mailto:hello@colettesmith.com">email</a> or{" "}
              <a href="tel:+44 7963 470 269">ring</a> please do. For a copy of
              my cv please click{" "}
              <a href="./assets/Colette_Smith_CV_2023.pdf">here</a>. I look
              forward to hearing from you 🙂.
            </p>
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
          <button type="submit">Submit</button>
          {/* Dont need this message cos of toastify ....
      
      <div className="contactMsg">
        <p>
          Jimmy will get back to you asap! <br></br>Thanks for getting in touch.
        </p>
      </div> */}
        </form>
      </div>
    </>
  );
};

export default Contact;
