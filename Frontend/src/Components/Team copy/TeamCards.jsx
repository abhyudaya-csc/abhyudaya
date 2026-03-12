import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function TeamCards({ member, isActive, onClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const hoverScale = !isMobile ? "group-hover:scale-105" : "";
  const activeScale = isMobile && isActive ? "scale-105" : "";

  const bgEffect = !isMobile
    ? "group-hover:scale-110 group-hover:blur-xl group-hover:brightness-75 group-hover:opacity-0"
    : isActive
    ? "scale-110 blur-xl brightness-75 opacity-0"
    : "";

  const cutoutEffect = !isMobile
    ? "group-hover:scale-110 group-hover:-translate-y-6 group-hover:drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]"
    : isActive
    ? "scale-110 -translate-y-6 drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]"
    : "";

  const overlayEffect = !isMobile
    ? "opacity-0 group-hover:opacity-100"
    : isActive
    ? "opacity-100"
    : "opacity-0";

  const infoEffect = !isMobile
    ? "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
    : isActive
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  return (
    <div
      className="w-full max-w-xs mx-auto group cursor-pointer relative z-0 hover:z-30 transition-all duration-300"
      onClick={onClick}
    >
      <div
        className={`relative aspect-[3/4] rounded-3xl shadow-xl transition-all duration-500 overflow-visible hover:-translate-y-2 ${hoverScale} ${activeScale}`}
      >

        {/* Background Image */}
        <img
          src={member.Photo}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-700 ${bgEffect}`}
        />

        {/* Cutout Image */}
        <img
  src={member.PhotoCutout}
  alt={member.Name}
  className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-700 ${cutoutEffect} z-0`}
/>

       

        {/* Info Section */}
        <div
          className={`absolute bottom-0 w-full p-5 transition-all duration-500 ${infoEffect}`}
        >
          <h3 className="text-white font-bold text-lg">
            {member.Name}
          </h3>

          <p className="text-gray-300 text-sm mb-3">
            {member.Position}
          </p>

          <div className="flex gap-4">
            {member.LinkedInId && (
              <a
                href={member.LinkedInId}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white hover:text-blue-400 transition-transform duration-300 hover:scale-110"
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
                className="text-white hover:text-pink-400 transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default TeamCards;