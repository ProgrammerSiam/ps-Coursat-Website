import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { categories, courses } from "../constants";
import getRandomElements from "./../utils/getRandomElements";
import Course from "./../components/Course";
import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";

const MotionCourse = motion(Course);

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [categorizedCourses, setCategorizedCourses] = useState(
    getRandomElements(courses, 6)
  );
  const handleCategory = (item) => {
    setActiveCategory(item);
    if (item === "All") {
      setCategorizedCourses(getRandomElements(courses, 6));
    } else
      setCategorizedCourses(
        courses.filter((course) => course.category === item)
      );
  };
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-y-24">
          <SectionHeader
            title="Explore Our Comprehensive Course Catalog"
            link="#"
          />

          <motion.div
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
            className="flex flex-col"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center px-6 w-[calc(100%-1.5rem)] overflow-auto">
                {categories?.map((item, index) => (
                  <div
                    className={`group flex items-center justify-center min-w-[120px] px-8 py-6 bg-white rounded-t-4xl hover:bg-gray-30 [&:is(.active)]:!bg-gray-10 cursor-pointer transition-colors duration-300  ${
                      activeCategory === item ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleCategory(item)}
                  >
                    <p className="text-xl font-medium md:text-2xl text-gray-10 group-hover:text-white group-[.active]:text-white transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 min-h-[540px] p-4 bg-gray-10 rounded-4xl">
                {categorizedCourses?.map((course) => (
                  <MotionCourse
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
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
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
