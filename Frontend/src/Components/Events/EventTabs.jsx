import React, { useState, useRef, useEffect } from 'react';

const inactive = { color: "rgba(200,195,210,0.7)", background: "rgba(20,22,30,0.85)", border: "1px solid rgba(255,255,255,0.07)" };

const EventTabs = ({ categories, activeCategory, setActiveCategory, activeType, setActiveType }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const activeCount = (activeCategory !== 'All' ? 1 : 0) + (activeType !== 'All' ? 1 : 0);

  return (
    <div className="mb-10 flex justify-end" ref={panelRef}>
      {/* Hamburger trigger */}
      <div className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200"
          style={{
            background: open ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)",
            border: open ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "#e0d8f0",
          }}
        >
          {/* Hamburger icon / X */}
          <span className="flex flex-col justify-center gap-[5px] w-5">
            <span
              className="block h-[2px] rounded-full transition-all duration-200 origin-center"
              style={{
                background: open ? "rgba(168,85,247,0.9)" : "rgba(224,216,240,0.7)",
                transform: open ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[2px] rounded-full transition-all duration-200"
              style={{
                background: open ? "rgba(168,85,247,0.9)" : "rgba(224,216,240,0.7)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-[2px] rounded-full transition-all duration-200 origin-center"
              style={{
                background: open ? "rgba(168,85,247,0.9)" : "rgba(224,216,240,0.7)",
                transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </span>
          <span className="text-sm font-semibold">Filters</span>
          {activeCount > 0 && (
            <span
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center"
              style={{ background: "linear-gradient(90deg,#7c3aed,#db2777)", color: "#fff" }}
            >
              {activeCount}
            </span>
          )}
        </button>

        {/* Dropdown panel */}
        {open && (
          <div
            className="absolute right-0 top-full mt-2 z-50 rounded-2xl p-5 min-w-[280px]"
            style={{
              background: "rgba(6,8,18,0.88)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.75)",
            }}
          >
            {/* Category */}
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(167,140,191,0.7)" }}>
              Category
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {categories.map(category => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                    style={isActive
                      ? { color: "#fff", background: "rgba(28,30,42,0.95)", border: "1px solid rgba(255,255,255,0.22)" }
                      : inactive
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Type */}
            <p className="text-[11px] font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(167,140,191,0.7)" }}>
              Type
            </p>
            <div className="flex gap-2 flex-wrap">
              {['All', 'Online', 'Offline'].map(type => {
                const isActive = activeType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                    style={isActive
                      ? { color: "#fff", background: "rgba(28,30,42,0.95)", border: "1px solid rgba(255,255,255,0.22)" }
                      : inactive
                    }
                  >
                    {type !== 'All' && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: type === 'Online' ? '#34d399' : '#f472b6' }}
                      />
                    )}
                    {type === 'All' ? 'All Types' : type}
                  </button>
                );
              })}
            </div>

            {/* Reset */}
            {activeCount > 0 && (
              <button
                onClick={() => { setActiveCategory('All'); setActiveType('All'); }}
                className="mt-4 w-full py-2 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-75"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(210,200,240,0.7)" }}
              >
                Reset filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTabs;