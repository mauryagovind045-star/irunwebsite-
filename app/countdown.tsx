"use client";

import { useEffect, useState } from "react";

/* Weekly group runs: Saturday 5:30 AM, Sunday 6:00 AM, Wednesday 6:00 PM. */
const RUNS: { day: number; hour: number; minute: number; label: string }[] = [
  { day: 6, hour: 5, minute: 30, label: "Saturday 5:30 AM" },
  { day: 0, hour: 6, minute: 0, label: "Sunday 6:00 AM" },
  { day: 3, hour: 18, minute: 0, label: "Wednesday 6:00 PM" },
];

function nextRun(): { date: Date; label: string } {
  const now = new Date();
  let best: { date: Date; label: string } | null = null;
  for (const r of RUNS) {
    const d = new Date(now);
    d.setHours(r.hour, r.minute, 0, 0);
    let ahead = (r.day - now.getDay() + 7) % 7;
    if (ahead === 0 && now >= d) ahead = 7;
    d.setDate(now.getDate() + ahead);
    if (!best || d < best.date) best = { date: d, label: r.label };
  }
  return best!;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [state, setState] = useState<{
    d: string;
    h: string;
    m: string;
    s: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    const tick = () => {
      const { date, label } = nextRun();
      const secs = Math.max(0, Math.floor((date.getTime() - Date.now()) / 1000));
      setState({
        d: pad(Math.floor(secs / 86400)),
        h: pad(Math.floor((secs % 86400) / 3600)),
        m: pad(Math.floor((secs % 3600) / 60)),
        s: pad(secs % 60),
        label,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { v: state?.d ?? "--", u: "Days" },
    { v: state?.h ?? "--", u: "Hours" },
    { v: state?.m ?? "--", u: "Minutes" },
    { v: state?.s ?? "--", u: "Seconds" },
  ];

  return (
    <div>
      <p className="eyebrow mb-3 text-white/90">
        Next group run · {state?.label ?? "…"}
      </p>
      <div className="count-chip" aria-label="Countdown to the next group run">
        {units.map((x) => (
          <div key={x.u}>
            <div className="num">{x.v}</div>
            <div className="unit">{x.u.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
