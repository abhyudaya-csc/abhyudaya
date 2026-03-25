
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Floating fireflies for the magical background effect
const Fireflies = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(40)].map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const animationDuration = 5 + Math.random() * 10;
        const animationDelay = Math.random() * 5;

        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full firefly"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animation: `float ${animationDuration}s ease-in-out infinite alternate`,
              animationDelay: `${animationDelay}s`,
              boxShadow: '0 0 15px 4px rgba(232, 181, 214, 0.6)',
            }}
          />
        );
      })}
    </div>
  );
};

const MerchCard = ({ 
  title, 
  image, 
  features, 
  isSelected, 
  onClick, 
  accentColor 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative w-full cursor-pointer transition-all duration-700 ease-out transform ${
        isSelected ? 'scale-100 z-20' : 'scale-95 opacity-100 hover:opacity-100 z-10'
      }`}
    >
      {/* Outer Glow when selected */}
      <div className={`absolute inset-0 rounded-[2.5rem] blur-2xl transition-opacity duration-700 ${
        isSelected ? 'opacity-55' : 'opacity-0'
      }`} style={{ backgroundColor: accentColor }}></div>

      {/* Main Glass Card */}
      <div className={`relative h-full bg-black/80 backdrop-blur-xl rounded-[2rem] p-4 sm:p-5 flex flex-col border transition-colors duration-500 overflow-hidden ${
        isSelected ? 'border-white/45 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'border-white/25 shadow-2xl'
      }`}>
        
        {/* Top Badges */}
        <div className="flex justify-between items-center mb-4 relative z-20">
          <span className="px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase bg-black/60 backdrop-blur-md rounded-full border border-white/30">
            Limited Drop
          </span>
          
          <span className={`px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase rounded-full border transition-all duration-500 ${
            isSelected 
              ? 'bg-gradient-to-r from-[#b388eb] to-[#e8b5d6] border-transparent shadow-[0_0_20px_rgba(232,181,214,0.5)]' 
              : 'bg-transparent border-transparent opacity-0'
          }`}>
            Selected
          </span>
        </div>

        {/* Floating T-Shirt Image */}
        <div className="relative w-full h-[140px] sm:h-[180px] mb-2 sm:mb-4 flex items-center justify-center">
          {/* Ambient glow behind the shirt */}
          <div className="absolute w-3/4 h-3/4 rounded-full blur-3xl opacity-45 pointer-events-none" style={{ backgroundColor: accentColor }}></div>
          
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-1000 ${
              isSelected ? 'animate-float-slow scale-110' : 'scale-100 grayscale-[15%]'
            }`}
          />
        </div>

        {/* Content Details */}
        <div className="mt-auto relative z-20">
          <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mb-2 tracking-wide drop-shadow-md">
            {title}
          </h3>
          
          <ul className="space-y-1 sm:space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-100 text-xs sm:text-sm font-light tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full mr-3 shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ backgroundColor: accentColor }}></span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Action Button (Only visible on selected) */}
          <div className={`mt-2 sm:mt-4 overflow-hidden transition-all duration-500 ${isSelected ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-center text-yellow-300 font-bold text-xs sm:text-sm mb-2 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]">
              ₹250/- (first 50 orders)
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScp7Rh7GPUFRA4YVrq_GSOI9oRym2x_2CZDdC_Jn0EwWRPZgw/viewform" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full text-center py-2 sm:py-3 rounded-xl bg-white text-black font-bold tracking-widest uppercase text-[10px] sm:text-xs hover:bg-gray-200 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Pre-Order Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

const FlipCard = () => {
  const [selectedItem, setSelectedItem] = useState('black');

  const merchData = {
    black: {
      id: 'black',
      title: 'Black T-Shirt',
      image: 'https://i.ibb.co/603GJhHf/Black-Tee.jpg',
      accentColor: '#b388eb', // Purple glow
      features: [
        '100% Premium Cotton',
        'Classic Unisex Fit',
        'Available in XS to 2XL',
        'Premium Quality Stitching'
      ]
    },
    white: {
      id: 'white',
      title: 'White T-Shirt',
      image: 'https://i.ibb.co/8nsQ7dKK/mock-WT-Recovered.jpg',
      accentColor: '#e8b5d6', // Pink glow
      features: [
        'Exclusive Premium Design',
        'Breathable Cotton Fabric',
        'Machine Washable',
        'Tailored Perfect Fit'
      ]
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');

          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-80px) translateX(30px); opacity: 0; }
          }

          @keyframes float-slow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        `}
      </style>

      <section className="relative w-full flex flex-col font-sans text-white py-4 sm:py-8 z-10">
        
        {/* Subtle colored glow matching the selected shirt - using absolute position inside the container rather than fixed */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[3rem] opacity-45 mx-4 max-w-7xl lg:mx-auto mt-10" style={{ backgroundColor: merchData[selectedItem].accentColor, filter: 'blur(200px)' }}></div>

        <Fireflies />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center">
          
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-black tracking-widest mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              OFFICIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b388eb] to-[#e8b5d6]">MERCH</span>
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm tracking-widest uppercase font-light">
              An Enigmatic Ensemble
            </p>
          </motion.div>

          {/* Merch Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-8 lg:gap-12 w-full max-w-5xl mb-8">
            <MerchCard 
              {...merchData.black} 
              isSelected={selectedItem === 'black'}
              onClick={() => setSelectedItem('black')}
            />
            
            <MerchCard 
              {...merchData.white} 
              isSelected={selectedItem === 'white'}
              onClick={() => setSelectedItem('white')}
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default FlipCard;
