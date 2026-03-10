import { useState } from "react";
import { Link } from "react-router-dom";

import videoBg from "../../assets/Landing/vdo.mp4";
import backVideo from "../../assets/Landing/back.mp4";
import logo from "../../assets/Landing/white.png";

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
    confirmPassword: ""
  });

  const avatars = [
    "/icons/1.png","/icons/2.png","/icons/3.png","/icons/4.png","/icons/5.png",
    "/icons/6.png","/icons/7.png","/icons/8.png","/icons/9.png","/icons/10.png"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* SIGNUP CARD */}
      <div className="relative z-10 w-[75%] sm:w-[700px] sm:h-[480px] backdrop-blur-[4px] rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden">

        {/* LEFT VIDEO PANEL (hidden on mobile) */}
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
            className="absolute top-[270px] w-320 z-20"
          />

        </div>

        {/* RIGHT FORM PANEL */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col items-center overflow-y-auto">

          <h2 className="text-2xl font-bold text-center">
            SignUp
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 w-full mt-4">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <input name="name" placeholder="Full Name"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <input name="phone" placeholder="Phone Number"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <input name="email" placeholder="Email"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <select name="gender"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <button type="button" onClick={nextStep}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg">
                  Next
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <input name="college" placeholder="College Name"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <input name="course" placeholder="Course"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <input name="referral" placeholder="Referral ID"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <div className="flex gap-3">
                  <button type="button" onClick={prevStep}
                    className="w-1/2 bg-purple-600 text-white py-2 rounded-lg">
                    Back
                  </button>

                  <button type="button" onClick={nextStep}
                    className="w-1/2 bg-purple-600 text-white py-2 rounded-lg">
                    Next
                  </button>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h3 className="text-center text-lg font-semibold">
                  Choose Your Icon
                </h3>

                <div className="grid grid-cols-5 gap-3 mt-3 justify-items-center">
                  {avatars.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt="avatar"
                      onClick={() =>
                        setFormData({ ...formData, avatar: icon })
                      }
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer border-2 hover:scale-110 transition ${
                        formData.avatar === icon
                          ? "border-purple-600"
                          : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <button type="button" onClick={prevStep}
                    className="w-1/2 bg-purple-600 text-white py-2 rounded-lg">
                    Back
                  </button>

                  <button type="button" onClick={nextStep}
                    className="w-1/2 bg-purple-600 text-white py-2 rounded-lg">
                    Next
                  </button>
                </div>
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <input name="password" type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <input name="confirmPassword" type="password"
                  placeholder="Confirm Password"
                  className="w-full border rounded-lg px-4 py-2"
                  onChange={handleChange} />

                <div className="flex gap-3">
                  <button type="button" onClick={prevStep}
                    className="w-1/2 bg-purple-600 text-white py-2 rounded-lg">
                    Back
                  </button>

                  <button type="submit"
                    className="w-1/2 bg-purple-600 text-white py-2 rounded-lg">
                    Register
                  </button>
                </div>
              </>
            )}

          </form>

          <p className="text-sm text-black-600 mt-4">
            Already have an account?
          </p>

          <Link to="/SignInForm">
            <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Sign In
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default SignUpForm;