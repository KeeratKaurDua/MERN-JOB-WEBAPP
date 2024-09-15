import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Keerat Kaur.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/keerat-kaur-dua-7270a0280"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/keeratkaur._"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
