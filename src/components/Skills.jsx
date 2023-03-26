import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
//varians
import { fadeIn } from "../variants";

//services data
const skills = [
  {
    name: "HTML/CSS",
    description: " HTML5, CSS3, Bootstrap 4, SCSS/SASS, Responsive .",
  },
  {
    name: "Javascript",
    description: " ES6, Axios, RESTfullAPI .",
  },
  {
    name: "ReactJS",
    description: " ReactJS basic, Router, Redux (Toolkit), Hooks .",
  },
  {
    name: "Version Control",
    description: " Git Basic .",
  },
  {
    name: "Soft skills",
    description: " Teamwork, self study .",
  },
];

const Skills = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Technical Skills</h2>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Skills list */}
            <div>
              {skills.map((service, index) => {
                // destructure skills
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[100px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight animate-pulse">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
