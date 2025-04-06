import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { delay, motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center
     text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-[#1d37ff] inline-flex text-center gap-2
         bg-[#ffffffb9] px-6 py-1 rounded-full border border-[#1d37ff]  "
      >
        <p>Best Text to image generator</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className="text-4xl max-w-[300px] sm:text-7xl 
        sm:max-w-[800px]  mx-auto mt-10 text-center"
      >
        Create stunning <span className="text-[#1d37ff]">images </span>from text
        in no time
      </motion.h1>

      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {" "}
        Create without limits. Whether you're an artist, a storyteller, or just
        someone with a vivid imagination, our AI turns your words into powerful
        visuals in seconds.
      </motion.p>

      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-[#121212] w-auto
    mt-8 px-12 py-3 flex items-center gap-2 rounded-full
    hover:bg-[#1d37ff] hover:shadow-lg hover:shadow-blue-500/30
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    transition-all duration-300 ease-in-out"
        whileHover={{ scale: 1.07, color: "#fff" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { delay: 0.8, duration: 1 },
          y: { delay: 0.8, duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] },
        }}
      >
        Generate Images
        <img
          className="h-6 animate-pulse"
          src={assets.star_group}
          alt="sparkle"
        />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-16 gap-3"
      >
        {[
          assets.sample_img_1,
          assets.sample_img_2,
          assets.sample_img_3,
          assets.sample_img_4,
          assets.sample_img_5,
          assets.sample_img_6,
        ].map((image, index) => (
          <motion.img
            whileHover={{ scale: 1.05, duration: 0.1 }}
            className="rounded hover:scale-105 transition-all
         duration-300 cursor-pointer max-sm:w-10"
            src={image}
            alt=""
            key={index}
            width={70}
          />
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-6 text-neutral-600"
      >
        Generated images from imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;
