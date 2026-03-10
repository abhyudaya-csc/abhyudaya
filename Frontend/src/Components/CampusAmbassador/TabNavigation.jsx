// File: components/TabNavigation.jsx
import { motion } from "framer-motion";

export default function TabNavigation({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex gap-1 bg-white/[0.03] backdrop-blur-sm rounded-t-2xl px-4 pt-3 border border-white/10 border-b-0">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative px-6 py-2.5 text-sm font-semibold rounded-t-xl transition-colors duration-200 ${
            activeTab === tab.id
              ? "text-white"
              : "text-blue-300/60 hover:text-blue-200"
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-xl shadow-lg shadow-blue-500/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}