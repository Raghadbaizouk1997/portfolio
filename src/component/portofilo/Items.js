import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeSecond from "../../assets/shape-2.png";
import { motion } from "framer-motion";
import Modal from "@material-ui/core/Modal";
import { photos } from "../../Data";


const Items = ({ PojectITems }) => {
  const handleProjectNavigation = (path) => {
    // Navigate to the URL (You can use window.location.href or an anchor tag)
    window.open(path, "_blank");  // Opens the link in a new tab
  };

  return (
    <>
      {PojectITems.map((PojectITem) => {
        const { id, img, category, title, description, path, description1, year, path1, path2 } = PojectITem;

        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} className="portfolio__img" alt={title} />
            </div>

            <span className="portfolio__category text-cs">{category}</span>

            <h3 className="portfolio__title">{title}</h3>

            <p className="portfolio__description">{description}</p>
            <p className="portfolio__description1">{description1}</p>
            <p className="portfolio__description1">Year: {year}</p>

            {/* "See Project" Button to navigate */}
            <div className="portfolio__project-links">
              {path && (
                <button
                  type="button"
                  className="see-project-btn"
                  onClick={() => handleProjectNavigation(path)}
                >
                  See Project (Website)
                </button>
              )}
              {path1 && (
                <button
                  type="button"
                  className="see-project-btn"
                  onClick={() => handleProjectNavigation(path1)}
                >
                  See Project (App Store)
                </button>
              )}
              {path2 && (
                <button
                  type="button"
                  className="see-project-btn"
                  onClick={() => handleProjectNavigation(path2)}
                >
                  See Project (Google Store)
                </button>
              )}
            </div>

            <img src={shapeSecond} className="shape c__shape" alt="shape decoration" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
