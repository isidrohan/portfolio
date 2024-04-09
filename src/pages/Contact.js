import { useRef } from "react";
import "../style/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4921lly', 'template_r4ws43t', form.current, {
        publicKey: 'WcwbEIQog8OggLzfl',
      })
      .then(
        () => {
          toast.success("Message sent!", {
            position: "top-right",
            theme: "light"
          });
          console.log('SUCCESS!');
        },
        (error) => {
          toast.error("Failed !",{
            position: "top-right",
            theme: "light"
          })
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <>
      <section ref={props.nameforRef} id="contact">
        <h2 className="section-header">Contact</h2>
        <div className="contact-wrapper">
          {/* Left contact page */}
          <form
            ref={form} onSubmit={sendEmail}
            id="contact-form"
            className="form-horizontal"
          >
            <div className="form-bar">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="user_name"
                required
              />
            </div>
            <div className="form-bar">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="user_email"
                required
              />
            
            </div>
            <div className="form-bar">
              <textarea
                className="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required
              ></textarea>
            </div>
            <button
              className=" send-button"
              type="submit" value="Send"
            >
              SEND
            </button>
            <ToastContainer />
          </form>
          {/* right contact page */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <span className="contact-text">
                  <div className="icon">
                    <FaLocationDot />
                  </div>
                  <div className="icon-content">Durgapur, West Bengal</div>
                </span>
              </li>
              <li className="list-item">
                <span className="contact-text">
                  <div className="icon">
                    <IoCall />
                  </div>
                  <div className="icon-content">
                    <a href="8676090166" title="Give me a call">
                      8676090166
                    </a>
                  </div>
                </span>
              </li>
              <li className="list-item">
                <span className="contact-text">
                  <div className="icon">
                    <IoMdMail />
                  </div>
                  <div className="icon-content">
                    <a href="mailto:#" title="Send me an email">
                      sidrohanme2@gmail.com
                    </a>
                  </div>
                </span>
              </li>
            </ul>
            <hr />

            <ul className="social-media-list">
              <li>
                <a href="https://github.com/isidrohan" target="_blank" className="contact-icon">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/siddharth-rohan-279385239/" target="_blank" className="contact-icon">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/isidd_rohan/" target="_blank" className="contact-icon">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};
