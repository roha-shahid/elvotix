import React from "react";
import "./WhoWeAre.css";
const WhoWeAre = () => {
  const statsData = [
    {
      id: 1,
      title: "Total Volunteer",
      count: "4,657K",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/counter_image1.png",
    },
    {
      id: 2,
      title: "Campaign",
      count: "589+",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/counter_image2.jpg",
    },
    {
      id: 3,
      title: "Coverage Area",
      count: "859 Miles",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/counter_image3.jpg",
    },
    {
      id: 4,
      title: "Vote Paper",
      count: "6,985K",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/counter_image4.jpg",
    },
  ];
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6 mb-3 side-text text-start">
              <div className="mb-3">
                <h5 className="text-capitalize text-tab">Who We Are</h5>
              </div>
              <h2 className="mb-4">If You Want a Better Future, Vote For Us</h2>

              <p className="mb-4">
                Sed ut perspici unde omnis iste natus error sitvolu ptatem accus
                antium dolore mque lauda ntium totamerem aperamad, Donec condim
                entum, arcu commodo perspiciatis undeomn iste natus error sit
                volu ptatem. semper euismo nunc.
              </p>

              <div className="d-flex align-items-center mb-4">
                <img
                  src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/12/elvotix_pro_who_we_are_authore.png"
                  alt="Jonathan Parker"
                  className="me-3"
                  width="52"
                  height="52"
                />
                <div>
                  <h5 className="mb-1">VOTE FOR</h5>
                  <p className="mb-0 title-text">Jonathan Parker</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-5 flex-wrap">
                <a href="#" className="success-btn mb-3">
                  Read More
                </a>
                <img
                  src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/elvotix_who_we_sign.jpg"
                  alt="Signature"
                  width="186"
                  height="92"
                />
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/elvotix_who_we_are.jpg"
                class="img-fluid side-img"
                alt=""
                srcset="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/elvotix_who_we_are.jpg 467w, https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/elvotix_who_we_are-300x300.jpg 300w, https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/elvotix_who_we_are-150x150.jpg 150w"
                sizes="(max-width: 467px) 100vw, 467px"
              />
            </div>
          </div>
          <div className="row">
            {statsData.map((item) => (
              <div className="col-md-3 text-center mb-4" key={item.id}>
                <div className="cards py-5 px-3 d-flex flex-column justify-content-between align-items-center">
                  <div className="img-holder mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ maxHeight: "100px" }}
                    />
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="value">{item.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
