"use client";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("Sept 1, 2023 00:00:00").getTime()
  );

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateCountdown = () => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  };

  useEffect(() => {
    // Update the countdown every 1 second
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(interval);
    };
  }, [countdownDate]);

  return (
    <div className="w-screen h-screen flex px-4 flex-col justify-center items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white shadow-md p-3 px-8">
        <img src="/logovc.png" className="w-24" alt="logo" />
      </div>
      <h2 className="text-2xl md:text-4xl font-semibold py-4">
        We are relaunching soon
      </h2>
      <p className="text-lg text-center md:text-2xl py-3 ">
        Stay tuned for updates and get ready for an extraordinary experience!
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 p-2 font-medium">
        <div className="bg-white rounded-full px-6 py-2 min-w-[120px] text-center">
          <span className="text-center text-xs md:text-base">{days} days</span>
        </div>
        <div className="bg-white rounded-full px-6 py-2 min-w-[120px] text-center">
          <span className="text-sm md:text-base">{hours} hours</span>
        </div>
        <div className="bg-white rounded-full px-6 py-2 min-w-[120px] text-center">
          <span className="text-sm md:text-base">{minutes} mins</span>
        </div>
        <div className="bg-white rounded-full px-6 py-2 min-w-[120px] text-center">
          <span className="text-sm md:text-base">{seconds} sec</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
