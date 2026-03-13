import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function TeamCards({ member, isOpen, onClick }) {
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(media.matches);
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-xs mx-auto cursor-pointer group"
      onClick={onClick}
      whileHover={!isMobile ? "hover" : undefined}
      initial="rest"
      animate={isMobile ? (isOpen ? "hover" : "rest") : "rest"}
    >
      <div className="relative aspect-[3/4] rounded-3xl shadow-xl overflow-visible">

        {/* Image Container */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <motion.div
            className="absolute inset-0"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >

            {/* Background */}
            <motion.img
              src={member.Photo}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              variants={{
                rest: { filter: "blur(0px) brightness(1)" },
                hover: { filter: "blur(6px) brightness(0.7)" }
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Cutout */}
            <motion.img
              src={member.PhotoCutout}
              alt={member.Name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              variants={{
                rest: { y: 0 },
                hover: { y: -12 }
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            />
          </motion.div>
        </div>

        {/* Gradient */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Info */}
        <motion.div
          className="absolute bottom-0 w-full p-5"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-white font-bold text-lg">
            {member.Name}
          </h3>

          <p className="bg-yellow-400/80 text-black text-sm font-semibold px-3 py-1 rounded-md mb-3 inline-block">
            {member.Position}
          </p>

          <div className="flex gap-4">
            {member.LinkedInId && (
              <a
                href={member.LinkedInId}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 bg-white/90 text-blue-600 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin size={16} />
              </a>
            )}

            {member.InstaId && (
              <a
                href={`https://www.instagram.com/${member.InstaId}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 bg-white/90 text-pink-500 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram size={16} />
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default TeamCards;