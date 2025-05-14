import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./KnowMore.css";
import leaderImg from "../../assets/elvotix_pro_about_image.png";

const features = [
  {
    number: "01",
    title: "Get Involved",
    desc: "Perspi ciatis und omnis iste natus volupt atemi omnis iste natus",
  },
  {
    number: "02",
    title: "Democracy",
    desc: "Perspi ciatis und omnis iste natus volupt atemi omnis iste natus",
  },
  {
    number: "03",
    title: "Civil Rights",
    desc: "Perspi ciatis und omnis iste natus volupt atemi omnis iste natus",
  },
  {
    number: "04",
    title: "Enthusiasm",
    desc: "Perspi ciatis und omnis iste natus volupt atemi omnis iste natus",
  },
];

const KnowMore = () => {
  return (
    <section className="know-more-section bg-light py-5">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row g-5">
          <Col lg={6} className="pt-4 pt-lg-0 text-start">
            <div className="about-subtitle">
              Know More About
            </div>
            <h2 className="mb-3 know-more-title">
              Right Leader at Right
              <br className="d-none d-md-block" />
              Time for the right Reason
            </h2>
            <p className="know-more-desc mb-4">
              Sed ut perspiciatis unde omnis iste natus error sitvolu patem
              accus antium dolore mque lauda tium tota merem operamod, Donec
              condim enum, arcu com modo perspiciatis undeomns iste natus error
              sit volu patem. semper euis mo nunc sapien eaquie omnis iste natus
              error sit volup.
            </p>
            <button className="know-more-btn mb-3">
              Join The Campaign
            </button>
          </Col>
          <Col lg={6} className="text-center mb-4 mb-lg-0">
            <img
              src={leaderImg}
              alt="Leader"
              className="img-fluid rounded-4 know-more-leader-img"
            />
          </Col>
        </Row>
      </Container>
      <div className="know-more-features-section py-5">
        <Container className="position-relative py-4">
          <Row className="g-4">
            {features.map((feature, idx) => (
              <Col key={feature.number} xs={12} sm={6} md={6} lg={3}>
                <div className="text-center shadow-sm know-more-feature-card p-5">
                  <div className="d-flex flex-column gap-4">
                    <div className="feature-number mx-auto">
                      {feature.number}
                    </div>
                    <div className="know-more-feature-title">
                      {feature.title}
                    </div>
                    <div className="feature-desc">
                      {feature.desc}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default KnowMore;
