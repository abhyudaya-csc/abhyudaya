import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Countdown = () => {
  const festivalDate = new Date(2026, 2, 27, 0, 0, 0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [animateSecond, setAnimateSecond] = useState(false);
  const [animateMinute, setAnimateMinute] = useState(false);
  const [animateHour, setAnimateHour] = useState(false);
  const [animateDay, setAnimateDay] = useState(false);

  useEffect(() => {
    let previousSeconds = -1;
    let previousMinutes = -1;
    let previousHours = -1;
    let previousDays = -1;

    const calculateTimeLeft = () => {
      const difference = festivalDate - new Date();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });

        if (seconds !== previousSeconds) {
          setAnimateSecond(true);
          setTimeout(() => setAnimateSecond(false), 800);
          previousSeconds = seconds;
        }

        if (minutes !== previousMinutes) {
          setAnimateMinute(true);
          setTimeout(() => setAnimateMinute(false), 800);
          previousMinutes = minutes;
        }

        if (hours !== previousHours) {
          setAnimateHour(true);
          setTimeout(() => setAnimateHour(false), 800);
          previousHours = hours;
        }

        if (days !== previousDays) {
          setAnimateDay(true);
          setTimeout(() => setAnimateDay(false), 800);
          previousDays = days;
        }
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const renderAnimatedNumber = (value) => (
    <div className="relative z-10 flex h-14 items-center justify-center overflow-hidden sm:h-16">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 30, opacity: 0, filter: "blur(6px)", scale: 0.92 }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ y: -26, opacity: 0, filter: "blur(6px)", scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="block text-[2.3rem] font-semibold leading-none text-white sm:text-[2.7rem]"
        >
          {value}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence initial={false}>
        <motion.div
          key={`flash-${value}`}
          initial={{ opacity: 0.45, scale: 0.75 }}
          animate={{ opacity: 0, scale: 1.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="pointer-events-none absolute inset-x-2 top-1/2 h-6 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(229,215,181,0.45),transparent_70%)]"
        />
      </AnimatePresence>
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full px-4 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,13,24,0.08)_0%,rgba(11,10,19,0.38)_26%,rgba(8,8,14,0.72)_60%,rgba(5,5,10,0.86)_100%)] px-4 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.52)] backdrop-blur-[10px] sm:px-7 sm:py-10 lg:px-10 lg:py-11">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-10 bottom-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(84,71,132,0.22),transparent_62%)] blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-2 flex items-center justify-center gap-3 text-center sm:mb-3">
            <Sparkles className="h-6 w-6 text-[#e5d7b5] sm:h-7 sm:w-7" />
            <h2 className="font-enchanted text-[2rem] tracking-[0.14em] text-[#f3e9cf] sm:text-[2.6rem] md:text-[3.1rem]">
              COMING SOON
            </h2>
            <Sparkles className="h-6 w-6 text-[#e5d7b5] sm:h-7 sm:w-7" />
          </div>

          <p className="mb-7 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#dfd4b4] sm:mb-8 sm:text-[0.8rem]">
            Abhyudaya 2026 Countdown
          </p>

          <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
            <div
              className={`relative flex min-h-28 min-w-30 flex-col items-center justify-center rounded-3xl border bg-[linear-gradient(180deg,rgba(17,17,27,0.84)_0%,rgba(8,8,13,0.74)_100%)] px-4 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-all duration-700 ease-in-out sm:min-w-[8.2rem] sm:px-5 sm:py-4 ${
                animateDay
                  ? "scale-[1.06] border-[#e5d7b5]/55"
                  : "scale-100 border-white/10"
              }`}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(229,215,181,0.24),transparent_62%)] transition-opacity duration-700 ${animateDay ? "opacity-100" : "opacity-55"}`}></div>
              {renderAnimatedNumber(formatTime(timeLeft.days))}
              <span className="relative z-10 mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#dfd4b4] sm:text-[0.75rem]">
                Days
              </span>
            </div>

            <div className="hidden items-center text-4xl font-light text-[#e5d7b5]/80 sm:flex md:text-5xl">
              :
            </div>

            <div
              className={`relative flex min-h-28 min-w-30 flex-col items-center justify-center rounded-3xl border bg-[linear-gradient(180deg,rgba(17,17,27,0.84)_0%,rgba(8,8,13,0.74)_100%)] px-4 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-all duration-700 ease-in-out sm:min-w-[8.2rem] sm:px-5 sm:py-4 ${
                animateHour
                  ? "scale-[1.06] border-[#e5d7b5]/55"
                  : "scale-100 border-white/10"
              }`}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(229,215,181,0.24),transparent_62%)] transition-opacity duration-700 ${animateHour ? "opacity-100" : "opacity-55"}`}></div>
              {renderAnimatedNumber(formatTime(timeLeft.hours))}
              <span className="relative z-10 mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#dfd4b4] sm:text-[0.75rem]">
                Hours
              </span>
            </div>

            <div className="hidden items-center text-4xl font-light text-[#e5d7b5]/80 sm:flex md:text-5xl">
              :
            </div>

            <div
              className={`relative flex min-h-28 min-w-30 flex-col items-center justify-center rounded-3xl border bg-[linear-gradient(180deg,rgba(17,17,27,0.84)_0%,rgba(8,8,13,0.74)_100%)] px-4 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-all duration-700 ease-in-out sm:min-w-[8.2rem] sm:px-5 sm:py-4 ${
                animateMinute
                  ? "scale-[1.06] border-[#e5d7b5]/55"
                  : "scale-100 border-white/10"
              }`}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(229,215,181,0.24),transparent_62%)] transition-opacity duration-700 ${animateMinute ? "opacity-100" : "opacity-55"}`}></div>
              {renderAnimatedNumber(formatTime(timeLeft.minutes))}
              <span className="relative z-10 mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#dfd4b4] sm:text-[0.75rem]">
                Mins
              </span>
            </div>

            <div className="hidden items-center text-4xl font-light text-[#e5d7b5]/80 sm:flex md:text-5xl">
              :
            </div>

            <div
              className={`relative flex min-h-28 min-w-30 flex-col items-center justify-center rounded-3xl border bg-[linear-gradient(180deg,rgba(17,17,27,0.84)_0%,rgba(8,8,13,0.74)_100%)] px-4 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-all duration-700 ease-in-out sm:min-w-[8.2rem] sm:px-5 sm:py-4 ${
                animateSecond
                  ? "scale-[1.06] border-[#e5d7b5]/55"
                  : "scale-100 border-white/10"
              }`}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(229,215,181,0.24),transparent_62%)] transition-opacity duration-700 ${animateSecond ? "opacity-100" : "opacity-55"}`}></div>
              {renderAnimatedNumber(formatTime(timeLeft.seconds))}
              <span className="relative z-10 mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#dfd4b4] sm:text-[0.75rem]">
                Secs
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Countdown;
