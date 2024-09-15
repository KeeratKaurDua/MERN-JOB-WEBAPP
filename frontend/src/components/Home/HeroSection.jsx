import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "323,141",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "2920",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "3,88,211",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,00,671",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find a Job That Suits You!</h1>
            <p>
            Unlock countless opportunities and find your perfect role today!
            Search jobs that match your skills, passions, and goals.
            Whether you're starting fresh or looking to grow, we have got you covered.
            Take the next step in your career with confidence.
            </p>
          </div>
          <div className="image">
            <img src="/job.png" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
