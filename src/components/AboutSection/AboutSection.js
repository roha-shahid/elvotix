import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './AboutSection.css';
import here1 from "../../assets/wetoel.png"
import here2 from "../../assets/elvotix_pro_welcome_author.png"

function AboutSection() {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
        <Col lg={6} className="position-relative text-center mb-4 mb-lg-0">
            <img
              src={here1}
              alt="Welcome section"
              className="about-single-img img-fluid"
              style={{ maxWidth: '85%', height: 'auto' }}
            />
          </Col>
          
          <Col lg={6} className="d-flex flex-column gap-3 text-lg-start">
            <div className="about-title">Welcome To Elvotix</div>
            <h2 className="about-description">We Are Always Ready To<br />Help Resolve Problems</h2>
            <p className="about-desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperamda, Donec condimentum, arcu commodo perspiciatis undeomns iste natus error sit voluptatem.
            </p>
            <ul className="about-list list-unstyled">
              <li className="d-flex align-items-center">
                <FaArrowRight className="me-2" /> Most easy Premium education process
              </li>
              <li className="d-flex align-items-center">
                <FaArrowRight className="me-2" /> Research & Development before starting
              </li>
              <li className="d-flex align-items-center">
                <FaArrowRight className="me-2" /> Making a quality health ideas
              </li>
            </ul>
            <div className="mb-">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="percentage">City Development</span>
                <span className="percent">87%</span>
              </div>
              <ProgressBar now={87} className='my-3'/>
            </div>
            <div className="about-flex">
              <img
                src={here2}
                alt="Jennifer Brown Avatar"
                className="about-author-avatar rounded-circle border border-2 border-white shadow-sm"
                style={{ width: 62, height: 62, objectFit: 'cover' }}
              />
              <div className="about-author-info">
                <div className="about-author-name">Jennifer Brown</div>
                <div className="about-author-title">CEO & Founder of Manit</div>
              </div>
              <button className="about-btn">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
