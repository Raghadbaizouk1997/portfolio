import React, { useState, useRef } from "react";
import shapeOne from "../../assets/shape-1.png";
import "./Contact.css";
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";
import axios from "axios";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
export const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [email, setEmail] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yfi9asv",
        "template_054sqju",
        form.current,
        "yNvxMnsCyEoZw8AcU"
      )
      .then(
        (result) => {
      
          // if (form.current.name === "") {
          //   console.log('1');
          //   setStatusMessage("field is required");
          // } 
          // if (form.current.name !== "")  {
            // console.log('2');
            form.current.reset();
            setStatusMessage("Email sent success");
            setTimeout(() => {
              setStatusMessage("");
            }, 2000);
          // }
  
       
        },
        (error) => {
          console.log(error.text);
          setStatusMessage(`${error.text} error`);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle text-cs">
        Let's <span>Talk About Ideas</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title text-cs">Address</h3>
            <p className="contact__card-data">Dubai, UAE</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact__card-title">Freelance</h3>
            <p className="contact__card-data">Available Right now</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">Raghadbaizouk1997@gmail.com</p>
          </div>
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">+971 527924926</p>
          </div>
        </div>
        {/* <StyledContactForm> */}
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group grid">
            <div className="behind">
              <div className="contact__form-div">
                <label className="contact__from-tag text-cs">
                  Your full Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  // onChange={handleChange}
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-div">
                <label className="contact__from-tag text-cs">
                  Your email Address <b>*</b>
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={form.user_email}
                  // onChange={handleChange}
                  className="contact__form-input"
                />
              </div>
            </div>

            <div className="contact__form-div">
              <label className="contact__from-tag text-cs">
                Your Subject <b>*</b>
              </label>
              <input
                name="user_subject"
                value={form.user_subject}
                // onChange={handleChange}
                type="text"
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__from-tag text-cs">
                Your Message <b>*</b>
              </label>
              <textarea
                name="message"
                value={form.message}
                // onChange={handleChange}
                className="contact__form-input"
              ></textarea>
            </div>
          </div>
          <div className="contact__submit">
            <p>* Accept the terms and conditions. </p>
            <button className="btn text-cs">
              <input type="submit" value="Send" />
            </button>
          </div>
        </form>
        {/* </StyledContactForm> */}
      </div>
      <p className="statusMessage">{statusMessage}</p>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Contant Me</span>
      </div>
    </section>
  );
};
