import React from 'react';
import './Event.css';

export default function Event() {
    return (
        <div className="coming-soon-container">
            <div className="coming-soon-content">
                <h1>Coming Soon</h1>
                <p>We're working on something exciting!</p>
                <div className="coming-soon-animation">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <p className="coming-soon-text">Stay tuned for updates</p>
            </div>
        </div>
    );
}