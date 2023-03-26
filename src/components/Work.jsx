import React from "react";
// motion
import { motion } from "framer-motion";
//varians
import { fadeIn } from "../variants";
//image
import img1 from "../assets/portfolio1.png";
import img2 from "../assets/portfolio2.png";
import img3 from "../assets/portfolio3.png";

const Work = () => {
  return (
    <section className="section " id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* ===== left side =====*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-10 lg:gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="flex-1">
              <h2 className="h2 leading-tight text-accent">
                My Recent <br />
                Work.
              </h2>
            </div>

            {/* image 1*/}
            <a
              href="https://m-portfolio-jade.vercel.app/"
              target="_blank"
              className="flex-1 group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="absolute w-full h-full z-40 group-hover:bg-black/70 transition-all duration-300"></div>

              {/* inner image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />

              {/* pretitle */}
              <div className="absolute z-40 -bottom-full left-6 lg:left-12 group-hover:bottom-32 md:group-hover:bottom-24 transition-all duration-500 ">
                <span className="text-gradient"> Portfolio </span>
              </div>

              {/* title */}
              <div className="absolute z-40 -bottom-full left-6 lg:left-12 group-hover:bottom-6 transition-all duration-700 ">
                <p>
                  <span className="text-2xl text-white font-semibold">
                    Technologies :
                  </span>{" "}
                  ReactJS, TailWindCss, Framer-motion, React-scroll,
                  React-icons, React-type-animation
                </p>
              </div>
            </a>
          </motion.div>

          {/* ===== right side =====*/}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image 2 */}
            <a
              href="https://online-ticket-booking.vercel.app/"
              target="_blank"
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="absolute w-full h-full z-40 group-hover:bg-black/70 transition-all duration-300"></div>

              {/* inner image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />

              {/* pretitle */}
              <div className="absolute z-40 -bottom-full left-6 lg:left-12 group-hover:bottom-32 md:group-hover:bottom-24 transition-all duration-500 ">
                <span className="text-gradient">Booking Movie Tickets</span>
              </div>

              {/* title */}
              <div className="absolute z-40 -bottom-full left-6 lg:left-12 group-hover:bottom-6 transition-all duration-700 ">
                <p>
                  <span className="text-2xl text-white font-semibold">
                    Technologies :
                  </span>{" "}
                  ReactJS, Axios, Redux(toolkit), MaterialUI, SweetAlert,
                  React-Slick, Bootstrap4, Styled-component
                </p>
              </div>
            </a>

            {/* image 3 */}
            <a
              href="https://e-learning-sooty.vercel.app/"
              target="_blank"
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="absolute w-full h-full z-40 group-hover:bg-black/70 transition-all duration-300"></div>

              {/* inner image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />

              {/* pretitle */}
              <div className="absolute z-40 -bottom-full left-6 lg:left-12 group-hover:bottom-32 md:group-hover:bottom-24 transition-all duration-500 ">
                <span className="text-gradient">E-Learning</span>
              </div>

              {/* title */}
              <div className="absolute z-40 -bottom-full left-6 lg:left-12 group-hover:bottom-6 transition-all duration-700 ">
                <p>
                  <span className="text-2xl text-white font-semibold">
                    Technologies :
                  </span>{" "}
                  ReactJS, Axios, Redux(toolkit), MaterialUI, SweetAlert,
                  Bootstrap4, Styled-component
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
