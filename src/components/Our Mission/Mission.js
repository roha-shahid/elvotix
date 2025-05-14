import React from "react";
import "./Mission.css";

const cardData = [
  {
    title: "Economic Empowerment",
    desc: "perspiciatis unde omnis iste natus error sitvolu patetam accus antium dolore mque lauka ntium",
    img: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/12/elvotix_pro_vision_image1.png",
    alt: "Economic Icon",
  },
  {
    title: "Quality Education for All",
    desc: "perspiciatis unde omnis iste natus error sitvolu patetam accus antium dolore mque lauka ntium",
    img: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/12/elvotix_pro_vision_image2.png",
    alt: "Education Icon",
  },
  {
    title: "Healthcare Services for All",
    desc: "perspiciatis unde omnis iste natus error sitvolu patetam accus antium dolore mque lauka ntium",
    img: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/12/elvotix_pro_vision_image3.png",
    alt: "Healthcare Icon",
  },
];

function MissionSection() {
  return (
    <div className="mission-section">
      <div className="container">
        <div className="row">
          <div className="mission-header heading">
            <h5 className="mission-subtitle">Our Mission & Vision</h5>
            <h2 className="mission-title">
              Visionary Leadership
              <br />
              United Progress
            </h2>
          </div>
        </div>
        <div className="mission-cards row">
          {cardData.map((card, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 vision-card" key={i}>
              <div className="mission-card w-100 d-flex flex-column gap-4">
                <div className="mission-icon-wrap">
                  <img
                    className="mission-icon"
                    width={147}
                    height={147}
                    src={card.img}
                    alt={card.alt}
                  />
                </div>
                <div className="mission-card-title">{card.title}</div>
                <div className="mission-card-desc">{card.desc}</div>
                <button className="mission-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
