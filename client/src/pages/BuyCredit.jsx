import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { premiumToast } from '../toast';

const stripePromise = loadStripe('paste your stripe key');

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token } = useContext(AppContext);

  const handlePurchase = async (planId) => {
    if (!user) {
      premiumToast.info('Please login to purchase credits');
      return;
    }

    try {
      const stripe = await stripePromise;
      const userId = localStorage.getItem('userId');
      
      if (!userId) {
        throw new Error('User ID is missing');
      }

      const response = await fetch(`${backendUrl}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ planId, userId }),
      });

      const session = await response.json();

      if (response.ok && session.url) {
        window.location.href = session.url;
      } else {
        throw new Error(session.message || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Payment error:', error);
      premiumToast.error(error.message || 'Payment processing failed');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white rounded-2xl sm:mt-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full shadow-sm"
          >
            Pricing Plans
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Choose Your Perfect Plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            Get more credits and create stunning AI-generated images with our flexible pricing options
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {plan.id}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {plan.desc}
                </p>
                <div className="mt-8 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-lg font-semibold leading-6 text-gray-600">
                    / {plan.credits} credits
                  </span>
                </div>
                <div className="mt-8">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePurchase(plan.id)}
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    {user ? 'Get Started' : 'Sign Up to Purchase'}
                  </motion.button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 text-center">
                <p className="text-sm text-gray-500">
                  {plan.credits} AI image generations
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500"
          >
            Need a custom plan? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Contact us</a>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default BuyCredit;