import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    if (user) {
      navigate("/generate");
    } else {
      setShowLogin(true);
    }
  };

  const handleExamplesClick = () => {
    navigate("/buy");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full px-5 py-16 md:py-[150px] bg-gradient-to-br f"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <div className="flex w-full mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
            >
              Turn Your Imagination <br className="hidden lg:block" />
              Into Stunning Visuals
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600"
            >
              Create breathtaking AI-generated images with just words. Our platform transforms 
              your text prompts into unique, high-quality visuals in seconds - no design skills needed!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerateClick}
                className="px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Generate Your First Image
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExamplesClick}
                className="px-8 py-4 text-lg font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                See Pricing
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GenerateBtn;