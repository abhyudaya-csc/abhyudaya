import { CalendarDays, MapPin } from "lucide-react";
import Abhyudaya from "../../assets/Logo-images/Abhyudaya-combined.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Fireflies = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const animationDuration = 5 + Math.random() * 10;
        const animationDelay = Math.random() * 5;

        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full firefly"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animation: `float ${animationDuration}s ease-in-out infinite alternate`,
              animationDelay: `${animationDelay}s`,
              boxShadow: '0 0 12px 3px rgba(253, 224, 71, 0.5)',
            }}
          />
        );
      })}
    </div>
  );
};

export default function Hero2Section() {
  const user = useSelector((state) => state.user);

  return (
    <section className="scene-content relative w-full min-h-[100dvh] pb-16 pt-8 flex flex-col items-center justify-center font-sans text-white select-none overflow-hidden">
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');

          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-80px) translateX(30px); opacity: 0; }
          }

          .font-cinzel { font-family: 'Cinzel Decorative', serif; }
          
          .text-shadow-magic {
            text-shadow: 
              0 4px 24px rgba(0,0,0,0.9), 
              0 0 40px rgba(0,0,0,0.8),
              0 2px 4px rgba(0,0,0,1);
          }
        `}
      </style>

      {/* Floating Fireflies Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Fireflies />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 flex-grow"
      >
        {/* Background glows from incoming branch */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
        
        {/* Main Titles */}
        <div className="mb-6 sm:mb-8 mt-2 sm:mt-4 flex flex-col items-center">
          <img
            src={Abhyudaya}
            alt="Abhyudaya logo"
            className="w-full max-w-[280px] sm:max-w-[400px] mb-4 sm:mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          />
          <div className="inline-block px-5 sm:px-8 py-2 sm:py-3 bg-white/80 backdrop-blur-md border border-white/40 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-enchanted tracking-widest drop-shadow-sm">
              An Enchanted Escapade
            </h2>
          </div>
        </div>

        {/* Text Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left mb-8 block max-w-5xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-5 sm:p-6 rounded-[1.5rem] shadow-2xl hover:bg-black/70 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-yellow-200/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p className="text-sm sm:text-[15px] font-light text-gray-200 leading-relaxed">
              Step into a vibrant celebration where India's timeless heritage meets modern style.
            </p>
          </div>
          
          {/* Card 2 (Highlight Card) */}
          <div className="bg-black/60 backdrop-blur-md border border-[#d8b4e2]/30 p-5 sm:p-6 rounded-[1.5rem] shadow-2xl hover:bg-black/70 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#d8b4e2]/50 to-transparent"></div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-[#d8b4e2]/30 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-[#d8b4e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <p className="text-sm sm:text-[15px] font-light text-gray-200 leading-relaxed">
              Abhyudaya, <span className="font-enchanted font-bold text-black bg-white/80 px-2 py-0.5 rounded-sm mx-1 tracking-widest drop-shadow-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]">AN ENCHANTED ESCAPADE</span> is a kaleidoscopic fusion of tradition and innovation, where ancient rhythms and contemporary beats come alive.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-5 sm:p-6 rounded-[1.5rem] shadow-2xl hover:bg-black/70 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-blue-200/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-sm sm:text-[15px] font-light text-gray-200 leading-relaxed">
              Join us on this mesmerizing journey of discovery and creativity! Experience the magic firsthand.
            </p>
          </div>
          
        </div>

        {/* Bottom Info Cards & Registration */}
        <div className="relative z-10 w-full px-2 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-auto">
          
          <div className="flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] min-w-[220px]">
             <div className="p-1.5 bg-white/5 rounded pl-2">
                 <CalendarDays className="h-4 w-4 text-amber-100" />
             </div>
             <div className="text-left">
               <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0">Dates</p>
               <p className="text-sm font-medium text-white tracking-wide">26 Mar - 29 Mar, 2026</p>
             </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] min-w-[220px]">
            <div className="p-1.5 bg-white/5 rounded pl-2">
              <MapPin className="h-4 w-4 text-amber-100" />
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-0">Venue</p>
              <p className="text-sm font-medium text-white tracking-wide">MMMUT, Gorakhpur</p>
            </div>
          </div>

          {!user && (
            <Link
              to="/profile"
              className="rounded-full bg-linear-to-r from-amber-200 to-rose-200 px-6 py-3 text-sm font-bold tracking-widest uppercase text-gray-900 shadow-[0_0_20px_rgba(253,224,71,0.3)] transition-all duration-300 hover:scale-105 hover:from-rose-300 hover:to-amber-300 mx-2"
            >
              Register Now
            </Link>
          )}

        </div>

      </motion.div>
    </section>
  );
}