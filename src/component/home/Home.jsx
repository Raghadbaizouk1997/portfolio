import React from "react";
import profileImg from "../../assets/1.jpg";
import shapeOne from "../../assets/shape-1.png";
import shapeSecond from "../../assets/shape-2.png";
import CV from "../../assets/resume.pdf";
import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className=" container_header">
          <div className="parentheader">
            <div className="childone">
              <p className="home__subtitle text-cs">
                Hello, <span>My Name Is </span>
              </p>

              <h1 className="home__title text-cs">
                <span>Raghad</span> Baizouk
              </h1>

              <p className="home__job">
                <span className="text-cs">I Am </span>
                <b>Web Developer</b>
              </p>

              <p className="home__text">
                Highly accomplished and user focused  Software Engineer.
                Passionate about details, performance and quality. I have a vast
                experience in designing web applications with interactive
                interface using SPA frameworks. First of all, I'm a software
                engineer, so that I am not afraid to dive into new technologies
                or learn new frameworks to solve the problem with the right set
                of tools. I'm very organized, sociable, motivated with solid
                organizational skills, so I believe that I'm ready to work with
                any team.
              </p>
              <div className="home__social">
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
              <div className="home__btns">
                <a download="" href={CV} className="btn text-cs">
                  Download CV
                </a>

                <a href="#skills" className="hero__link text-cs">
                  MY SKILLS
                </a>
              </div>
            </div>
            <div className="childtwo">
              <div className="home__profile_personal-wrapper">
                <img
                  src={profileImg}
                  alt=""
                  className="home__profile_personal"
                />
                <p className="home__data home__data-one">
                  <span className="text-lg">
                    5 <b>+</b>
                  </span>
                  <span className="text-sm text-cs">
                    Years of <span>Experience</span>
                  </span>
                </p>
                <p className="home__data home__data-two">
                  <span className="text-lg">10</span>
                  <span className="text-sm text-cs">
                    Completed <span>Projects</span>
                  </span>
                </p>
              </div>
              {/* <div className="home__img-wapper">
                <div className="home__banner">
                  <img src={profileImg} alt="" className="home__profile" />
                </div>
                <p className="home__data home__data-one">
                  <span className="text-lg">
                    3 <b>+</b>
                  </span>
                  <span className="text-sm text-cs">
                    Years of <span>Experience</span>
                  </span>
                </p>
                <p className="home__data home__data-two">
                  <span className="text-lg">10</span>
                  <span className="text-sm text-cs">
                    Completed <span>Projects</span>
                  </span>
                </p>

                <img src={shapeOne} alt="" className="shape shape__1" />
                <img src={shapeSecond} alt="" className="shape shape__2" />
                <img src={shapeSecond} alt="" className="shape shape__3" />
              </div> */}
            </div>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Front-end Developer</span>
      </div>
    </section>
  );
};
