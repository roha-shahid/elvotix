import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";
import "./VoteCount.css";

const features = [
  {
    img: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/different_image1.png", // Replace with your img
    title: "Equality and Solidarity",
    desc: "perspi ciatis unde omni iste natus error sit volup accus antium dolor emque laudantium",
  },
  {
    img: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/different_image2.png",
    title: "To inspire Humanity",
    desc: "perspi ciatis unde omni iste natus error sit volup accus antium dolor emque laudantium",
  },
  {
    img: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/different_image3.png",
    title: "Better Living Programs",
    desc: "perspi ciatis unde omni iste natus error sit volup accus antium dolor emque laudantium",
  },
];

const VoteCount = () => {
  return (
    <section className="vote-count-section">
      {/* Hero Section */}
      <div className="vote-hero-section vote-hero-bg d-flex align-items-center justify-content-center text-center">
        <Container>
          <div className="vote-hero-content mx-auto">
            <div className="vote-hero-badge mb-3">Every Vote Count</div>
            <h1 className="vote-hero-title mb-2">
              BELIEVE IN <span className="vote-hero-title-accent">CHANGE</span>
            </h1>
            <div className="vote-hero-stars mb-2">**</div>
            <div className="vote-hero-subtitle mb-3">
              <span className="fw-bold">NEVER UNDERESTIMATE</span>
              <br />
              THE POWER OF{" "}
              <span className="vote-hero-title-accent">AMERICAN PEOPLE</span>
            </div>
            <Button className="vote-hero-btn">Read More</Button>
          </div>
        </Container>
      </div>

      {/* Lower Section */}
      <div className="vote-lower-section py-5">
        <Container>
          <Row>
            {/* Left Side */}
            <Col md={6} className="text-start mb-3">
              <div className="left-text">
                <div className="mb-2 vote-diff-subtitle">
                  Let Make a Difference
                </div>
                <h2 className="mb-3 vote-diff-title">
                  Together We can
                  <br />
                  Make Something Great!
                </h2>
                <p className="mb-5 vote-diff-desc">
                  Sed ut perspiciatis unde omnis iste natus error sit volup
                  accusantium doloremque laudantium totam rem ape ramad, Donec
                  condimentum, arcu commodo semper uismod, nunc sapien eaequie.
                </p>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-semibold">New Politic Programs</span>
                    <span className="fw-semibold text-success">90%</span>
                  </div>
                  <ProgressBar now={90} className="vote-progress-bar mb-3" />
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-semibold">Regulations & Rules</span>
                    <span className="fw-semibold text-success">95%</span>
                  </div>
                  <ProgressBar now={95} className="vote-progress-bar" />
                </div>
                <button className="top-btn">Donate Now!</button>
              </div>
            </Col>
            {/* Right Side */}
            <Col md={6}>
              <div className="vote-features-cards p-0 text-start">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="vote-feature-card"
                  >
                    <div className="img-holder">
                      <img src={feature.img} alt="feature-img" />
                    </div>
                    <div className="p-0">
                      <div className="mb-2 vote-title">{feature.title}</div>
                      <div className="mb-0 vote-desc">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default VoteCount;
