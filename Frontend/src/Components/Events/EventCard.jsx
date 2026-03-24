import React, { useState } from "react";
import { Link } from "react-router-dom";

// Category → icon SVG path
const categoryIcons = {
  Art:         <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14.5a7.5 7.5 0 01-6-3c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.5 7.5 0 01-6 3z" fill="currentColor" />,
  Dance:       <path d="M13 4a2 2 0 100-4 2 2 0 000 4zm-1 2l-3 3 2 2-2 5h2l1.5-4 1.5 2v4h2v-5l-2-2 1-3 1 1h3V8h-4l-2-2z" fill="currentColor" />,
  Music:       <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z" fill="currentColor" />,
  Dramatics:   <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm7 3a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" />,
  Literature:  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm1 3v2h10V5H7zm0 4v2h10V9H7zm0 4v2h7v-2H7z" fill="currentColor" />,
  Photography: <path d="M9 3L7.17 5H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.17L15 3H9zm3 15a5 5 0 110-10 5 5 0 010 10z" fill="currentColor" />,
  default:     <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14H11v-2h2v2zm0-4H11V8h2v4z" fill="currentColor" />,
};

// Category → gradient for placeholder background
const categoryGradients = {
  Art:         "linear-gradient(135deg, #1e1040 0%, #3b1f6e 50%, #1a0e38 100%)",
  Dance:       "linear-gradient(135deg, #1a0e2e 0%, #6b1a4a 50%, #2d0b3e 100%)",
  Music:       "linear-gradient(135deg, #0d1a3a 0%, #1a3a6e 50%, #0a1228 100%)",
  Dramatics:   "linear-gradient(135deg, #0d2233 0%, #0f4a6e 50%, #061624 100%)",
  Literature:  "linear-gradient(135deg, #0d2a1a 0%, #0f5e38 50%, #061a10 100%)",
  Other:       "linear-gradient(135deg, #1a1a2e 0%, #3a3060 50%, #0f0f1e 100%)",
  default:     "linear-gradient(135deg, #0f0f2e 0%, #2a1a5e 50%, #080820 100%)",
};

const EventCard = ({ event, index = 0 }) => {
  const { eventId, name, description, category, eventType, link } = event;
  const eventRouteId = encodeURIComponent(String(eventId ?? "").trim());
  const isOnline = eventType === "Online";
  const icon = categoryIcons[category] || categoryIcons.default;
  const gradient = categoryGradients[category] || categoryGradients.default;
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = link && !imgFailed;

  return (
    <Link
      to={`/events/${eventRouteId}`}
      className="block animate-[fadeUp_0.45s_ease-out_both] group"
      style={{ animationDelay: `${(index % 9) * 60}ms` }}
    >
      <div
        className="relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
        style={{
          minHeight: "320px",
          background: showImage ? "transparent" : gradient,
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      >
        {/* Full-card background image */}
        {showImage && (
          <img
            src={link}
            alt={name}
            onError={() => setImgFailed(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            style={{ zIndex: 0 }}
          />
        )}

        {/* Gradient overlay — stronger at bottom */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background: showImage
              ? "linear-gradient(to bottom, rgba(8,12,30,0.25) 0%, rgba(8,12,30,0.45) 40%, rgba(8,12,30,0.88) 75%, rgba(8,12,30,0.97) 100%)"
              : "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(8,12,30,0.75) 60%, rgba(8,12,30,0.97) 100%)",
          }}
        />

        {/* ── Top row: icon circle + status pill ── */}
        <div className="relative flex items-start justify-between p-4" style={{ zIndex: 2 }}>
          {/* Category icon circle */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: "rgba(255,255,255,0.75)" }}>
              {icon}
            </svg>
          </div>

          {/* Online / Offline pill */}
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
            style={isOnline ? {
              background: "rgba(16,185,129,0.15)",
              color: "#6ee7b7",
              border: "1px solid rgba(52,211,153,0.28)",
              backdropFilter: "blur(8px)",
            } : {
              background: "rgba(0,0,0,0.35)",
              color: "#9ca3af",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: isOnline ? "#34d399" : "#6b7280" }}
            />
            {eventType}
          </span>
        </div>

        {/* ── Bottom content ── */}
        <div className="relative mt-auto px-5 pb-5 pt-2" style={{ zIndex: 2 }}>
          {/* Event name */}
          <h3
            className="text-[17px] font-bold leading-snug mb-2"
            style={{ color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            className="text-[13px] leading-relaxed line-clamp-3 mb-4"
            style={{ color: "rgba(210,215,240,0.8)", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          >
            {description || "Details coming soon."}
          </p>

          {/* Tags row */}
          <div className="flex items-center justify-end gap-2">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
              }}
            >
              {category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
