import { useState, useEffect } from "react";
import FlipCard from "react-countdown-flip-card";
import "./App.css";

function App() {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 20); // Add 8 days to the current date

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      // Calculate remaining days, hours, minutes, and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      // Clear interval when time reaches 0
      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="countdown">
      <h1 className="title">{`WE'RE LANCHING SOON`}</h1>
      <section className="counter-holder">
        <div className="time-container">
          <FlipCard
            digit={String(days)}
            width={150}
            height={150}
            className="counter"
          />
          <span className="counter-title">days</span>
        </div>
        <div className="time-container">
          <FlipCard
            digit={String(hours)}
            width={150}
            height={150}
            className="counter"
          />

          <span className="counter-title">hours</span>
        </div>
        <div className="time-container">
          <FlipCard
            digit={String(minutes)}
            width={150}
            height={150}
            className="counter"
          />
          <span className="counter-title">minutes</span>
        </div>
        <div className="time-container">
          <FlipCard
            digit={String(seconds)}
            width={150}
            height={150}
            className="counter"
          />
          <span className="counter-title">seconds</span>
        </div>
      </section>
      <section className="socials">
        <img src="/icon-facebook.svg" alt="facebook" />
        <img src="/icon-pinterest.svg" alt="pinterest" />
        <img src="/icon-instagram.svg" alt="instagram" />
      </section>
    </main>
  );
}

export default App;
