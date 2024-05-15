import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="py-[70px] bg-gray-10">
      <div className="container">
        <div className="">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="footer-col">
                <h2 className="text-white text-h2">Coursat.</h2>
                <p className="text-base !leading-[normal] text-gray-80">
                  Explore a world of knowledge and skills at your fingertips,
                  from business and technology to the arts and beyond
                </p>

                <div className="flex items-center gap-x-4">
                  <a href="#">
                    <RiFacebookCircleFill size={32} className="social-icon" />
                  </a>
                  <a href="#">
                    <RiInstagramFill size={32} className="social-icon" />
                  </a>{" "}
                  <a href="#">
                    <RiTwitterFill size={32} className="social-icon" />
                  </a>{" "}
                  <a href="#">
                    <RiLinkedinFill size={32} className="social-icon" />
                  </a>
                </div>
              </div>

              {/* link */}
              <div className="footer-col">
                <p className="footer-heading">Quick Links</p>

                <div className="flex flex-col gap-y-2">
                  <a href="#home" className="footer-link">
                    Home
                  </a>
                  <a href="#about" className="footer-link">
                    About
                  </a>{" "}
                  <a href="#" className="footer-link">
                    Courses
                  </a>
                  <a href="#instructors" className="footer-link">
                    Instructors
                  </a>
                  <a href="#blog" className="footer-link">
                    Blogs
                  </a>
                </div>
              </div>

              {/* lnk2 */}
              <div className="footer-col">
                <p className="footer-heading">Contact information</p>

                <div className="flex flex-col gap-y-2">
                  <a href="#home" className="footer-link">
                    Address: Jordan, Amman
                  </a>
                  <a href="#about" className="footer-link">
                    Email: coursat@gmail.com
                  </a>{" "}
                  <a href="#courses" className="footer-link">
                    Phone: (+962) 123 456 789
                  </a>
                </div>
              </div>

              {/* btn */}
              <div className="footer-col">
                <p className="footer-heading">Subscribe to our Newsletter</p>

                <form className="flex flex-col gap-y-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    className="outline-0 rounded-2xl h-14 px-1.5 bg-gray-20 text-base font-medium text-white"
                  />
                  <button type="submit" className="btn btn-primary !w-full">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-4 p-10 mt-[70px] bg-gray-20 rounded-4xl">
              <p className="text-lg text-gray-80">
                &copy; 2024 All Rights Reserved By{" "}
                <a
                  href="https://programmer-siam.netlify.app/"
                  className="text-primary-50"
                >
                  {" "}
                  Mehedi Hasan Siam{" "}
                </a>
              </p>

              <div className="flex items-center gap-4">
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
