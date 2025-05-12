import React from "react";
import "./Highlight.css";

const Highlight = () => {
  return (
    <>
      <div className="container py-5 highlight-section">
        {/* Section Title */}
        <div className="text-center mb-4 heading">
          <h5>Campaign Highlights</h5>
          <h2 className="mt-3">
            We will make this country a better place to live
          </h2>
        </div>

        {/* Campaign Cards */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/campaign_image1.jpg"
                alt="Campaign 1"
                className="img-fluid"
              />
              <div className="card-body text-start">
                <h5 className="">
                  <span>Business</span> Sep 29, 2024
                </h5>
                <h2 className="h5">
                  <a href="#" className="text-decoration-none">
                    The Economist Conference in Athens Business Summit
                  </a>
                </h2>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body text-start second-card">
                <h5 className="">
                  <span>Business</span> Sep 29, 2024
                </h5>
                <h2 className="h5">
                  <a href="#" className="text-decoration-none">
                    Litigation Enforcement of Foreign Judgments in Greece
                  </a>
                </h2>
              </div>
              <img
                src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/campaign_image2.jpg"
                alt="Campaign 2"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/campaign_image3.jpg"
                alt="Campaign 3"
                className="img-fluid"
              />
              <div className="card-body text-start">
                <h5>
                  <span>Business</span> Sep 29, 2024
                </h5>
                <h2 className="h5">
                  <a href="#" className="text-decoration-none">
                    Sacrifices America's Last Wild Place for Its Tax Scam
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
