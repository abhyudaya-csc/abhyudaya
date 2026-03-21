import { useState } from "react";
import { Link } from "react-router-dom";
import authBg from "../../assets/Landing/authBg.jpg";
import pageBg from "../../assets/Landing/pageBg.jpg";
import logo from "../../assets/Landing/White.png";
import api from "../../api/axios";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!email.trim()) {
      alert("Email is required.");
      return;
    }

    const payload = { email: email.trim().toLowerCase() };
    const endpoints = [
      "/users/forgot-password",
      "/users/forgotPassword",
      "/auth/forgot-password",
    ];

    try {
      setIsSubmitting(true);
      let success = false;
      let lastError = null;

      for (const endpoint of endpoints) {
        try {
          const res = await api.post(endpoint, payload);
          const message =
            res.data?.message ||
            res.data?.data?.message ||
            "If this email exists, password reset instructions have been sent.";
          setSuccessMessage(message);
          success = true;
          break;
        } catch (err) {
          lastError = err;

          if (err.response?.status !== 404) {
            throw err;
          }
        }
      }

      if (!success) {
        throw lastError || new Error("Forgot password request failed");
      }
    } catch (err) {
      const serverMessage =
        err.response?.data?.errorMessage ||
        err.response?.data?.message ||
        "Unable to process request right now. Please try again.";
      alert(serverMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${pageBg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-[75%] sm:w-[700px] sm:h-[480px] backdrop-blur-[4px] rounded-xl shadow-2xl flex flex-col sm:flex-row overflow-hidden border border-white/20">
        <div className="w-1/2 relative hidden sm:block">
          <img
            src={authBg}
            alt="background"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <img
            src={logo}
            alt="logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 z-20"
          />
        </div>

        <div className="w-full sm:w-1/2 p-12 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center text-white mb-3">
            Forgot Password
          </h2>
          <p className="text-white/80 text-sm text-center mb-6">
            Enter your email to receive reset instructions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          {successMessage && (
            <p className="text-green-300 text-sm text-center mt-4">{successMessage}</p>
          )}

          <Link to="/SignInForm" className="mt-5 text-white/90 hover:text-white text-sm">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
