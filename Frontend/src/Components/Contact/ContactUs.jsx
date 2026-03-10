import React, { useState, useCallback, memo } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../assets/Logo-images/logo.png";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import TypingText from "./SplitText";
import { AnimatedInstagram, AnimatedWhatsApp } from "./AnimatedSocialIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const bulletPoints = [
  "We will respond to you within 12 hours",
  "Reach out for event queries & collaborations",
  "Access to dedicated team support",
];

// Memoized input component to avoid re-renders on sibling focus changes
const FormInput = memo(({ label, name, type = "text", placeholder, value, onChange, focused, onFocus, onBlur, required = true }) => (
  <div className="flex-1">
    <label className="block text-gray-400 text-sm mb-1.5">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-600 outline-none transition-all duration-300 ${
        focused
          ? "border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          : "border-white/10 hover:border-white/20"
      }`}
      required={required}
    />
  </div>
));
FormInput.displayName = "FormInput";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    toast.success("Your query has been submitted!");
    setSubmitted(true);
    setLoading(false);
    setFormData({ fullName: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFocus = useCallback((name) => () => setFocused(name), []);
  const handleBlur = useCallback(() => setFocused(null), []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 md:p-12 lg:p-16 xl:p-24 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-700/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-pink-600/15 rounded-full blur-[100px] pointer-events-none translate-x-[-50%] translate-y-[-50%]" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            background: i % 2 === 0 ? "rgba(168,85,247,0.4)" : "rgba(52,211,153,0.4)",
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-[1100px] mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Left Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full md:w-[45%] p-8 sm:p-10 md:p-12 flex flex-col justify-between relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-emerald-900/10 pointer-events-none rounded-l-3xl" />

          <div className="relative z-10">
            {/* Typing Text Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-gradient-to-r from-white via-purple-200 to-emerald-300 bg-clip-text text-transparent">
              <TypingText
                text="Tell us about your query"
                className="bg-gradient-to-r from-white via-purple-200 to-emerald-300 bg-clip-text text-transparent"
                speed={55}
                delay={300}
                cursorColor="#a855f7"
              />
            </h1>

            {/* Bullet points */}
            <div className="space-y-4 mb-8">
              {bulletPoints.map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                  >
                    <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-lg" />
                  </motion.div>
                  <span className="text-gray-300 text-sm sm:text-base">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Logo */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex items-center justify-center mb-8"
            >
              <motion.img
                src={logo}
                alt="Abhyudaya Logo"
                className="w-52 h-52 sm:w-60 sm:h-60 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                whileHover={{ scale: 1.08, rotate: 3 }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(168,85,247,0.2))",
                    "drop-shadow(0 0 40px rgba(168,85,247,0.4))",
                    "drop-shadow(0 0 20px rgba(168,85,247,0.2))",
                  ],
                }}
                transition={{
                  filter: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 300 },
                }}
              />
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="relative z-10">
            <motion.div variants={fadeUp} custom={5} className="mb-6">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <HiOutlineMail className="text-lg" />
                <span className="text-sm">Email us at</span>
              </div>
              <p className="text-white font-medium text-lg">abhyudaya@mmmut.ac.in</p>
            </motion.div>

            {/* Social Links with Animated Icons */}
            <motion.div variants={fadeUp} custom={6} className="flex gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/Abhyudaya.mmmut/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-[#E4405F]/15 hover:border-[#E4405F]/40 transition-all duration-300 text-white text-xs"
              >
                <AnimatedInstagram size={16} />
                <span className="font-medium">Instagram</span>
              </a>

              <a
                href="https://whatsapp.com/channel/0029VaGSSJQGJP8AijZRD62j"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-[#25D366]/15 hover:border-[#25D366]/40 transition-all duration-300 text-white text-xs"
              >
                <AnimatedWhatsApp size={16} />
                <span className="font-medium">WhatsApp</span>
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={7}
              className="text-gray-500 text-xs mt-4"
            >
              Team Abhyudaya &mdash; MMMUT Gorakhpur
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section — Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full md:w-[55%] p-8 sm:p-10 md:p-12 relative border-t md:border-t-0 md:border-l border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-r-3xl" />

          <div className="relative z-10">
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
            >
              Contact Us
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-500 mb-8 text-sm"
            >
              Fill up the form below to send us a message.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email row */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex flex-col sm:flex-row gap-4"
              >
                <FormInput
                  label="Full Name*"
                  name="fullName"
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  focused={focused === "fullName"}
                  onFocus={handleFocus("fullName")}
                  onBlur={handleBlur}
                />
                <FormInput
                  label="Email*"
                  name="email"
                  type="email"
                  placeholder="name@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  focused={focused === "email"}
                  onFocus={handleFocus("email")}
                  onBlur={handleBlur}
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeUp} custom={3}>
                <FormInput
                  label="Phone Number*"
                  name="phone"
                  type="tel"
                  placeholder="+91 98476543XX"
                  value={formData.phone}
                  onChange={handleChange}
                  focused={focused === "phone"}
                  onFocus={handleFocus("phone")}
                  onBlur={handleBlur}
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} custom={4}>
                <label className="block text-gray-400 text-sm mb-1.5">
                  Your Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus("message")}
                  onBlur={handleBlur}
                  placeholder="Tell us what you need help with..."
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none ${
                    focused === "message"
                      ? "border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeUp} custom={5}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-full py-4 rounded-xl font-bold text-lg text-white bg-emerald-600/30 border border-emerald-500/40 text-center flex items-center justify-center gap-2"
                    >
                      <FaCheckCircle className="text-emerald-400" />
                      Sent Successfully!
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:bg-right transition-all duration-500 shadow-[0_4px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_40px_rgba(168,85,247,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
