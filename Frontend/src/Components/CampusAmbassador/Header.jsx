// File: components/Header.jsx
import { motion } from "framer-motion";

export default function Header({ itemVariants }) {
  const stats = [
    { value: "50+", label: "Ambassadors" },
    { value: "30+", label: "Colleges" },
    { value: "₹50K+", label: "In Prizes" },
    { value: "3rd", label: "Edition" },
  ];

  return (
    <motion.div className="text-center mb-14" variants={itemVariants}>
      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-7"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
      >
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        Abhyudaya&apos;25 &bull; Applications Open
      </motion.div>

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
          Campus Ambassador
        </span>
        <br />
        <span className="text-white">Program</span>
      </h1>

      <p className="text-lg sm:text-xl text-blue-200/70 max-w-2xl mx-auto mb-12 leading-relaxed">
        Be the official face of Abhyudaya&apos;25 at your college. Lead, inspire,
        and unlock exclusive rewards while building real-world skills.
      </p>

      {/* Stats row */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-blue-300/60 mt-1 uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}