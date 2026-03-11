import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Animation Wrapper */
const AnimatedDiv = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
};

export default function Aftermovies() {
  const [activeTab, setActiveTab] = useState("2025");

  const links = {
    2025: "https://www.youtube.com/embed/ziAZfHGa270",
    2024: "https://www.youtube.com/embed/ziAZfHGa270",
    2023: "https://www.youtube.com/embed/5pzCzYzePjw",
    2022: "https://www.youtube.com/embed/4qbL8_u3X14",
  };

  const stats = [
    {
      label: "Institutes",
      value: "50+",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      label: "Prize Pool",
      value: "4L+",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      label: "Events",
      value: "45+",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      label: "Footfall",
      value: "45K+",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
  ];

  return (
    <AnimatedDiv>
      <section className="relative z-10 mx-auto w-full max-w-300 px-2 pb-24 pt-12 sm:px-6 md:px-8">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');
            .font-cinzel { font-family: 'Cinzel Decorative', serif; }
          `}
        </style>

        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#b388eb]/10 blur-[150px] rounded-full pointer-events-none"></div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {/* CARD 1: The "About" Lore (Spans 2 columns, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-10 relative overflow-hidden group hover:bg-black/70 hover:border-white/20 transition-all duration-500"
          >
            {/* Decorative watermark text */}
            <div className="absolute -bottom-10 -right-10 text-[5rem] sm:text-[6rem] md:text-[8rem] font-cinzel font-black text-white/5 tracking-tighter pointer-events-none transform -rotate-6 group-hover:scale-105 transition-transform duration-1000">
              FEST
            </div>

            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-cinzel font-bold leading-none tracking-widest drop-shadow-lg wrap-break-word sm:text-4xl lg:text-5xl">
                <span className="block text-white mb-2">ABOUT</span>
                <span className="block bg-linear-to-r from-[#e8b5d6] to-[#b388eb] bg-clip-text text-transparent">
                  ABHYUDAYA
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                Abhyudaya is the annual Art, Cultural & Literary fest of MMMUT,
                Gorakhpur. A vibrant confluence of creativity and passion where
                art breathes, culture thrives, and literature resonates.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                This year's theme:{" "}
                <span className="font-enchanted font-bold text-black bg-white/80 px-2 py-0.5 rounded-sm mx-1 tracking-widest drop-shadow-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  AN ENCHANTED ESCAPADE
                </span>{" "}
                — a kaleidoscopic fusion of tradition and innovation.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: The Aftermovie (Spans 2 columns, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative min-h-87.5 overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-2xl group lg:col-span-2 lg:row-span-2"
          >
            <iframe
              width="100%"
              height="100%"
              src={links[activeTab]}
              title={`ABHYUDAYA Aftermovie ${activeTab}`}
              className="absolute inset-0 h-full w-full z-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/80 via-transparent to-black/80"></div>

            {/* Top Header & Tabs inside the video card */}
            <div className="absolute top-0 left-0 w-full p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-20 pointer-events-none">
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white tracking-widest uppercase drop-shadow-xl">
                Aftermovie
              </h3>

              <div className="flex gap-1 p-1 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 pointer-events-auto">
                {['2022', '2023', '2024', '2025'].map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveTab(year)}
                    className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeTab === year
                        ? "bg-white text-black shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom YouTube Logo */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20 pointer-events-none">
              <div className="bg-white rounded-lg p-1.5 shadow-lg">
                <svg
                  className="w-5 h-4 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-md">
                Official Trailer {activeTab}
              </span>
            </div>
          </motion.div>

          {/* CARDS 3-6: The Stats (1 column, 1 row each) */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-2 hover:border-white/20 hover:bg-black/70 lg:col-span-1"
            >
              {/* Glowing orb effect on hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#e8b5d6]/30 blur-2xl rounded-full group-hover:bg-[#b388eb]/40 transition-colors duration-500 text-center flex"></div>

              <svg
                className="w-8 h-8 text-white/50 mb-3 group-hover:text-[#e8b5d6] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d={stat.icon}
                />
              </svg>

              <span className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight drop-shadow-md z-10">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-[#dcbfe0] uppercase tracking-[0.2em] font-medium z-10 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedDiv>
  );
}
