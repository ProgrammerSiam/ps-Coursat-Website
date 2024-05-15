import SectionHeader from "./../components/SectionHeader";
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
import SliderNavigation from "../components/SliderNavigation";
import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";
import { instructors } from "../constants";
import Instructor from "./../components/Instructor";

register();
const Instructors = () => {
  const sliderRef = useRef(null);
  const swiperParams = {
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  useEffect(() => {
    sliderRef.current && Object.assign(sliderRef.current, swiperParams);
  }, []);
  return (
    <section id="instructors">
      <div className="container">
        <div className="flex flex-col gap-y-24 ">
          <SectionHeader title="Meet Our Expert Instructors" link="#" />

          <motion.div
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="flex flex-col gap-y-4"
          >
            <swiper-container ref={sliderRef}>
              {instructors?.map((instructor) => (
                <swiper-slide key={instructor.id}>
                  <Instructor
                    id={instructor.id}
                    name={instructor.name}
                    specialty={instructor.specialty}
                    pic={instructor.pic}
                    rating={instructor.rating}
                  />
                </swiper-slide>
              ))}
            </swiper-container>
            <SliderNavigation ref={sliderRef} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
