import React, { useState } from "react";
import "./Video.css";

const Video = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="compaign-video-section">
        <div className="container py-5 text-white text-center">
          <h5>Our Best Video</h5>
          <h2 className="mt-3">
            Describe The Structure Of a Modern Political Campaign
          </h2>

          <div className="d-flex justify-content-center mt-5">
            <div className="position-relative">
              <a href="#" onClick={openModal} aria-label="Play Video">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-far-play-circle"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="video-modal" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube video"
            ></iframe>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
