import { useEffect, useState } from "react";

export function Uptime() {
  const [uptime, setUptime] = useState("");

  useEffect(() => {
    let startTime = localStorage.getItem("siteStartTime");
    let start: number;

    if (!startTime) {
  const start = new Date("2025-11-07T02:05:00Z").getTime(); // UTC time
  localStorage.setItem("siteStartTime", start.toString());
  startTime = start.toString();
    }else {
      // ✅ read from storage safely
      start = parseInt(startTime, 10);
      if (isNaN(start)) {
        // fallback fix if somehow corrupted
        start = Date.now();
        localStorage.setItem("siteStartTime", start.toString());
      }
    }

    const update = () => {
      const diff = Math.floor((Date.now() - start) / 1000); // seconds elapsed
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
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-[#00ff00] mt-1 glow">
      System uptime: {uptime || "initializing..."}
    </div>
  );
}
