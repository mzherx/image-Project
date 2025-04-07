import React, { useContext } from "react"; // Added useContext import
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Description = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    console.log("Button clicked - User:", user); // Debug log
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 px-6 md:px-12 lg:px-28"
    >
      <div className="text-center mb-12 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          Create AI Images
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600"
        >
          Turn your imagination into stunning visuals
        </motion.p>
      </div>

      <div className="flex flex-col gap-10 lg:gap-20 lg:flex-row items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <img
            src={assets.sample_img_1}
            alt="AI generated sample"
            className="w-full max-w-md xl:max-w-lg rounded-xl shadow-xl border-4 border-white transform hover:scale-[1.02] transition-all duration-300"
          />
          <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-md border">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
              AI Generated
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Introducing the <span className="text-blue-600">AI-Powered</span>{" "}
            Text to Image Generator
          </h2>

          <div className="space-y-4 text-gray-600 mb-8">
            <p className="text-lg leading-relaxed">
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tools
              transform your text into eye-catching images with just a few
              clicks.
            </p>
            <p className="text-lg leading-relaxed">
              Imagine it, describe it, and watch it come to life instantly.
              Simply type in a text prompt, and our cutting-edge AI will
              generate high-quality images in seconds.
            </p>
            <p className="text-lg leading-relaxed">
              From product visuals to character designs and portraits, even
              concepts that don't yet exist can be visualized effortlessly.
              Powered by advanced AI technology, the creative possibilities are
              limitless!
            </p>
          </div>

          <motion.button
            onClick={onClickHandler}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try It Now - It's Free
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
