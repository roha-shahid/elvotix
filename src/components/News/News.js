import React from "react";
import "./News.css";
const News = () => {
  const newsItems = [
    {
      title: "Many important brand shave given us their trust",
      date: "Oct 26, 2024",
      author: "dummyuser",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/blog_image1-1024x582.jpg",
      link: "https://gracethemesdemo.com/elvotix/2024/10/26/many-important-brand-shave-given-us-their-trust/",
    },
    {
      title: "Future where technology creates jobs",
      date: "Oct 26, 2024",
      author: "dummyuser",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/blog_image2-1024x769.jpg",
      link: "https://gracethemesdemo.com/elvotix/2024/10/26/future-where-technology-creates-jobs/",
    },
    {
      title: "What you do today can improve your tomorrows",
      date: "Oct 26, 2024",
      author: "dummyuser",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      image:
        "https://gracethemesdemo.com/elvotix/wp-content/uploads/2024/10/blog_image3-1024x678.jpg",
      link: "https://gracethemesdemo.com/elvotix/2024/10/26/what-you-do-today-can-improve-your-tomorrows/",
    },
  ];

  return (
    <>
      <section className="py-5 bg-light news-section">
        <div className="container">
          <div className="text-center mb-4">
            <h5 className="text-uppercase activity-head">Political Activities</h5>
            <h2 className="heading">Latest Breaking News On Activism</h2>
          </div>

          <div className="row text-start">
            {newsItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <a href={item.link} className="position-relative">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <span className="date">{item.date}</span>
                  </a>
                  <div className="card-body">
                    <small className="span d-block mb-2">
                      By {item.author}
                    </small>
                    <h5 className="card-title">
                      <a href={item.link} className="text-decoration-none">
                        {item.title}
                      </a>
                    </h5>
                    <p className="card-text mt-3">{item.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
