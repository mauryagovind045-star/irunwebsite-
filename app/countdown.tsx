"use client";

import { useEffect, useState } from "react";

/* Weekly sessions: Wednesday 6 PM, Saturday 5:30 AM, Sunday 6 AM. */
const RUNS: { day: number; hour: number; minute: number }[] = [
  { day: 3, hour: 18, minute: 0 },
  { day: 6, hour: 5, minute: 30 },
  { day: 0, hour: 6, minute: 0 },
];

function nextRun(): Date {
  const now = new Date();
  let best: Date | null = null;
  for (const r of RUNS) {
    const d = new Date(now);
    d.setHours(r.hour, r.minute, 0, 0);
    let ahead = (r.day - now.getDay() + 7) % 7;
    if (ahead === 0 && now >= d) ahead = 7;
    d.setDate(now.getDate() + ahead);
    if (!best || d < best) best = d;
  }
  return best!;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [t, setT] = useState("--D : --H : --M : --S");

  useEffect(() => {
    const tick = () => {
      const secs = Math.max(
        0,
        Math.floor((nextRun().getTime() - Date.now()) / 1000)
      );
      setT(
        `${pad(Math.floor(secs / 86400))}D : ${pad(
          Math.floor((secs % 86400) / 3600)
        )}H : ${pad(Math.floor((secs % 3600) / 60))}M : ${pad(secs % 60)}S`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="label tick mt-3" style={{ color: "var(--accent)" }}>
      Next session in {t}
    </p>
  );
}
