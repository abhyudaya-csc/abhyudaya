// File: components/WhatIsCA.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import CAApplicationPopup from './CAApplicationPopup';
// import { useSelector } from 'react-redux'; // commented out - backend disabled

const responsibilities = [
  { icon: "📢", title: "Promote Events", desc: "Spread the word about Abhyudaya'26 events at your campus and drive excitement." },
  { icon: "🎯", title: "Drive Registrations", desc: "Coordinate and boost participation from your college community." },
  { icon: "🎪", title: "Pre-Event Activities", desc: "Organise engaging warm-up activities before the main fest begins." },
  { icon: "📱", title: "Social Media", desc: "Create buzz and awareness through your social platforms and stories." },
  { icon: "🤝", title: "Community Building", desc: "Be the bridge between Abhyudaya and the talented students at your institution." },
  { icon: "💬", title: "Feedback Loop", desc: "Channel valuable feedback to help us improve our outreach and impact." },
];

export default function WhatIsCA({ contentVariants, itemVariants, setActiveTab }) {
  const [isCAApplicationPopupOpen, setIsCAApplicationPopupOpen] = useState(false);
  // const user = useSelector(state => state.user); // commented out - backend disabled
  // const [isRegistered, setIsRegistered] = useState(user?.isCampusAmbassador || false); // commented out

  const handleSuccess = () => {
    // setIsRegistered(true); // commented out - backend disabled
    setIsCAApplicationPopupOpen(false);
  };

  return (
    <>
      <motion.div
        className="space-y-10"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        key="what"
      >
        {/* Intro */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
            Become the Face of Abhyudaya&apos;26
          </h2>
          <p className="text-blue-100/80 text-lg leading-relaxed mb-3">
            As a Campus Ambassador, you&apos;ll be the official representative of Abhyudaya&apos;26 at your
            college. Help spread the word, coordinate your peers, and connect talented students to
            the biggest technical fest in the region.
          </p>
          <p className="text-blue-200/50 leading-relaxed">
            This program is designed to sharpen your leadership, marketing, and communication skills
            while expanding your network and unlocking exclusive advantages.
          </p>
        </motion.div>

        {/* Responsibilities Grid */}
        <motion.div variants={itemVariants}>
          <p className="text-xs font-semibold text-blue-400/80 uppercase tracking-widest mb-5">
            Your Responsibilities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {responsibilities.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 group cursor-default"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-blue-200/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.button
            onClick={() => setIsCAApplicationPopupOpen(true)}
            className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3.5 px-10 rounded-xl shadow-lg shadow-blue-600/30"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
            <span className="relative">Apply Now →</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveTab("perks")}
            className="border border-blue-400/30 text-blue-300 font-semibold py-3.5 px-10 rounded-xl hover:bg-blue-500/10 hover:border-blue-400/60 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            View Perks &amp; Benefits
          </motion.button>
        </motion.div>
      </motion.div>

      <CAApplicationPopup
        isOpen={isCAApplicationPopupOpen}
        onClose={() => setIsCAApplicationPopupOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  );
}
