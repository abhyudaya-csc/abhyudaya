import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import EventRegPopUp from './EventRegPopUp';
import frameBg from '../../assets/Events_Background/frame_000391.webp';
import { useSelector, useDispatch } from 'react-redux';
import { removeEvent } from "../Redux/EventSlice";
import allEventsData from './EventData.json';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEventRegPopUpOpen, setIsEventRegPopUpOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const processingEvents = useSelector(state => state.events.processing);
  const eventsPaid = useSelector(state => state.events.eventsPaid);
  const eventsPending = useSelector(state => state.events.eventsPending);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchEvent = () => {
      try {
        setLoading(true);
        setError(null);

        const found = allEventsData.find(
          e => String(e.eventId) === String(id)
        );

        if (isMounted) {
          setEvent(found || null);
        }
      } catch (error) {
        console.error("Error loading event:", error);
        if (isMounted) {
          setError("Failed to load event");
          setEvent(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEvent();
    return () => { isMounted = false; };
  }, [id]);

  const handleUnregister = () => {
    if (event) {
      dispatch(removeEvent(event.eventId));
      toast.success("Unregistered successfully!");
    }
  };

  const isRegistered = 
  (Array.isArray(processingEvents) && processingEvents.some(e => e.eventId === event?.eventId)) ||
  (Array.isArray(eventsPending) && Object.values(eventsPending).flat().some(e => e.eventId === event?.eventId)) ||
  (Array.isArray(eventsPaid) && Object.values(eventsPaid).flat().some(e => e.eventId === event?.eventId));

  const categoryAccent = {
    Art: "#f59e0b", Dance: "#ec4899", Music: "#8b5cf6",
    Dramatics: "#3b82f6", Literature: "#10b981", Photography: "#eab308", Other: "#94a3b8",
  };
  const accent = categoryAccent[event?.category] || "#8b5cf6";

  const pageBg = {
    backgroundImage: `url(${frameBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={pageBg}>
        <div className="absolute inset-0" style={{ background: "rgba(4,6,18,0.80)" }} />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" />
          <p className="text-sm" style={{ color: "rgba(210,215,240,0.7)" }}>Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={pageBg}>
        <div className="absolute inset-0" style={{ background: "rgba(4,6,18,0.80)" }} />
        <div className="relative z-10">
          <p className="text-xl font-semibold mb-6" style={{ color: "#e0d8f0" }}>Event not found</p>
          <Link
            to="/events"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: "linear-gradient(90deg,#7c3aed,#db2777)" }}
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-gray-100" style={pageBg}>
      {/* Dark overlay */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true" style={{ background: "rgba(4,6,18,0.78)", zIndex: 0 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">

        {/* Back link */}
        <Link
          to="/events"
          className="inline-flex items-center gap-1.5 text-sm transition-colors mb-8"
          style={{ color: "rgba(180,185,220,0.6)" }}
          onMouseEnter={e => e.currentTarget.style.color = "rgba(230,225,255,0.9)"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(180,185,220,0.6)"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Events
        </Link>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl text-center mb-8"
          style={{
            fontFamily: "'EnchantedCustom', cursive",
            backgroundImage: "linear-gradient(90deg, #f9a8d4 0%, #c4b5fd 50%, #a5f3fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.04em",
            textShadow: "none",
          }}
        >
          {event.name}
        </h1>

        {/* Main card */}
        <div
          className="rounded-2xl overflow-hidden mb-6"
          style={{
            background: "rgba(10,14,38,0.65)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.55)",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-[48%] flex-shrink-0">
              {event.link && !imgFailed ? (
                <img
                  src={event.link}
                  alt={event.name}
                  onError={() => setImgFailed(true)}
                  className="w-full h-64 md:h-full object-cover"
                  style={{ minHeight: "280px" }}
                />
              ) : (
                <div
                  className="w-full h-64 md:h-full flex items-center justify-center"
                  style={{
                    minHeight: "280px",
                    background: `linear-gradient(135deg, rgba(109,40,217,0.25) 0%, rgba(15,10,40,0.9) 100%)`,
                  }}
                >
                  <div className="flex flex-col items-center gap-3 opacity-40">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
                      <path d="M3 16l5-5 4 4 3-3 6 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white text-xs">Image unavailable</span>
                  </div>
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span
                    className="px-3.5 py-1.5 rounded-full text-sm font-semibold"
                    style={{ background: `rgba(168,85,247,0.2)`, color: "#c4b5fd", border: "1px solid rgba(168,85,247,0.3)" }}
                  >
                    {event.category}
                  </span>
                  <span
                    className="px-3.5 py-1.5 rounded-full text-sm font-semibold"
                    style={event.eventType === "Online"
                      ? { background: "rgba(16,185,129,0.15)", color: "#6ee7b7", border: "1px solid rgba(16,185,129,0.3)" }
                      : { background: "rgba(236,72,153,0.15)", color: "#f9a8d4", border: "1px solid rgba(236,72,153,0.3)" }
                    }
                  >
                    {event.eventType}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
                  {event.description || "Details coming soon."}
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Team Type",        value: event.teamType },
                    { label: "Number of Rounds", value: event.noOfRounds },
                    { label: "Participation Fee", value: event.participationFee === 0 ? "Free" : `\u20b9 ${event.participationFee}` },
                    { label: "Prize Money",       value: event.prizeMoney > 0 ? `\u20b9 ${event.prizeMoney}` : "Revealing soon" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="p-3.5 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.13)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="block text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: accent }}>{label}</span>
                      <span className="block text-[15px] font-bold" style={{ color: "#f0ecff" }}>{value ?? "—"}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Register button */}
              <button
                disabled={isRegistered}
                onClick={isRegistered ? handleUnregister : () => setIsEventRegPopUpOpen(true)}
                className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wide text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={isRegistered
                  ? { background: "linear-gradient(90deg,#dc2626,#b91c1c)", boxShadow: "0 4px 20px rgba(220,38,38,0.3)" }
                  : { background: "linear-gradient(90deg,#7c3aed,#db2777)", boxShadow: "0 4px 24px rgba(124,58,237,0.4)", cursor: "pointer" }
                }
              >
                {isRegistered ? "Already Registered" : "Register Now"}
              </button>
            </div>
          </div>

          {/* Rules section */}
          {event.rules && event.rules.length > 0 && (
            <div
              className="px-6 sm:px-8 py-7"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h2
                className="text-xl font-bold mb-5"
                style={{ color: "#5eead4", textShadow: "0 0 20px rgba(94,234,212,0.3)" }}
              >
                Rules &amp; Guidelines
              </h2>
              <ul className="space-y-3">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5.2L4.1 7.5L8 3" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-300 text-[14px] leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {isEventRegPopUpOpen && (
        <EventRegPopUp
          isOpen={isEventRegPopUpOpen}
          onClose={() => setIsEventRegPopUpOpen(false)}
          onSuccess={() => setIsEventRegPopUpOpen(false)}
          event={event}
        />
      )}
    </div>
  );
};

export default EventDetail;
