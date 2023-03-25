import React from "react";
//images
import image from "../assets/avatar.svg";
// icons
import { FaGithub, FaFacebook } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center mb-[80px]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: "0.7" }}
              className="text-[55px] font-bold leading-[1] lg:text-[110px]"
            >
              Hi there_
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: "0.7" }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppbercase leading-[1]"
            >
              <span className="mr-4 text-white">I am</span>
              <TypeAnimation
                sequence={["Bobby", 2000, "a Coder", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: "0.7" }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm passionate about learning new technologies and always keep
              concentrated on improving my self skills. Being patient and
              responsible for working help me implement completely assigned
              tasks.
            </motion.p>

            {/* buttons */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: "0.7" }}
              className="flex max-w-max
             gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg animate-bounce">
                <a href="https://drive.google.com/uc?export=download&id=1Ba0GKU_M2bTW2bGIA1PQ_OYGfrnS2yMd">
                  Download CV
                </a>
              </button>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: "0.7" }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a
                href="https://www.facebook.com/minhquang.tranhong/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a href="https://github.com/BobbyTr96" target="_blank">
                <FaGithub />
              </a>{" "}
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
