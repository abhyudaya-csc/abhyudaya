// File: CampusAmbassadorProgram.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import TabNavigation from "./TabNavigation";
import WhatIsCA from "./WhatIsCA";
import PerksAndBenefits from "./PerksAndBenifits";
import CallToAction from "./CallToAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CampusAmbassadorProgram() {
  const [activeTab, setActiveTab] = useState("what");

  const tabs = [
    { id: "what", label: "What is CA?" },
    { id: "perks", label: "Perks & Benefits" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/5 w-[400px] h-[400px] bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-cyan-700/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Header itemVariants={itemVariants} />

        <TabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        <motion.div
          className="bg-white/[0.03] backdrop-blur-md rounded-b-2xl p-6 sm:p-10 min-h-[400px] border border-white/10 border-t-0"
          variants={itemVariants}
          layout
        >
          {activeTab === "what" && (
            <WhatIsCA
              contentVariants={contentVariants}
              itemVariants={itemVariants}
              setActiveTab={setActiveTab}
            />
          )}
          {activeTab === "perks" && (
            <PerksAndBenefits contentVariants={contentVariants} itemVariants={itemVariants} />
          )}
        </motion.div>

        <CallToAction itemVariants={itemVariants} />
      </motion.div>

      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
}
