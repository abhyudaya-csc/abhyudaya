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

  const hoverScale = !isMobile ? "group-hover:scale-100" : "";
  const activeScale = isMobile && isActive ? "scale-100" : "";

  const bgEffect = !isMobile
    ? "group-hover:blur-sm group-hover:brightness-75"
    : isActive
      ? "blur-sm brightness-75"
      : "";

  const cutoutEffect = !isMobile ? "" : isActive ? "" : "";

  const overlayEffect = !isMobile
    ? "opacity-0 group-hover:opacity-100"
    : isActive
      ? "opacity-100"
      : "opacity-0";

  const infoEffect = !isMobile
    ? "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
    : isActive
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4";

  return (
    <div
      className="w-full mx-auto group cursor-pointer relative transition-all duration-300"
      onClick={onClick}
    >
      <div
        className={`relative aspect-[3/4] rounded-2xl shadow-xl transition-all duration-500 overflow-hidden ${hoverScale} ${activeScale}`}
      >
        {/* Background Image */}
        <img
          src={member.Photo}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500 ${bgEffect}`}
        />

        {/* Cutout Image */}
        <img
          src={member.PhotoCutout}
          alt={member.Name}
          className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500 ${cutoutEffect}`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Info Section */}
        <div
          className={`absolute bottom-0 w-full p-3 lg:p-4 transition-all duration-500 ${infoEffect}`}
        >
          <h3 className="text-white font-bold text-sm lg:text-base truncate">
            {member.Name}
          </h3>

          <p className="text-gray-300 text-xs lg:text-sm mb-2 truncate">
            {member.Position}
          </p>

          <div className="flex gap-3">
            {member.LinkedInId && (
              <a
                href={member.LinkedInId}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white hover:text-blue-400 transition-transform duration-300 hover:scale-110"
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
                className="text-white hover:text-pink-400 transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
