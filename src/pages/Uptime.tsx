import { useEffect, useState } from "react";

export function Uptime() {
  const [uptime, setUptime] = useState("");

  // Konami Code Sequence
  const KONAMI = [
    "@",
    "n",
    "o",
    "o",
    "d",
    "l",
    "e",
    "z",
    "*",
  ];

  let position = 0;

  useEffect(() => {
    let startTime = localStorage.getItem("siteStartTime");
    let start: number;

    if (!startTime) {
      start = new Date("2025-11-07T02:05:00Z").getTime();
      localStorage.setItem("siteStartTime", start.toString());
    } else {
      start = parseInt(startTime, 10);
      if (isNaN(start)) {
        start = Date.now();
        localStorage.setItem("siteStartTime", start.toString());
      }
    }

    const update = () => {
      const diff = Math.floor((Date.now() - start) / 1000);
      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff % 86400) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      const formatted = [
        days > 0 ? `${days} day${days > 1 ? "s" : ""}` : "",
        hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "",
        minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""}` : "",
        `${seconds} second${seconds !== 1 ? "s" : ""}`,
      ]
        .filter(Boolean)
        .join(", ");

      setUptime(formatted);
    };

    update();
    const timer = setInterval(update, 1000);

    //KONAMI CODE LISTENER
    const keyListener = (e: KeyboardEvent) => {
      const key = e.key;

      // Check if the key matches the required Konami sequence
      if (key === KONAMI[position]) {
        position++;

        // Completed sequence!
        if (position === KONAMI.length) {
          const newStart = Date.now();
          localStorage.setItem("siteStartTime", newStart.toString());
          start = newStart;

          alert("🟢 Konami Code Activated! Uptime Reset.");
          position = 0; // reset sequence
        }
      } else {
        // Wrong key → restart tracking
        position = 0;
      }
    };

    window.addEventListener("keydown", keyListener);

    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", keyListener);
    };
  }, []);

  return (
    <div className="text-[#00ff00] mt-1 glow">
      System uptime: {uptime || "initializing..."}
    </div>
  );
}
