import { about } from "../constants/images";
import { aboutFeaturs } from "./../constants/index";
import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "./../constants/motion";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
          {/* =======left side ============ */}
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-y-8 lg:w-[53%] w-auto flex-shrink-0 text-center lg:text-start   "
          >
            <div className="flex flex-col gap-y-4">
              <h2 className="relative section-title-after text-h2 text-gray-10">
                Your Trusted Source for Quality Online Education
              </h2>
              <p className="text-base font-medium text-gray-60">
                Charting a Path from Passion to Excellence in Online Education –
                Guiding You Toward Your Aspirations and Lifelong Learning Goals
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {aboutFeaturs?.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col group basis-[240px] flex-grow border border-solid border-gray-10 rounded-3xl p-4 text-start hover:bg-gray-10 transition-colors duration-300'
                "
                >
                  <p className="text-xl font-semibold text-gray-10 !leading-[normal] group-hover:text-white">
                    {feature.title}
                  </p>
                  <p className="text-base font-medium leading-normal text-gray-60 group-hover:text-gray-90">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =======right side ============ */}
          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex lg:w-[47%] w-full"
          >
            <div className="lg:max-w-[500px] max-w-none max-h-[450px] w-full rounded-4xl overflow-hidden">
              <img src={about} alt="about-images" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
