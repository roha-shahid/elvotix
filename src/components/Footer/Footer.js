import React, { useState } from "react";
import footerLogo from "../../assets/footer_logo.png";
import "./footer.css";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (honeypot) return;
  };
  return (
    <>
      <div className="mt-5">
        <footer className="text-start">
          <div className="container pt-2">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-2">
                <div className="d-flex align-items-center mb-4 mx-auto">
                  <img src={footerLogo} height="50" alt="" loading="lazy" />
                </div>
                <p>
                  Perspi ciatis und omnis iste natus volupte atemi omnis istei
                  pulvinar ultricies dolory amet tempus.
                </p>
                <span class="footer_btn">
                  <i class="fa-solid fa-phone-volume"></i>{" "}
                  <a href="tel:+11234567890">+1 123 456 7890</a>
                </span>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-2">
                <h5 className="text-capitalize mb-4 footer-head">Overview</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>
                      Donation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>
                      Join Page
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>
                      Volunteering
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>
                      Contact
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>
                      Join us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-2">
                <h5 className="text-capitalize mb-4 footer-head">
                  Quick Links
                </h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>Speakers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>Blog
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>
                      Reservation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="">
                      <i className="me-3 fa-solid fa-caret-right"></i>Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-2">
                <h5 className="text-capitalize mb-4 footer-head">Newsletter</h5>

                <form onSubmit={handleSubmit}>
                  <div className="email-holder position-relative">
                    <input
                      type="email"
                      className="email-input"
                      name="EMAIL"
                      placeholder="Your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      value="Sign up"
                      className="submit-icon"
                    ></button>
                  </div>

                  {/* Honeypot for spam protection */}
                  <label style={{ display: "none" }}>
                    Leave this field empty if you're human:
                    <input
                      type="text"
                      name="honeypot"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </label>
                </form>

                <ul className="list-unstyled d-flex gap-2 border-top my-5 py-4 social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-text py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-sm-12 text-center text-lg-start">
                  © Copyright 2024 Elvotix. All Rights Reserved
                </div>
                <div className="col-md-5 col-sm-12 text-center text-lg-end copyright-right">
                  <span>Design by </span>
                  <a href="https://www.gracethemes.com/" target="_blank">
                    Grace Themes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
