import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import "./small-components-css/login.css";
import { premiumToast } from "../toast";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);
          setShowLogin(false);
        } else {
          premiumToast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);
          setShowLogin(false);
        } else {
          premiumToast.error(data.message);
          
        }
      }
    } catch (error) {
      premiumToast.error(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="form bg-white p-10 rounded-xl relative"
      >
        <h1 className="text-center text-4xl font-bold text-neutral-700 mb-2">{state}</h1>

        {state !== "Login" && (
          <span className="input-span">
            <label htmlFor="name" className="label">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </span>
        )}

        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </span>

        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </span>

        <span className="span">
          <a href="#">Forgot password?</a>
        </span>

        <input
          className="submit"
          type="submit"
          value={state === "Login" ? "Log in" : "Create account"}
        />

        {state === "Login" ? (
          <span className="span">
            Don't have an account?{" "}
            <a onClick={() => setState("Sign Up")} href="#">Sign up</a>
          </span>
        ) : (
          <span className="span">
            Already have an account?{" "}
            <a onClick={() => setState("Login")} href="#">Login</a>
          </span>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="close"
          className="absolute top-4 right-4 w-5 h-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;