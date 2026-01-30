import { useEffect, useState } from "react";
import bgImg from "../assets/images/time-bg.jpg"; 

const DealOfWeek = () => {
    const targetDate = new Date("2026-02-01T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-lg bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-lg text-center">

          <h2 className="text-3xl font-bold mb-4">Deal Of The Week</h2>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            ipsum dolor sit amet, consectetur adipisicing elit
          </p>

          <div className="text-2xl font-semibold mb-6 text-[rgb(200_40_30_/_0.85)]">
            ₹35.00 <span className="text-gray-500 text-base">/ Handbag</span>
          </div>

          {/* COUNTDOWN */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 shadow text-center"
              >
                <span className="block text-2xl font-bold">
                  {String(item.value).padStart(2, "0")}
                </span>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="/shop"
            className="inline-block bg-[rgb(200_40_30_/_0.85)] text-white px-8 py-3 rounded-full hover:bg-[rgb(48_8_5)] transition"
          >
            Shop Now
          </a>

        </div>
      </div>
    </section>
  );
};

export default DealOfWeek;
