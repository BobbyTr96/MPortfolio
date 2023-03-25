import React from "react";
//intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//varians
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className=" container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen lg:h-[100%]">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="hidden md:flex flex-1 bg-about bg-contain bg-no-repeat h-[70vh] mix-blend-lighten bg-top  "
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Fresher Front-end Developer</h3>
            <p className="mb-6">
              Hi ! My name is Quang , I have just completed training at
              CyberSoft information technology company in front-end, I look
              forward to having the opportunity to go further in the programming
              industry , i really enjoy programing , resolving problem and
              created quanlity product that make me feel excited. I constantly
              learn more knowlege and technology because my orientation is to
              become a senior front-end developer in the future
            </p>

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {/* {inView ? <CountUp start={0} end={3} duration={3} /> : null} */}
                  3
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <a href="https://drive.google.com/uc?export=download&id=1Ba0GKU_M2bTW2bGIA1PQ_OYGfrnS2yMd">
                  Download CV
                </a>
              </button>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
