import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux"; // commented out - backend disabled
import { useNavigate } from "react-router-dom";         // commented out - backend disabled
import { setUser } from "../Redux/UserSlice";           // commented out - backend disabled
import axios from "axios";                              // commented out - backend disabled

export default function CAApplicationPopup({ isOpen, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", college: "" });

  const user = useSelector((state) => state.user);  // commented out - backend disabled
  const navigate = useNavigate();                    // commented out - backend disabled
  const dispatch = useDispatch();                    // commented out - backend disabled

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.fullName || !formData.email || !formData.college) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/users/request-ca`,
      {
        fullName: formData.fullName,
        email: formData.email,
        institution: formData.college,
        ABH_ID: user?.ABH_ID, // optional but useful
      },
      { withCredentials: true }
    );

    // Update Redux (optional)
    dispatch(setUser({ ...user, campusAmbassadorStatus: "pending" }));

    toast.success("🎉 Application submitted successfully!");

    onSuccess?.();
    onClose();

  } catch (error) {
    console.error(error);
    toast.error(
      error?.response?.data?.message || "Failed to submit application"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-md bg-[#0d1526] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />

          <div className="p-7">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">Apply as Campus Ambassador</h2>
                <p className="text-blue-300/60 text-sm mt-1">Join the Abhyudaya&apos;25 CA Program</p>
              </div>
              <button
                onClick={onClose}
                className="text-blue-300/50 hover:text-white transition-colors text-lg leading-none mt-0.5"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-blue-300/70 uppercase tracking-widest mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white placeholder-blue-300/30 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-blue-300/70 uppercase tracking-widest mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white placeholder-blue-300/30 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-blue-300/70 uppercase tracking-widest mb-1.5">
                  College / Institution
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Your college name"
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white placeholder-blue-300/30 text-sm outline-none transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full mt-2 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/25 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  "Submit Application →"
                )}
              </motion.button>
            </form>

            <p className="text-center text-blue-300/40 text-xs mt-5">
              Questions? Reach us at{" "}
              <a href="mailto:campus@abhyudaya.in" className="text-blue-400 hover:underline">
                campus@abhyudaya.in
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

