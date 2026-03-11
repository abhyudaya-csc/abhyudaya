import { MapPin } from "lucide-react";
import Abhyudaya from "../../assets/Logo-images/Abhyudaya-combined.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero2Section() {
  return (
    <section className="scene-content relative flex min-h-dvh w-full select-none flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-8 font-sans text-white sm:px-6 lg:px-8">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');

          .font-cinzel { font-family: 'Cinzel Decorative', serif; }
          
          .theme-title-shadow {
            text-shadow: 
              0 8px 30px rgba(0, 0, 0, 0.6),
              0 2px 4px rgba(0, 0, 0, 0.75);
          }

          .theme-copy-shadow {
            text-shadow: 0 2px 18px rgba(0, 0, 0, 0.72);
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_top,rgba(82,63,126,0.22),transparent_30%),linear-gradient(180deg,rgba(7,6,18,0.12)_0%,rgba(6,6,14,0.38)_35%,rgba(4,4,10,0.72)_70%,rgba(5,5,10,0.84)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[38vh] bg-[linear-gradient(180deg,rgba(7,7,12,0)_0%,rgba(5,5,10,0.5)_22%,rgba(5,5,10,0.86)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto flex w-full max-w-5xl grow flex-col items-center justify-center text-center"
      >
        <div className="relative w-full max-w-240 overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,13,24,0.06)_0%,rgba(11,10,19,0.32)_24%,rgba(8,8,14,0.66)_56%,rgba(5,5,10,0.82)_100%)] px-4 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.52)] backdrop-blur-[10px] sm:px-7 sm:py-10 lg:px-10 lg:py-11">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(84,71,132,0.18),transparent_62%)] blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <img
              src={Abhyudaya}
              alt="Abhyudaya logo"
              className="w-full max-w-52 opacity-95 drop-shadow-[0_8px_32px_rgba(255,255,255,0.2)] sm:max-w-72 lg:max-w-84"
            />

            <h2 className="theme-title-shadow mt-3 max-w-4xl font-enchanted text-[2.2rem] leading-[0.9] tracking-[0.14em] text-white sm:mt-4 sm:text-[3.45rem] md:text-[4.4rem] lg:text-[5.1rem]">
              An Enchanted Escapade
            </h2>

            <div className="theme-copy-shadow mt-5 flex w-full max-w-4xl flex-col items-center gap-5 px-1 text-center sm:mt-7 sm:px-3 lg:mt-8">
              <p className="max-w-3xl text-[0.95rem] font-light leading-relaxed text-white/88 sm:text-[1.02rem] lg:text-[1.18rem]">
                Step into a vibrant celebration where India&apos;s timeless
                heritage meets modern style.
              </p>

              <p className="max-w-4xl text-[0.9rem] font-light leading-[1.85] text-white/82 sm:text-[0.98rem] lg:text-[1.12rem]">
                Abhyudaya,{" "}
                <span className="font-enchanted text-base tracking-[0.18em] text-white sm:text-[1.45rem]">
                  AN ENCHANTED ESCAPADE
                </span>{" "}
                is a kaleidoscopic fusion of tradition and innovation, where
                ancient rhythms, contemporary beats, and vibrant colors come
                alive.
              </p>

              <p className="max-w-3xl text-[0.9rem] font-light leading-relaxed text-white/84 sm:text-[0.98rem] lg:text-[1.1rem]">
                Join us on this mesmerizing journey of discovery and creativity.
              </p>
            </div>

            <div className="mt-7 flex w-full max-w-3xl flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:mt-10">
              <Link
                to="/SignInForm"
                className="flex min-h-20 flex-1 items-center justify-center rounded-3xl border border-[#e5d7b5]/35 bg-[linear-gradient(180deg,rgba(229,215,181,0.2)_0%,rgba(167,139,82,0.16)_100%)] px-4 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl transition hover:border-[#e5d7b5]/60 hover:bg-[linear-gradient(180deg,rgba(229,215,181,0.3)_0%,rgba(167,139,82,0.22)_100%)]"
              >
                <span className="font-enchanted text-[1.05rem] tracking-[0.12em] text-[#f3e9cf] sm:text-[1.2rem]">
                  Register Now
                </span>
              </Link>

              <div className="flex min-h-20 flex-1 items-center gap-3 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,17,27,0.84)_0%,rgba(8,8,13,0.72)_100%)] px-4 py-3 text-left shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl">
                <div className="rounded-lg bg-white/5 p-2">
                  <MapPin className="h-4 w-4 text-[#e5d7b5]" />
                </div>
                <div>
                  <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#dfd4b4]">
                    Venue
                  </p>
                  <p className="text-base font-normal tracking-wide text-white/92">
                    MMMUT, Gorakhpur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
