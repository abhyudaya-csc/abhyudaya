import { useState } from "react";
import { Link } from "react-router-dom";
import videoBg from "../../assets/Landing/vdo.mp4";
import backVideo from "../../assets/Landing/back.mp4";
import logo from "../../assets/Landing/white.png";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video (Visible on all screens) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Sign In Card */}
      <div className="relative z-10 w-[75%] sm:w-[700px] sm:h-[480px] backdrop-blur-[4px] rounded-xl shadow-2xl flex flex-col sm:flex-row overflow-hidden border border-white/20">

        {/* Left Video Panel (Hidden on mobile) */}
        <div className="w-1/2 relative hidden sm:block">
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
          />

          <img
            src={logo}
            alt="logo"
            className="absolute mt-[300px] w-98 z-20"
          />
        </div>

        {/* Right Form Panel */}
        <div className="w-full sm:w-1/2 p-12 flex flex-col items-center">

          <h2 className="text-3xl font-bold text-center mb-8">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg"
            >
              Sign In
            </button>

          </form>

          <p className="text-sm text-black-700 mt-6">
            Don't have an account?
          </p>

          <Link to="/signupForm">
            <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Sign Up
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default SignInForm;