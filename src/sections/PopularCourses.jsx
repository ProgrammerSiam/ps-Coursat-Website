import SectionHeader from "../components/SectionHeader";
import { register } from "swiper/element/bundle";
import { courses } from "./../constants/index";
import "swiper/css";
import Course from "./../components/Course";
import { useEffect, useRef } from "react";
import SliderNavigation from "../components/SliderNavigation";
import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";

const PopularCourses = () => {
  const sliderRef = useRef(null);
  const swiperParams = {
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  useEffect(() => {
    sliderRef.current && Object.assign(sliderRef.current, swiperParams);
  }, []);

  return (
    <section id="popular">
      <div className="container">
        <div className="flex flex-col gap-y-24">
          <SectionHeader title="Explore Most Popular Our Courses" link="#" />

          {/* slider */}
          <motion.div
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="flex flex-col gap-y-4"
          >
            <swiper-container ref={sliderRef}>
              {courses?.map((course) => {
                if (course.rating >= 4.8) {
                  return (
                    <swiper-slide key={course.id}>
                      <Course
                        id={course.id}
                        title={course.title}
                        category={course.category}
                        difficulty={course.difficulty}
                        thumbnail={course.thumbnail}
                        instructor={{
                          name: course.instructor.name,
                          pic: course.instructor.pic,
                        }}
                        rating={course.rating}
                      />
                    </swiper-slide>
                  );
                }
              })}
            </swiper-container>
            <SliderNavigation ref={sliderRef} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
