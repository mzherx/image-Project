import React, { useContext } from 'react'; // Added useContext import
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Steps = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 px-4"
    >
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          How it works
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Transform words into stunning images with our AI-powered magic
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="mb-6 p-4 bg-[#e0e9ff] rounded-full">
              <img width={60} src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{item.title}</h2>
            <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
            <div className="mt-6 text-blue-600 font-medium flex items-center">
              Step {index + 1}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <button 
          onClick={onClickHandler} 
          className="px-8 py-3 bg-[#1c37ff] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Get Started Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Steps;