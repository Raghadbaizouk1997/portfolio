import React, { useEffect, useState } from "react";
import { AiFillLinkedin,AiOutlineMail } from "react-icons/ai";
import { links } from "../../Data";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";
import shapeOne from "../../assets/shape-1.png";
import animateScroll from "react-scroll/modules/mixins/animate-scroll";
import "./Header.css";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
};
export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header `}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
          Raghad
        </Link>

        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      className="nav__link text-cs"
                      activeclass="active"
                      to={path}
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="nav__social">
            <a href="https://www.linkedin.com/in/raghad-baizouk/" target='_blank' className="home__social-link">
              <AiFillLinkedin />
            </a>
            <a href="mailto:Raghadbaizouk1997@gmail.com" target='_blank' className="home__social-link">
              <AiOutlineMail />
            </a>
              
            </div>
          </div>

          <div className="section__deco deco__left
          header__deco">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>

        <div className="nav__btns">
          <div onClick={toggleTheme} className="theme__toggle">
            {theme === "light-theme" ? <BsMoon /> : <BsSun />}
          </div>

          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
