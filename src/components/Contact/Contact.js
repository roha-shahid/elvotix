import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-section pt-5">
        <div className="container">
          <div className="row">
            <div className="contact-inner col-md-6 text-start">
              <h5 className="compaign-heading position-relative py-4">
                Help Bring the Change We Need
              </h5>
              <h2 className="compaign-title">
                Political Campaigns for Fundraising
              </h2>
              <p className="compaign-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiamad, Donec
                condimentum, arcu commodo.
              </p>
              <a href="#" className="btn compaign-lg-btn mt-3">
                Become a Volunteer
              </a>
            </div>
            <div className="col-md-6 contact-position">
              <div className="contact-info mb-0">
                <h5>Contact info</h5>
              </div>
              <div className="d-flex flex-column contact">
                <div className="mb-4 row">
                  <h5 className="col-lg-5">Address</h5>
                  <div className="contact-info-holder col-lg-7">380 St Kilda Road, Jackson New Store, United States</div>
                </div>
                <div className="mb-4 row">
                  <h5 className="col-lg-5">Phone</h5>
                  <div className="contact-info-holder col-lg-7">
                    <a href="tel:+18889786654">+1 888 978 6654</a>
                    <a href="tel:+18002345224">+1 800 234 5224</a>
                  </div>
                </div>

                <div className="mb-4 row">
                  <h5 className="col-lg-5">E-Mail</h5>
                  <div className="contact-info-holder col-lg-7">
                    <a href="mailto:info@sitename.com">info@sitename.com</a>
                    <a href="mailto:contact@sitename.com">
                      contact@sitename.com
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#" className="btn compaign-lg-btn">
                    Connect With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compaign-secondary-text py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-start">
                <h5 className="head-text">Campaign</h5>
                <h2>Contribution</h2>
                <h3 className="text-contribution display-4 mb-5">$23,986.00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
