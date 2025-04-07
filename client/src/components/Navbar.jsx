import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import styles from "./small-components-css/button-navbar.module.css";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center justify-between pt-5 sm:pt-5 ">
      <Link to="/">
        <img
          src={assets.logo}
          alt=""
          className="w-28
         sm:w-32 lg:w-42"
        />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100
                     px-4 sm:px-6 py-1.5 sm:py-3 rounded-full
                     hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits Left : {credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4 ">Hi , {user.name}</p>
            <div className="relative group">
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img
                  src={assets.profile_icon}
                  className="w-6 h-6"
                  alt="Profile"
                />
              </button>
              <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden">
                <div className="py-4">
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5 ">
            <p onClick={() => navigate("/buy")} className="cursor-pointer hover:transition-all duration-700  hover:text-[#241dff] ">
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className={styles.shinyCta}
            >
              <span>Login</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;