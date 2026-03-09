import React from 'react';

const ArtistGallery = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-gray-400">
          Stay tuned for artist announcements!
        </p>
      </div>
    </section>
  );
};

export default ArtistGallery;