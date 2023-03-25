import React from "react";
// motion
import { motion } from "framer-motion";
//varians
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className=" section h-screen" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-bold mb-2 tracking-wide">
                Get in touch
              </h4>
              <h4 className=" leading-tight mb-12 lg:max-w-[432px]">
                <span className="font-semibold">Thanks You</span> to spend your
                time visiting my page! Please feel free to send me some
                messages, hope that we can have a chance to work together. !
              </h4>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            method="POST"
            action="https://formspree.io/f/xwkjnyzn"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 pb-16 items-start"
          >
            {/* Name */}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              placeholder="Your name*"
            />

            {/* email */}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="email"
              placeholder="Your email*"
            />

            {/* Subject */}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="subject"
              type="text"
              placeholder="Subject*"
            />

            {/* textarea */}
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full  placeholder:text-white focus:border-accent transition-all resize-none mb-12 "
              placeholder="Your message*"
              name="message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
