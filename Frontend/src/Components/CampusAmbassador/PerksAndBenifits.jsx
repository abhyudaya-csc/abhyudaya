// File: components/PerksAndBenefits.jsx
import { motion } from "framer-motion";

export default function PerksAndBenefits({ contentVariants, itemVariants }) {
  const perks = [
    {
      title: "Official Certificate",
      description: "Receive a recognised certificate acknowledging your contribution to Abhyudaya'25.",
      icon: "🏆",
      gradient: "from-yellow-500/15 to-orange-500/10",
      border: "hover:border-yellow-400/40",
      glow: "hover:shadow-yellow-500/10",
    },
    {
      title: "Exclusive Merchandise",
      description: "Get limited-edition Abhyudaya'25 T-shirts, hoodies, stickers, and goodies.",
      icon: "👕",
      gradient: "from-pink-500/15 to-rose-500/10",
      border: "hover:border-pink-400/40",
      glow: "hover:shadow-pink-500/10",
    },
    {
      title: "VIP / Priority Access",
      description: "Enjoy front-row, priority entry to all events, workshops, and exclusive speaker sessions.",
      icon: "🎟️",
      gradient: "from-sky-500/15 to-cyan-500/10",
      border: "hover:border-sky-400/40",
      glow: "hover:shadow-sky-500/10",
    },
    {
      title: "Networking Hub",
      description: "Connect directly with industry professionals, speakers, mentors, and fellow ambassadors.",
      icon: "🤝",
      gradient: "from-green-500/15 to-teal-500/10",
      border: "hover:border-green-400/40",
      glow: "hover:shadow-green-500/10",
    },
    {
      title: "Leadership Growth",
      description: "Build real-world skills in leadership, marketing, event management, and communication.",
      icon: "📈",
      gradient: "from-purple-500/15 to-violet-500/10",
      border: "hover:border-purple-400/40",
      glow: "hover:shadow-purple-500/10",
    },
    {
      title: "Cash Incentives",
      description: "Earn attractive cash rewards based on your performance, referrals, and task completion.",
      icon: "💰",
      gradient: "from-emerald-500/15 to-green-500/10",
      border: "hover:border-emerald-400/40",
      glow: "hover:shadow-emerald-500/10",
    },
  ];

  return (
    <motion.div
      className="space-y-10"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      key="perks"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
          Why Become a CA?
        </h2>
        <p className="text-blue-200/50 text-sm">Exclusive benefits reserved only for our campus ambassadors.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${perk.gradient} border border-white/10 ${perk.border} rounded-2xl p-6 transition-all duration-300 group cursor-default hover:shadow-xl ${perk.glow}`}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="text-5xl mb-4">{perk.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">
              {perk.title}
            </h3>
            <p className="text-blue-100/55 text-sm leading-relaxed">{perk.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}