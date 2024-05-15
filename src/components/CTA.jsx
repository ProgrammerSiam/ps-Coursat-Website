import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";

const CTA = () => {
  return (
    <motion.div
      variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
      className="py-[70px]"
    >
      <div className="container h-[400px]">
        <div className="flex flex-col items-center justify-center w-full h-full px-4 gap-y-8 bg-[url('/src/assets/cta-bg.png')] border border-solid border-gray-10 rounded-4xl">
          <h2 className="relative text-center section-title-after text-h2 text-gray-10">
            Join Our Learning <br /> Community
          </h2>

          <form className="w-full max-w-[550px]">
            <div className="flex items-center border border-solid rounded-full border-gray-10 h-14 p-1.5 overflow-hidden">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                className="w-full px-4 text-base bg-transparent outline-0 placeholder:text-gray-40"
              />
              <button
                type="submit"
                className="flex items-center justify-center flex-shrink-0 border border-solid rounded-full border-gray-10 w-11 h-11"
              >
                <svg
                  width="71"
                  height="51"
                  viewBox="0 0 71 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[26px]"
                >
                  <path
                    d="M0.612732 25.4016H64.4928M38.4571 1.9472C43.2016 10.3343 51.0356 19.7372 64.4928 25.4472C51.0356 31.1572 43.2016 40.5601 38.4571 48.9472"
                    stroke="#292C32"
                    stroke-width="4.5"
                    className="transition-colors duration-300 group-hover/view-btn:stroke-white"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
