import React, { useEffect, useState } from "react";

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const Clock: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>(() => formatDate(new Date()));
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    // Update time every second to keep the markers accurate
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 1000);

    // Calculate milliseconds until next local midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    // Update date at next midnight, then every 24h thereafter
    const timeoutId = setTimeout(() => {
      setCurrentDate(formatDate(new Date()));
      const dateIntervalId = setInterval(() => {
        setCurrentDate(formatDate(new Date()));
      }, 24 * 60 * 60 * 1000);

      return () => clearInterval(dateIntervalId);
    }, msUntilMidnight);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  // Get current hour (12-hour format) and minute
  const currentHour = currentTime.getHours() % 12 || 12;
  const currentMinute = currentTime.getMinutes();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white leading-tight font-['Poppins'] transition-colors duration-300">
            Celebrating Bonds Through Bots –
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins']">
            <span className="text-green-500">Friendship Day</span>{" "}
            <span className="text-gray-800 dark:text-white transition-colors duration-300">Special!</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-['Poppins'] transition-colors duration-300">
          This Friendship Day, discover how robots are helping us build deeper
          human connections — from social companion bots to AI-powered
          communication tools. Let's celebrate the friendships that inspire us
          to code, collaborate, and create!
        </p>

        <div className="relative flex items-center justify-center py-12">
          {/* Clock container with 3D gradient & glow */}
          <div
            className="relative w-80 h-80 rounded-full shadow-2xl flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at 40% 30%, #9EBC8A, #73946B, #537D5D)",
              boxShadow:
                "inset 0 15px 30px rgba(0,0,0,0.5), inset 0 -10px 20px rgba(255,255,255,0.1), 0 0 40px rgba(16,185,129,2), 0 0 80px rgba(16,185,129,1)",
            }}
          >
            {/* Clock markers */}
            <div className="absolute -mt-2 inset-4 rounded-full">
              {/* Hour markers */}
              {Array.from({ length: 12 }, (_, i) => {
                const hour = i === 0 ? 12 : i;
                const isCurrentHour = hour === currentHour;
                return (
                  <div
                    key={i}
                    className={`absolute w-1 h-4 transition-colors duration-300 ${
                      isCurrentHour ? "bg-white" : "bg-gray-800 dark:bg-gray-200"
                    }`}
                    style={{
                      left: "50%",
                      transformOrigin: "50% 150px",
                      transform: `translateX(-50%) rotate(${i * 30}deg)`,
                    }}
                  />
                );
              })}

              {/* Minute markers */}
              {Array.from({ length: 60 }, (_, i) => {
                if (i % 5 !== 0) {
                  const isCurrentMinute = i === currentMinute;
                  return (
                    <div
                      key={`minute-${i}`}
                      className={`absolute -mb-1 w-0.5 h-2 transition-colors duration-300 ${
                        isCurrentMinute ? "bg-white" : "bg-gray-700 dark:bg-gray-300"
                      }`}
                      style={{
                        left: "50%",
                        transformOrigin: "50% 150px",
                        transform: `translateX(-50%) rotate(${i * 6}deg)`,
                      }}
                    />
                  );
                }
                return null;
              })}
            </div>

            {/* Clock numbers (1–12) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 12 }, (_, i) => {
                const display = i === 0 ? 12 : i;
                const angle = i * 30;
                const isCurrentHour = display === currentHour;
                return (
                  <span
                    key={i}
                    className={`absolute font-semibold text-lg font-['Poppins'] transition-colors duration-300 ${
                      isCurrentHour ? "text-white" : "text-gray-800 dark:text-gray-200"
                    }`}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -123px) rotate(-${angle}deg)`,
                    }}
                  >
                    {display}
                  </span>
                );
              })}
            </div>

            {/* Center date */}
            <div className="absolute px-8 py-4 rounded-xl text-white font-bold text-2xl tracking-wide bg-white bg-opacity-10 backdrop-blur-sm shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.2),inset_4px_4px_10px_rgba(0,0,0,0.25)] font-['Poppins']">
              {currentDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
