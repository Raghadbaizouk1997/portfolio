import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeSecond from "../../assets/shape-2.png";
import { motion } from "framer-motion";
import Modal from "@material-ui/core/Modal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { photos } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const Items = ({ PojectITems }) => {
  // const [open, setOpen] = React.useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  return (
    <>
      {PojectITems.map((PojectITem) => {
        const { id, img, category, title, description, path, description1 } =
          PojectITem;

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
              <img src={img} className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>

            <h3 className="portfolio__title">{title}</h3>

            <p className="portfolio__description">{description}</p>
            <p className="portfolio__description1">{description1}</p>
            {/* <div style={{ display: "block", padding: 30 }}> */}
              {/* <button type="button" onClick={handleOpen}> */}
                See Project
              {/* </button> */}
              {/* <Modal
                onClose={handleClose}
                open={open}
                style={{
                  // position: "absolute",
                  border: "2px solid #000",
                  backgroundColor: "gray",
                  boxShadow: "2px solid black",
                  // height: 500,
                  // width:100%,
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  margin: "auto",
                }}
              >
                <Swiper
                  // install Swiper modules
                  
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: false }}
                  scrollbar={{ draggable: false }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
        
                  {photos.map((ele) => {
                    return (
                      <SwiperSlide className="ddd">
                        <img src={ele.src}/>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Modal>
            </div> */}
            <a href={path} target="_blank" className="link">
              <FaArrowRight className="link__icon"></FaArrowRight>
            </a>

            <img src={shapeSecond} className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};
export default Items;
