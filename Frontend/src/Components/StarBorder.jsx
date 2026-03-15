import React from "react";
import "./StarBorder.css";

const StarBorder = ({ children, color = "#a855f7", speed = "6s", className = "" }) => (
  <div
    className={`star-border-container ${className}`}
    style={{ "--star-color": color, "--animation-speed": speed }}
  >
    <div className="star-border-glow" />
    <div className="inner-content">{children}</div>
  </div>
);

export default StarBorder;
