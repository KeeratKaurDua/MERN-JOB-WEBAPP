import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How It Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create An Account</p>
              <p>
              Sign up in just a few clicks to access job opportunities or post openings.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find/Post A Job</p>
              <p>
                Browse job listings or post your own to find the perfect candidate.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Apply for your dream job or recruit candidates that best fit your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
