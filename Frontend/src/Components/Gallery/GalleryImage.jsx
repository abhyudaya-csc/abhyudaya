import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const GalleryImage = ({ unique }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden cursor-pointer select-none mb-6">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="w-full h-64 bg-gray-700 animate-pulse rounded-lg">
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
      )}
      <LazyLoadImage
        src={unique}
        alt="Gallery Image"
        className={`w-full h-auto select-none transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0 absolute"}`}
        effect="blur"
        loading="lazy"
        afterLoad={() => setIsLoaded(true)}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default GalleryImage;
