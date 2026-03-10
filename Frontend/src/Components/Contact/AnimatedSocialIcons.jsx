import React from "react";
import { motion } from "framer-motion";

// Sleek Instagram icon with rotating gradient border + draw-on stroke
export const AnimatedInstagram = ({ size = 26 }) => {
  const id = "ig-" + Math.random().toString(36).slice(2, 6);
  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: size + 8, height: size + 8 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Spinning gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "conic-gradient(from 0deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)",
          padding: 2,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      {/* Icon SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="relative z-10"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="30%" stopColor="#e6683c" />
            <stop offset="60%" stopColor="#dc2743" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <motion.rect
          x="2" y="2" width="20" height="20" rx="6"
          stroke={`url(#${id})`} strokeWidth="1.8" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.circle
          cx="12" cy="12" r="5"
          stroke={`url(#${id})`} strokeWidth="1.8" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.circle
          cx="17.5" cy="6.5" r="1.5"
          fill={`url(#${id})`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4, type: "spring", stiffness: 500 }}
        />
      </svg>
    </motion.div>
  );
};

// Sleek WhatsApp icon with pulsing ring + draw-on stroke
export const AnimatedWhatsApp = ({ size = 26 }) => (
  <motion.div
    className="relative flex items-center justify-center cursor-pointer"
    style={{ width: size + 8, height: size + 8 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {/* Pulse ring */}
    <motion.div
      className="absolute inset-[-2px] rounded-full border-2 border-[#25D366]"
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.5, 0, 0.5],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
    />
    {/* Second pulse ring (delayed) */}
    <motion.div
      className="absolute inset-[-2px] rounded-full border border-[#25D366]"
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.3, 0, 0.3],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
    />
    {/* Icon SVG */}
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="relative z-10"
    >
      <motion.path
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.106-1.138l-.294-.176-2.87.852.852-2.87-.176-.294A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
        stroke="#25D366"
        strokeWidth="1"
        fill="#25D366"
        fillOpacity="0.15"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{ pathLength: 1, fillOpacity: 0.15 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="#25D366"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 300 }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  </motion.div>
);
