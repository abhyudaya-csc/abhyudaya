import { useState } from "react";
import { Link } from "react-router-dom";
import authBg from "../../assets/Landing/authBg.jpg";
import pageBg from "../../assets/Landing/pageBg.jpg";
import logo from "../../assets/Landing/White.png";

function SignUpForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    college: "",
    course: "",
    referral: "",
    avatar: "",
    password: "",
    confirmPassword: "",
  });

  const avatars = [
    "/icons/1.png",
    "/icons/2.png",
    "/icons/3.png",
    "/icons/4.png",
    "/icons/5.png",
    "/icons/6.png",
    "/icons/7.png",
    "/icons/8.png",
    "/icons/9.png",
    "/icons/10.png",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      <div className="relative z-10 w-[75%] sm:w-[700px] sm:h-[480px] backdrop-blur-[4px] rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden border border-white/20">
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
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <input
                  name="name"
                  placeholder="Full Name"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <input
                  name="email"
                  placeholder="Email"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <select
                  name="gender"
                  className="w-full border border-white/30 bg-white/20 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                >
                  <option value="" className="text-gray-800">
                    Select Gender
                  </option>
                  <option className="text-gray-800">Male</option>
                  <option className="text-gray-800">Female</option>
                  <option className="text-gray-800">Other</option>
                </select>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                >
                  Next
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <input
                  name="college"
                  placeholder="College Name"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <input
                  name="course"
                  placeholder="Course"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <input
                  name="referral"
                  placeholder="Referral ID"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h3 className="text-center text-lg font-semibold text-white">
                  Choose Your Icon
                </h3>

                <div className="grid grid-cols-5 gap-3 mt-3 justify-items-center">
                  {avatars.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt="avatar"
                      onClick={() => setFormData({ ...formData, avatar: icon })}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer border-2 hover:scale-110 transition ${
                        formData.avatar === icon
                          ? "border-purple-600"
                          : "border-white/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                />

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Register
                  </button>
                </div>
              </>
            )}
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
