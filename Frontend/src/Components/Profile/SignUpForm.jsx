import { useState } from "react";
import { Link } from "react-router-dom";
import authBg from "../../assets/Landing/authBg.jpg";
import pageBg from "../../assets/Landing/pageBg.jpg";
import logo from "../../assets/Landing/White.png";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    institute: "",
    phone: "",
    referral: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizePhone = (value) => value.replace(/\D/g, "");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const normalizedPhone = normalizePhone(formData.phone);

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Min 6 characters";
    if (!formData.institute.trim())
      newErrors.institute = "Institute is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (normalizedPhone.length !== 10)
      newErrors.phone = "Invalid phone (10 digits)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      const normalizedPhone = normalizePhone(formData.phone);

      if (normalizedPhone.length !== 10) {
        alert("Invalid phone number. Enter exactly 10 digits.");
        return;
      }

      const payload = {
        fullName: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        institution: formData.institute.trim(),
        phoneNumber: normalizedPhone,
        // Keep defaults for fields expected by backend in some deployments.
        gender: "Other",
        course: "Others",
      };

      const referralId = formData.referral.trim();
      if (referralId) {
        payload.referralId = referralId;
        payload.referallId = referralId;
      }

      const res = await api.post("/users", payload);

      dispatch(setUser(res.data.data));
      navigate("/SignInForm");
    } catch (err) {
      const serverMessage =
        err.response?.data?.errorMessage || err.response?.data?.message;

      if (err.response?.status === 409) {
        alert(serverMessage || "Account already exists. Please sign in.");
        return;
      }

      if (err.response?.status === 400) {
        alert(serverMessage || "Please check your details and try again.");
        return;
      }

      if (err.response?.status === 500) {
        alert(
          serverMessage ||
            "Server error while creating account. Please try again in a moment.",
        );
        return;
      }

      alert(serverMessage || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${pageBg})` }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* SIGNUP CARD */}
      <div className="relative z-10 w-[75%] sm:w-[700px] backdrop-blur-[4px] rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden border border-white/20">
        {/* LEFT IMAGE PANEL (hidden on mobile) */}
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

        {/* RIGHT FORM PANEL */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col items-center overflow-y-auto bg-white/10 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-3 w-full mt-4">
            <div>
              <input
                name="name"
                placeholder="Full Name *(min 4 chacters)"
                value={formData.name}
                className={`w-full border ${errors.name ? "border-red-500" : "border-white/30"} bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={formData.email}
                className={`w-full border ${errors.email ? "border-red-500" : "border-white/30"} bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="password"
                type="password"
                placeholder="Password *"
                value={formData.password}
                className={`w-full border ${errors.password ? "border-red-500" : "border-white/30"} bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <input
                name="institute"
                placeholder="Institute/College *"
                value={formData.institute}
                className={`w-full border ${errors.institute ? "border-red-500" : "border-white/30"} bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onChange={handleChange}
              />
              {errors.institute && (
                <p className="text-red-400 text-xs mt-1">{errors.institute}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                className={`w-full border ${errors.phone ? "border-red-500" : "border-white/30"} bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                name="referral"
                placeholder="Referral ID (Optional)"
                value={formData.referral}
                className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors mt-2"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-sm text-white/80 mt-4">Already have an account?</p>

          <Link to="/SignInForm">
            <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;