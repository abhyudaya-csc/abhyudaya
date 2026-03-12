import { useState } from "react";
import { Link } from "react-router-dom";
import authBg from "../../assets/Landing/authBg.jpg";
import pageBg from "../../assets/Landing/pageBg.jpg";
import logo from "../../assets/Landing/White.png";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${pageBg})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Sign In Card */}
      <div className="relative z-10 w-[75%] sm:w-[700px] sm:h-[480px] backdrop-blur-[4px] rounded-xl shadow-2xl flex flex-col sm:flex-row overflow-hidden border border-white/20">
        {/* Left Image Panel (Hidden on mobile) */}
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

        {/* Right Form Panel */}
        <div className="w-full sm:w-1/2 p-12 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-white/80 mt-6">Don't have an account?</p>

          <Link to="/signupForm">
            <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;