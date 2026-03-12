import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const X = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("March 26, 2026 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/90 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-2 md:px-6 md:py-4 min-w-[60px] md:min-w-[90px]">
        <span className="text-3xl md:text-5xl font-bold text-gray-900">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm text-white mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto px-4 text-center"
    >
      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-xl">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
          Join Us at Abhyudaya '26
        </h2>
        <p className="text-lg md:text-xl text-blue-900 mb-8">
          Experience the magic of culture, innovation, and celebration.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-3 md:gap-6 mb-10">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <a
          href="/events"
          className="inline-block px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-full transition-colors duration-300"
        >
          Explore Events
        </a>
      </div>
    </motion.div>
  );
};

export default X;
