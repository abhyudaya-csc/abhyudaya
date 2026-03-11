import React from 'react';
import EventCard from './EventCard';

const SkeletonCard = ({ delay = 0 }) => (
  <div
    className="rounded-2xl overflow-hidden animate-pulse"
    style={{
      minHeight: "320px",
      background: "rgba(15,20,50,0.6)",
      border: "1px solid rgba(255,255,255,0.08)",
      animationDelay: `${delay}ms`,
      position: "relative",
    }}
  >
    {/* icon circle */}
    <div className="absolute top-4 left-4 w-9 h-9 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
    {/* bottom content */}
    <div className="absolute bottom-5 left-5 right-5 space-y-3">
      <div className="h-4 rounded-lg w-2/3" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="space-y-2">
        <div className="h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
        <div className="h-2.5 rounded-full w-4/5" style={{ background: "rgba(255,255,255,0.04)" }} />
        <div className="h-2.5 rounded-full w-3/5" style={{ background: "rgba(255,255,255,0.04)" }} />
      </div>
      <div className="flex items-center justify-between pt-1">
        <div className="h-2.5 w-20 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
        <div className="h-6 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
      </div>
    </div>
  </div>
);

const EventGrid = ({ events, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} delay={i * 55} />)}
      </div>
    );
  }

  if (!events?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: "rgba(109,40,217,0.18)", border: "1px solid rgba(168,85,247,0.28)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 7h18M3 12h18M3 17h18" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-gray-300 text-base font-semibold">No events found</p>
        <p className="text-gray-500 text-sm mt-1.5">Check back soon or explore another category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <EventCard key={event._id || event.eventId} event={event} index={index} />
      ))}
    </div>
  );
};

export default EventGrid;