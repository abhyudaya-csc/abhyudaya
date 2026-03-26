import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AbhyudayaLive = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full px-4 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-[#e5d7b5]/30 bg-[linear-gradient(180deg,rgba(14,13,24,0.08)_0%,rgba(11,10,19,0.38)_26%,rgba(8,8,14,0.72)_60%,rgba(5,5,10,0.86)_100%)] px-4 py-12 shadow-[0_24px_90px_rgba(0,0,0,0.52)] backdrop-blur-[10px] sm:px-7 sm:py-14 lg:px-10 lg:py-16">
        {/* Animated background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,215,181,0.15),transparent_24%),radial-gradient(circle_at_center,rgba(229,215,181,0.08),transparent_42%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#e5d7b5]/40 to-transparent" />
          <div className="absolute inset-x-10 bottom-0 h-32 rounded-full bg-[radial-gradient(circle,rgba(229,215,181,0.18),transparent_62%)] blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Animated Sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 flex items-center justify-center gap-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-[#e5d7b5] sm:h-10 sm:w-10" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-enchanted text-4xl tracking-[0.12em] text-[#f3e9cf] sm:text-5xl md:text-6xl lg:text-7xl mb-4"
          >
            ABHYUDAYA IS LIVE
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-[#dfd4b4] mb-8 max-w-2xl leading-relaxed"
          >
            Experience the magic of culture, innovation, and celebration. Abhyudaya is now live and ready to enthrall you with unforgettable moments and incredible experiences.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/events")}
            className="relative inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#e5d7b5] to-[#f3e9cf] text-[#1a1a2e] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(229,215,181,0.4)] transition-all duration-300 group"
          >
            <span className="relative z-10">Explore Events</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5 relative z-10" />
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-[#e5d7b5] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          {/* Decorative sparkles */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Sparkles className="h-5 w-5 text-[#e5d7b5]/60" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#dfd4b4]/60">
              Festival Live Now
            </span>
            <Sparkles className="h-5 w-5 text-[#e5d7b5]/60" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AbhyudayaLive;
