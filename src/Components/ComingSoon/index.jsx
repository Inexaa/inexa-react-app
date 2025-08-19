import React, { useState, useEffect } from "react";
import './style.css';

const ComingSoon = () => {
  // Set target date to August 8, 2025
  const targetDate = new Date(2025, 7, 9, 0, 0, 0); // Month is 0-indexed (0 = January, 7 = August)
  const targetTime = targetDate.getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetTime - now;

    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0),
      minutes: Math.max(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 0),
      seconds: Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon-root">
      {/* Logo */}
      <img
        src="/images/about-top-inxa.png"
        alt="Inexa Logo"
        className="coming-soon-logo"
      />
      {/* Main Content */}
      <div className="coming-soon-main">
        <h1 className="coming-soon-title">
          We are working hard to bring you a new experience.
        </h1>
        {/* Countdown */}
        <div className="countdown-row">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.minutes },
            { label: 'SEC', value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="countdown-item"
            >
              <span
                className="countdown-number"
              >
                {item.value.toString().padStart(2, '0')}
              </span>
              <span className="countdown-label">{item.label}</span>
            </div>
          ))}
        </div>
        {/* Email */}
        <div className="coming-soon-contact">
          Contact: <a href="mailto:help@inexa.co.za">help@inexa.co.za</a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;