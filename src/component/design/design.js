import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { design } from "../../Data";
import shapeOne from "../../assets/shape-1.png";
import List from "./List";
import "./design.css";


import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
const allNavList = [
  "all",
  ...new Set(design.map((project) => project.category)),

];



export const Design = () => {
  const [PojectITems, setMenuItems] = useState(design);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(design);
      return;
    }
    const newProjectItems = design.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };
  
  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">design</h2>
      <p className="section__subtitle">
        My <span>designs</span>
      </p>

      {/* <List navList={navList} filterItems={filterItems} /> */}
      <div className="design__container container grid">
        <ImageSlider slides={SliderData} />
      {/* <Slider slides={slides} /> */}
        {/* <AnimatePresence initial={false}>
          <Items PojectITems={PojectITems} />
        </AnimatePresence> */}
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">
          Design
        </span>
      </div>
    </section>
  );
};
