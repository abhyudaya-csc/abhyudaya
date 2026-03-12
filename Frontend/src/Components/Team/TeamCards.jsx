import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function TeamCards({ member, onClick }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.div
      className="w-full max-w-xs mx-auto cursor-pointer group"
      onClick={onClick}
      whileHover={!isMobile ? "hover" : ""}
      initial="rest"
      animate="rest"
    >

      <div className="relative aspect-[3/4] rounded-3xl shadow-xl overflow-visible">

        {/* Inner wrapper to prevent grey overflow */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">

          {/* Portrait container */}
          <motion.div
            className="absolute inset-0"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18
            }}
          >

            {/* Background Image */}
            <motion.img
              src={member.Photo}
              alt=""
              className="absolute inset-0 rounded-3xl w-full h-full object-cover"
              variants={{
                rest: { filter: "blur(0px) brightness(1)" },
                hover: { filter: "blur(6px) brightness(0.7)" }
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Cutout Image */}
            <motion.img
              src={member.PhotoCutout}
              alt={member.Name}
              className="absolute inset-0 rounded-3xl w-full h-full object-cover"
              variants={{
                rest: { y: 0 },
                hover: { y: -12 }
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18
              }}
            />

          </motion.div>

        </div>

        {/* Gradient for readability */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Info Section */}
        <motion.div
          className="absolute bottom-0 w-full p-5"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.35 }}
        >

          <h3 className="text-white font-bold text-lg drop-shadow-[0px]">
            {member.Name}
          </h3>

          <p className="bg-yellow-400/80 text-black text-sm font-semibold px-3 py-1 rounded-md mb-3 shadow-sm inline-block">
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
                <FaLinkedin size={18} />
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
                <FaInstagram size={18} />
              </a>
            )}

          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}

export default TeamCards;