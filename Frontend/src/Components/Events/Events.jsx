import React, { useState, useEffect } from 'react';
import EventTabs from './EventTabs';
import EventGrid from './EventGrid';
import localEvents from './EventData.json';
import frameBg from '../../assets/Events_Background/frame_000391.webp';
import AbhyudayaLogo from '../../assets/Logo-images/Abhyudaya-combined.png';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Extract unique categories
  const categories = ['All', 'Art', 'Dance', 'Music', 'Dramatics', 'Literature', 'Other'];
  
  // Load events from local data
  useEffect(() => {
    let isMounted = true;
    
    const loadAllEvents = () => {
      try {
        setLoading(true);
        setError(null);
        
        if (isMounted) {
          setAllEvents(localEvents);
          setFilteredEvents(localEvents);
        }
      } catch (error) {
        console.error("Error loading events:", error);
        if (isMounted) {
          setError("Failed to load events");
          setAllEvents([]);
          setFilteredEvents([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    loadAllEvents();
    
    return () => {
      isMounted = false;
    };
  }, []);
  
  // Filter events when category or type changes
  useEffect(() => {
    let result = allEvents;
    if (activeCategory !== 'All') {
      result = result.filter(e => e.category === activeCategory);
    }
    if (activeType !== 'All') {
      result = result.filter(e => e.eventType === activeType);
    }
    setFilteredEvents(result);
  }, [activeCategory, activeType, allEvents]);

  
  return (
    <div
      className="min-h-screen text-gray-100"
      style={{
        backgroundImage: `url(${frameBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay so content stays readable */}
      <div className="min-h-screen" style={{ background: "rgba(4,6,18,0.72)" }}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden pb-6 pt-8 flex flex-col items-center">

        {/* Abhyudaya Logo */}
        <img
          src={AbhyudayaLogo}
          alt="Abhyudaya"
          className="w-44 sm:w-56 lg:w-64 h-auto mb-4 drop-shadow-2xl"
        />

        {/* Enchanted pill heading */}
        <div
          className="px-8 py-3 sm:px-14 sm:py-4"
          style={{
            borderRadius: "999px",
            background: "rgba(225,215,195,0.15)",
            border: "1px solid rgba(225,215,195,0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl tracking-widest text-center"
            style={{
              fontFamily: "'EnchantedCustom', cursive",
              color: "#f0e8d5",
              textShadow: "0 2px 12px rgba(0,0,0,0.6), 0 0 30px rgba(255,200,100,0.15)",
              letterSpacing: "0.08em",
            }}
          >
            Events-de-26
          </h1>
        </div>
      </div>

      {/* Thin divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(225,215,195,0.3), transparent)" }} />
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-24">
        <EventTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeType={activeType}
          setActiveType={setActiveType}
        />

        {error ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 6v4m0 3h.01M3 17h14l-7-14-7 14z" stroke="#f87171" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-red-400 text-base font-semibold mb-1">Failed to load events</p>
            <p className="text-gray-600 text-sm mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #7c3aed, #db2777)" }}
            >
              Reload Page
            </button>
          </div>
        ) : (
          <EventGrid events={filteredEvents} loading={loading} />
        )}
      </div>
      </div>
    </div>
  );
};

export default Events;