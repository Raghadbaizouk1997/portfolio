import React from "react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/raghad-baizouk/"
            target="_blank"
            className="home__social-link"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto:Raghadbaizouk1997@gmail.com"
            target="_blank"
            className="home__social-link"
          >
            <AiOutlineMail />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023
          {/* <span>Luique</span> */}
          . All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by
          <span> me</span>
        </p>
      </div>
    </footer>
  );
};
