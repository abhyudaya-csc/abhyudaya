import React, { useState } from "react";
import { Check, Copy, LogOut, Pencil, X, Save } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../../Redux/UserSlice";
import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const COURSES = [
  "B.Tech", "BCA", "BBA", "MBA", "B.Pharm",
  "MCA", "Diploma", "B.Com", "BA", "B.Sc", "M.Sc", "PhD", "Others",
];
const GENDERS = ["Male", "Female", "Prefer not to say", "Others"];

const ProfileInfo = () => {
  const user = useSelector((state) => state.user);
  const [copied, setCopied] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleCopy = () => {
    navigator.clipboard.writeText(user.ABH_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const navigate = useNavigate();

  const handleEditOpen = () => {
    setFormData({
      fullName: user.fullName || "",
      phoneNumber: user.phoneNumber || "",
      course: user.course || "",
      gender: user.gender || "",
      institution: user.institution || "",
    });
    setEditing(true);
  };

  const handleEditCancel = () => setEditing(false);

  const handleEditSave = async () => {
    setSaving(true);
    try {
      const res = await api.patch("/users/me", formData);
      dispatch(setUser(res.data.user ?? res.data.data ?? res.data));
      setEditing(false);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/users/logout`,
        {},
        { withCredentials: true },
      );
    } catch (err) {
      console.log("Logout API failed, clearing frontend state anyway");
    }

    dispatch(logout()); // clear redux
    navigate("/"); 
  };

  // const dob = new Date(user.dob).toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  return (
    <div className="w-full space-y-6 h-fit ">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white/30 shadow-lg bg-purple-600 flex items-center justify-center">
          <span className="text-white text-5xl sm:text-6xl font-bold uppercase">
            {user.fullName?.charAt(0)}
          </span>
        </div>
        <div className="text-center sm:text-left flex-1">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              {user.fullName}
            </h1>
            {!editing && (
              <button
                onClick={handleEditOpen}
                className="bg-white/10 p-1.5 rounded-md text-white hover:bg-purple-600 transition"
                title="Edit Profile"
              >
                <Pencil className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
            <span>ABH ID : </span>
            <span className="text-white/70 text-sm sm:text-base">
              {user.ABH_ID}
            </span>
            <button
              onClick={handleCopy}
              className="bg-white/10 p-1 sm:p-2 rounded-md text-white hover:bg-white/20 transition"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-xs font-semibold text-gray-400">
            Remember your ABH_ID for further usage.
          </p>
        </div>
      </div>

      {/* Edit Form */}
      {editing ? (
        <div className="space-y-3">
          {[
            { label: "Full Name", key: "fullName", type: "text" },
            { label: "Phone", key: "phoneNumber", type: "text" },
            { label: "Institution", key: "institution", type: "text" },
          ].map(({ label, key, type }) => (
            <div key={key} className="bg-white/10 p-2 sm:p-3 rounded-xl flex justify-between items-center gap-3 text-xs sm:text-base">
              <span className="text-white/80 shrink-0">{label}</span>
              <input
                type={type}
                value={formData[key]}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                className="bg-white/10 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[60%]"
              />
            </div>
          ))}

          {/* Course Select */}
          <div className="bg-white/10 p-2 sm:p-3 rounded-xl flex justify-between items-center gap-3 text-xs sm:text-base">
            <span className="text-white/80 shrink-0">Course</span>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="bg-gray-900 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[60%]"
            >
              <option value="">Select Course</option>
              {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Gender Select */}
          <div className="bg-white/10 p-2 sm:p-3 rounded-xl flex justify-between items-center gap-3 text-xs sm:text-base">
            <span className="text-white/80 shrink-0">Gender</span>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="bg-gray-900 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[60%]"
            >
              <option value="">Select Gender</option>
              {GENDERS.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          {/* Save / Cancel */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={handleEditSave}
              disabled={saving}
              className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white font-bold py-2 px-4 rounded-xl transition-all text-sm"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              onClick={handleEditCancel}
              disabled={saving}
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-xl transition-all text-sm"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Profile Details */}
          <div className="space-y-3 text-xs sm:text-sm">
            {[
              { label: "Email", value: user.email },
              { label: "Phone", value: user.phoneNumber },
              { label: "Course", value: user.course },
              { label: "Gender", value: user.gender },
              { label: "Institution", value: user.institution },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/10 p-2 sm:p-3 rounded-xl flex justify-between items-center text-xs sm:text-base"
              >
                <span className="text-white/80">{label}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}

            {/* Payment Status */}
            <div className="bg-white/10 p-2 sm:p-3 rounded-xl flex justify-between items-center">
              <span className="text-white/80">Payment Status</span>
              <span
                className={`px-3 py-1 text-xs sm:text-sm rounded-full font-medium border ${
                  user.paymentStatus
                    ? "bg-green-500/20 text-green-300 border-green-400/50"
                    : "bg-red-500/20 text-red-300 border-red-400/50"
                }`}
              >
                {user.paymentStatus ? "Paid" : "Unpaid"}
              </span>
            </div>
          </div>
        </>
      )}

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mt-4 transition-all text-sm sm:text-base"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </div>
  );
};

export default ProfileInfo;
