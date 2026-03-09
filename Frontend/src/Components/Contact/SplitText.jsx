import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = ({
  text = "",
  className = "",
  delay = 0,
  speed = 60,
  cursorColor = "#a855f7",
}) => {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (displayedCount < text.length) {
        const interval = setInterval(() => {
          setDisplayedCount((prev) => {
            if (prev >= text.length) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, speed);
        return () => clearInterval(interval);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={className} aria-label={text}>
      {text.slice(0, displayedCount)}
      <motion.span
        style={{ color: cursorColor }}
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block font-light ml-[1px]"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingText;
