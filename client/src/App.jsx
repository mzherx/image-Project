import React, { useContext } from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { showLogin } = useContext(AppContext);
  
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-[#ffffff]">
      <ToastContainer
  position="bottom-right"
  autoClose={5000}
  limit={3}
  hideProgressBar={false}
  newestOnTop
  closeOnClick={false} // Better UX for premium design
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  transition={Zoom}
  theme="dark"
  toastStyle={{
    backdropFilter: "blur(12px)",
    background: "rgba(15, 23, 42, 0.85)", // Dark slate with transparency
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "14px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.28)",
    color: "#fff",
    padding: "16px 20px",
    width: "380px", // Slightly wider for premium feel
    fontFamily: "'Inter', sans-serif"
  }}
  progressStyle={{
    background: "linear-gradient(90deg, #8B5CF6, #EC4899)", // Purple-pink gradient
    height: "3px",
    borderRadius: "3px"
  }}
  bodyClassName="toast-body-premium"
  closeButton={({ closeToast }) => (
    <button 
      onClick={closeToast}
      className="text-white/60 hover:text-white transition-all"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  )}
/>

      
      <Navbar />
      {showLogin && <Login />}
      
      <main className="min-h-[calc(100vh-160px)]"> {/* Adjust based on your header/footer height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;