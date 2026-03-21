import { useMemo, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import authBg from "../../assets/Landing/authBg.jpg";
import pageBg from "../../assets/Landing/pageBg.jpg";
import logo from "../../assets/Landing/White.png";
import api from "../../api/axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const { token: tokenFromPath } = useParams();
  const navigate = useNavigate();

  const token = useMemo(() => {
    return (
      searchParams.get("token") ||
      searchParams.get("resetToken") ||
      tokenFromPath ||
      ""
    );
  }, [searchParams, tokenFromPath]);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!token) {
      alert("Reset token is missing or invalid.");
      return;
    }

    if (!newPassword.trim() || !confirmPassword.trim()) {
      alert("Please fill both password fields.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const payload = {
      token,
      newPassword,
    };

    const endpoints = [
      "/users/reset-password",
      "/users/resetPassword",
      "/auth/reset-password",
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
            "Password reset successful. You can now sign in.";
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
        throw lastError || new Error("Password reset failed");
      }

      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => navigate("/SignInForm"), 1500);
    } catch (err) {
      const serverMessage =
        err.response?.data?.errorMessage ||
        err.response?.data?.message ||
        "Unable to reset password. Please try again.";
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

      <div className="relative z-10 w-[75%] sm:w-[700px] sm:h-[520px] backdrop-blur-[4px] rounded-xl shadow-2xl flex flex-col sm:flex-row overflow-hidden border border-white/20">
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

        <div className="w-full sm:w-1/2 p-10 sm:p-12 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center text-white mb-3">
            Reset Password
          </h2>

          {!token && (
            <p className="text-red-300 text-sm text-center mb-4">
              Invalid reset link. Please request a new password reset.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-3 pr-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={!token}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-base text-white/80 hover:text-white"
                aria-label={showNewPassword ? "Hide password" : "Show password"}
                disabled={!token}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-3 pr-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={!token}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-base text-white/80 hover:text-white"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                disabled={!token}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !token}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </button>
          </form>

          {successMessage && (
            <p className="text-green-300 text-sm text-center mt-4">{successMessage}</p>
          )}

          <div className="mt-5 flex flex-col items-center gap-2 text-sm">
            <Link to="/forgot-password" className="text-white/90 hover:text-white">
              Request New Reset Link
            </Link>
            <Link to="/SignInForm" className="text-white/90 hover:text-white">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
