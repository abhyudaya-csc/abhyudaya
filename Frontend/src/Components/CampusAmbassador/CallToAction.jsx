// File: components/CallToAction.jsx
import { motion } from "framer-motion";

export default function CallToAction({ itemVariants }) {
  return (
    <motion.div
      className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 text-center"
      variants={itemVariants}
    >
      <p className="text-white font-bold text-xl mb-1">⏳ Applications Closing Soon!</p>
      <p className="text-blue-300/60 text-sm mb-5">
        Don&apos;t miss your chance. Join the growing community of campus leaders across India.
      </p>
      <a
        href="mailto:campus@abhyudaya.in"
        className="inline-flex items-center gap-2 bg-white/5 border border-blue-400/30 text-blue-300 hover:text-blue-200 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 text-sm font-medium px-5 py-2.5 rounded-full"
      >
        <span>✉️</span>
        campus@abhyudaya.in
      </a>
    </motion.div>
  );
}