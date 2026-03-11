import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function LeaderCard({ member }) {
  return (
    <div className="w-full max-w-3xl flex items-center flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="md:w-3/7 w-full h-full max-h-[460px]">
        <LazyLoadImage
          src={member.imgLink}
          alt={member.name}
          loading="lazy" 
           className="w-full h-full object-cover hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-4/7 p-6 flex flex-col justify-start gap-4 h-full">
        <div>
          <h3 className=" text-xl md:text-3xl font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] text-center">
            {member.name}
          </h3>{" "}
          {/* Larger Name */}
          <p className="text-md md:text-xl text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] text-center  font-bold">
            {member.position}
          </p>{" "}
          {/* Medium Position */}
        </div>
        <p className="text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] italic text-md md:text-lg mt-4">
          {member.message}
        </p>{" "}
        {/* Message at the bottom */}
      </div>
    </div>
  );
}

export default LeaderCard;
