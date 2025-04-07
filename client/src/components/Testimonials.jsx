import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  // Testimonial data array
  const testimonials = [
    {
      id: 1,
      quote: "Working with Samuel was a game-changer! His Tailwind CSS skills brought our UI to life with a clean, modern, and fully responsive design.",
      name: "Sarah M",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1665686307516-1915b9616526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmZW1hbGV8ZW58MHwwfHx8MTc0MzU5Njc5OXww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 2,
      quote: "Finding a great Laravel developer is tough, but Samuel exceeded all my expectations. His code is clean, efficient, and highly scalable.",
      name: "Daniel S",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 3,
      quote: "A rare talent who excels in Tailwind, Nuxt.js, and Laravel! He built a full-stack web app that is both powerful and beautiful.",
      name: "John M",
      role: "Startup CEO",
      image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 4,
      quote: "I struggled with bloated CSS files until Samuel revamped our frontend using Tailwind. The result? A lightweight, maintainable, and stunning interface!",
      name: "James L",
      role: "Frontend Engineer",
      image: "https://images.unsplash.com/photo-1473830394358-91588751b241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxwZXJzb258ZW58MHwwfHx8MTc0MzMyNzEzNHww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 5,
      quote: "I can't recommend Samuel enough! He transformed our Vue.js project into a high-performance Nuxt.js app with seamless API integration.",
      name: "Laura P",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8cGVyc29ufGVufDB8MHx8fDE3NDMzMjcxMzR8MA&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 6,
      quote: "If you're looking for a top-tier Laravel developer, look no further. Samuel delivers quality code and always meets deadlines.",
      name: "Lisa T",
      role: "Tech Founder",
      image: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8d29tYW58ZW58MHwwfHx8MTc0MzM5ODE0N3ww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 7,
      quote: "Thanks to Samuel, our Nuxt.js app now loads in a fraction of the time and ranks higher on search engines!",
      name: "Kevin H",
      role: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8bWVufGVufDB8MHx8fDE3NDMzOTgxOTd8MA&ixlib=rb-4.0.3&q=80&w=1080"
    }
  ];

  // Duplicate the testimonials to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Testimonial card component
  const TestimonialCard = ({ quote, name, role, image }) => (
    <div className="flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-black/20 dark:border-white/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
      <p className="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
        {quote}
      </p>
      <div className="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-black/10 dark:border-white/10">
        <div className="flex items-center w-3/4 gap-3 px-4 py-3">
          <img
            className="w-10 h-10 rounded"
            src={image}
            alt="avatar"
          />
          <div className="flex flex-col items-start justify-start flex-1 gap-0">
            <h5 className="text-base font-medium md:text-md">
              {name}
            </h5>
            <p className="text-sm md:text-base text-black/50 dark:text-white/30 mt-[-4px]">
              {role}
            </p>
          </div>
        </div>
        <div className="w-[1px] bg-black/10 dark:bg-white/20" />
        <div className="flex items-center justify-center max-w-full mx-auto">
          <a target="_blank" href="">
            <svg
              width={30}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="-mx-4 sm:-mx-10 md:-mx-14 lg:-mx-28 bg-white"
    >
      <div className="w-full min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-full py-5 mt-10 mb-20 mx-auto overflow-hidden">
          <div className="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
            <p className="text-sm sm:text-lg font-semibold text-[#3730ff]">
              Words That Matter
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
              See Why Clients Keep Coming Back
            </h3>
          </div>
          
          {/* Top Carousel */}
          <div
            style={{
              maskImage: "linear-gradient(to left, transparent 0%, white 20%, white 80%, transparent 95%)",
            }}
            className="relative flex justify-around gap-5 overflow-hidden shrink-0 mb-3"
          >
            <div className="max-w-full mx-auto">
              <div className="px-4 md:px-10 mx-auto w-full">
                <div className="animate-scrollReverse flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <TestimonialCard 
                      key={`top-${testimonial.id}-${index}`}
                      quote={testimonial.quote}
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Carousel */}
          <div
            style={{
              maskImage: "linear-gradient(to left, transparent 0%, white 20%, white 80%, transparent 95%)",
            }}
            className="relative flex justify-around gap-5 overflow-hidden shrink-0"
          >
            <div className="max-w-full mx-auto">
              <div className="px-4 md:px-10 mx-auto w-full">
                <div className="animate-scroll flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <TestimonialCard 
                      key={`bottom-${testimonial.id}-${index}`} 
                      quote={testimonial.quote}
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for the animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.25rem));
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-50% - 1.25rem));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scrollReverse {
          animation: scrollReverse 20s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default Testimonials;