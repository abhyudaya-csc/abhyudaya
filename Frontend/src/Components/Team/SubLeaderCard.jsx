import React from "react";

function SubLeaderCard({ faculty }) {
  return (
    <div className="w-64 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden text-center">
      
      {/* Image Section */}
      <img
        src={faculty.imgLink}
        alt={faculty.name}
        loading="lazy"
        className="w-full h-64 object-cover block hover:scale-105 transition duration-300 ease-in-out"
      />

      {/* Name and Position */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-gray-800">
          {faculty.name}
        </h3>

        <p className="text-md font-bold text-gray-600">
          {faculty.position}
        </p>
      </div>

    </div>
  );
}

export default SubLeaderCard;