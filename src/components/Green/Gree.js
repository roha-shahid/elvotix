import React from "react";
import "./Green.css";

// Import or define SVG icons
const BudgetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <path d="M2 7h20"></path>
  </svg>
);

const EconomyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const JobsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const Green = () => {
  return (
    <section className="political-priorities">
      <div className="priorities-container container">
        <div className="row">
          <div className="priorities-header d-flex flex-column gap-2 text-start col-lg-5 col-md-12 col-sm-12">
            <h3>Main issues</h3>
            <h2>Politician Priorities</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatema
              accusantium doloremque.
            </p>
          </div>
          <div className="priorities-cards row col-lg-7 col-md-12 col-sm-12">
            <div className="priority-card col-md-4">
              <div className="d-flex flex-column gap-2 align-items-center p-4">
                <div className="card-icon">
                <img width={73} height={73} src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/issue_image1.png" class="" alt=""/>
                </div>
                <h3>Balancing The Budget</h3>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>

            <div className="priority-card col-md-4">
              <div className="d-flex flex-column gap-2 align-items-center p-4">
              <div className="card-icon">
                <img width={73} height={73} src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/issue_image2.png" class="" alt=""/>
                </div>
                <h3>Growing Our Economy</h3>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>

            <div className="priority-card col-md-4">
              <div className="d-flex flex-column gap-2 align-items-center p-4">
              <div className="card-icon">
                <img width={73} height={73} src="https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/issue_image3.png" class="" alt=""/>
                </div>
                <h3>Creating Jobs</h3>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Green;
