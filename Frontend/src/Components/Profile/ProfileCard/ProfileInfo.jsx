import React, { useState } from "react";
import { Check, Copy, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../../Redux/UserSlice";

import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";

const AUTH_SESSION_FLAG = "abh_session_active";
const AUTH_TOKEN_KEY = "abh_auth_token";

const ProfileInfo = () => {
  const user = useSelector((state) => state.user);
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editData, setEditData] = useState({
    fullName: user?.fullName || "",
    institution: user?.institution || "",
  });
  const dispatch = useDispatch();
  const userInitial = user?.fullName?.trim()?.charAt(0)?.toUpperCase() || "?";

  const handleCopy = () => {
    navigator.clipboard.writeText(user.ABH_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const navigate = useNavigate();

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStartEdit = () => {
    setEditData({
      fullName: user?.fullName || "",
      institution: user?.institution || "",
    });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData({
      fullName: user?.fullName || "",
      institution: user?.institution || "",
    });
  };

  const handleSaveProfile = async () => {
    if (isSaving) return;

    const trimmedName = editData.fullName.trim();
    const trimmedInstitution = editData.institution.trim();

    if (!trimmedName) {
      alert("Full name is required.");
      return;
    }

    if (!trimmedInstitution) {
      alert("Institution is required.");
      return;
    }

    const payload = {
      fullName: trimmedName,
      institution: trimmedInstitution,
    };

    const updateEndpoints = [
      "/users/me",
      "/users/profile",
      "/users/update-profile",
      "/users/update",
    ];

    try {
      setIsSaving(true);

      let updatedUser = null;
      let lastError = null;

      for (const endpoint of updateEndpoints) {
        try {
          const res = await api.patch(endpoint, payload);
          updatedUser = res.data?.user || res.data?.data || null;
          break;
        } catch (err) {
          lastError = err;

          if (err.response?.status !== 404) {
            throw err;
          }
        }
      }

      if (!updatedUser) {
        if (lastError) {
          throw lastError;
        }
        throw new Error("Profile update failed");
      }

      dispatch(setUser(updatedUser));
      setIsEditing(false);
      alert("Profile updated successfully.");
    } catch (err) {
      const message =
        err.response?.data?.errorMessage ||
        err.response?.data?.message ||
        "Could not update profile. Please try again.";
      alert(message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post("/users/logout", {});
    } catch (err) {
      console.log("Logout API failed, clearing frontend state anyway");
    }

    localStorage.removeItem(AUTH_SESSION_FLAG);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    dispatch(logout()); // clear redux
    navigate("/"); 
  };

  return (
    <div className="w-full space-y-6 h-fit ">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div
          aria-label={user.fullName}
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white/30 shadow-lg bg-white/20 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white"
        >
          {userInitial}
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-lg sm:text-2xl font-bold text-white">
            {user.fullName}
          </h1>
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

      {/* Profile Details */}
      <div className="space-y-3 text-xs sm:text-sm">
        <div className="bg-white/10 p-2 sm:p-3 rounded-xl flex justify-between items-center text-xs sm:text-base">
          <span className="text-white/80">Email</span>
          <span className="text-white font-medium">{user.email}</span>
        </div>

        <div className="bg-white/10 p-2 sm:p-3 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-base">
          <span className="text-white/80">Full Name</span>
          {isEditing ? (
            <input
              name="fullName"
              value={editData.fullName}
              onChange={handleEditChange}
              className="w-full sm:w-64 bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Full Name"
            />
          ) : (
            <span className="text-white font-medium">{user.fullName}</span>
          )}
        </div>

        <div className="bg-white/10 p-2 sm:p-3 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-base">
          <span className="text-white/80">Phone</span>
          <span className="text-white font-medium">{user.phoneNumber}</span>
        </div>

        <div className="bg-white/10 p-2 sm:p-3 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-base">
          <span className="text-white/80">Institution</span>
          {isEditing ? (
            <input
              name="institution"
              value={editData.institution}
              onChange={handleEditChange}
              className="w-full sm:w-64 bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Institution"
            />
          ) : (
            <span className="text-white font-medium">{user.institution}</span>
          )}
        </div>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {isEditing ? (
          <>
            <button
              onClick={handleCancelEdit}
              disabled={isSaving}
              className="w-full bg-white/15 hover:bg-white/25 text-white font-semibold py-2 px-4 rounded-xl transition-all text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveProfile}
              disabled={isSaving}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition-all text-sm sm:text-base"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </>
        ) : (
          <button
            onClick={handleStartEdit}
            className="w-full sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all text-sm sm:text-base"
          >
            Edit Profile
          </button>
        )}
      </div>

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
