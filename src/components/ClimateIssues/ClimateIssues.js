import React, { useState } from "react";
import "./ClimateIssues.css";

const ClimateIssues = () => {
  const [activeTab, setActiveTab] = useState("education-system");

  const tabContent = {
    "education-system": {
      tab: "Our Concern Issues",
      description: "Help Us Bring the Change We Are Looking",
      title: "Education System",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperamad, Donec condime, arcu commodo semper euismod, nunc sapien eaqueip omnis iste natus error sit volup.",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/tab_image1.jpg",
    },
    "public-health-issues": {
      tab: "Public Health Issues",
      description: "Together We can Make Something Great!",
      title: "Public Health Issues",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperamad, Donec condime, arcu commodo semper euismod, nunc sapien eaqueip omnis iste natus error sit volup.",
      image: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/tab_image2.jpg",
    },
    "corruption-issues": {
      tab: "Corruption Issues",
      description: "Right Leader at Right Time for the right Reason",
      title: "Corruption Issues",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperamad, Donec condime, arcu commodo semper euismod, nunc sapien eaqueip omnis iste natus error sit volup.",
      image: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/tab_image3.jpg",
    },
    "public-transportation": {
      tab: "Public Transportation",
      title: "Public Transportation",
      description: "Structure Of a Modern Political Campaign",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperamad, Donec condime, arcu commodo semper euismod, nunc sapien eaqueip omnis iste natus error sit volup.",
      image: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/tab_image4.jpg",
    },
    "climate-change-issues": {
      tab: "Climate Change Issues",
      title: "Climate Change Issues",
      description: "Together We can Make Something Great!",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperamad, Donec condime, arcu commodo semper euismod, nunc sapien eaqueip omnis iste natus error sit volup.",
      image: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/tab_image5.jpg",
    },
    "human-right-law": {
      tab: "Human Rights & Law",
      title: "Human Rights & Law",
      description: "Get Involved With Contribution, Make Proud",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperamad, Donec condime, arcu commodo semper euismod, nunc sapien eaqueip omnis iste natus error sit volup.",
      image: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/tab_image6.jpg",
    },
    "global-economic-issues-": {
      tab: "Global Economic Issues",
      title: "Global Economic Issues",
      description: "Help Us Bring the Change We Are Looking",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperamad, Donec condime, arcu commodo semper euismod, nunc sapien eaqueip omnis iste natus error sit volup.",
      image: "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/tab_image7.jpg",
    },
  };

  const tabKeys = Object.keys(tabContent);

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="col-md-8">
            <div className="p-4 row side-content">
              <div className="col-md-6">
                <img
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  className="img-fluid mb-3"
                />
              </div>
              <div className="col-md-6 text-start">
                <h5>{tabContent[activeTab].tab}</h5>
                <h3 className="mb-3">{tabContent[activeTab].description}</h3>
                <p>{tabContent[activeTab].content}</p>
                <button className="top-btn">Read more</button>
              </div>
            </div>
          </div>

          {/* Tab List */}
          <div className="col-md-4">
            <ul className="list-group listing">
              {tabKeys.map((key) => (
                <li
                  key={key}
                  className={`d-flex justify-content-between align-items-center ${
                    activeTab === key ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(key)}
                  style={{ cursor: "pointer" }}
                >
                  <span>{tabContent[key].title}</span>
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateIssues;
