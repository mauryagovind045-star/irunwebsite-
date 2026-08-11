import Countdown from "./countdown";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const cards = [
  {
    img: "route.jpg",
    title: "Scenic Goa routes",
    text: "Winding roads, sea breeze, and sunrise starts — every route is worth the alarm clock.",
  },
  {
    img: "family.jpg",
    title: "All ages, all paces",
    text: "Kids on their first kilometre to veterans on their fortieth marathon — everyone runs.",
  },
  {
    img: "crew.jpg",
    title: "One crew",
    text: "Pace groups, water stops, and a cheer squad at every race. No one runs alone.",
  },
];

const distances = [
  { num: "5", unit: "KM", note: "First steps" },
  { num: "10", unit: "KM", note: "Find your stride" },
  { num: "21.1", unit: "KM", note: "Half marathon" },
  { num: "42.2", unit: "KM", note: "The full journey" },
];

const runs = [
  {
    name: "Saturday Long Run",
    distance: "10–21 KM",
    when: "Every Saturday · 5:30 AM",
    where: "Group start point, Goa",
    pace: "All pace groups, water stops on route",
  },
  {
    name: "Midweek Tempo",
    distance: "5–8 KM",
    when: "Every Wednesday · 6:00 PM",
    where: "Track session",
    pace: "Structured intervals, coach-led",
  },
  {
    name: "Sunday Easy Miles",
    distance: "5 KM",
    when: "Every Sunday · 6:00 AM",
    where: "Beach-side easy loop",
    pace: "Conversational pace — beginners start here",
  },
];

const stats = [
  { num: "120+", label: "Runners in the crew" },
  { num: "3", label: "Group runs every week" },
  { num: "48,000", label: "Kilometres logged together" },
  { num: "85", label: "Marathons finished" },
];

const gallery = ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg", "g6.jpg"];

function RunnerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="31" cy="10" r="5" fill="var(--navy)" />
      <path
        d="M14 44l8-12 4-10 8 6 8-2"
        stroke="var(--navy)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 20h12M0 27h9M4 34h8"
        stroke="var(--cyan)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="p-2 sm:p-3">
      <main className="overflow-hidden rounded-[1.8rem] bg-white">
        {/* ---------- hero ---------- */}
        <section className="relative flex min-h-[94vh] flex-col">
          <img
            src={`${bp}/images/hero.jpg`}
            alt="I-Run Goa Marathon runners on a morning group run"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(19,28,64,0.35) 0%, rgba(19,28,64,0.05) 35%, rgba(19,28,64,0.72) 100%)",
            }}
          />

          {/* nav */}
          <nav className="relative z-10 mx-auto mt-5 flex w-[min(94%,72rem)] items-center justify-between rounded-full glass px-5 py-2.5 shadow-lg">
            <a href="#top" className="flex items-center gap-2.5">
              <RunnerMark className="h-8 w-8" />
              <span className="wordmark text-sm font-bold sm:text-base">
                I-RUN GOA MARATHON
              </span>
            </a>
            <div className="nav-links items-center gap-7 text-sm font-medium text-[var(--navy)]">
              <a href="#runs">Weekly runs</a>
              <a href="#challenge">Challenge</a>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
            </div>
            <a href="#join" className="btn btn-cyan !py-2.5 !px-5 text-sm">
              Join us
            </a>
          </nav>

          {/* floating event card + countdown */}
          <div className="relative z-10 mx-auto flex w-[min(94%,72rem)] flex-1 flex-col justify-center gap-8 py-10">
            <div className="max-w-sm rounded-2xl bg-white/95 p-6 shadow-xl">
              <p className="eyebrow" style={{ color: "var(--cyan-deep)" }}>
                Community running group · Goa
              </p>
              <p className="display mt-2 text-2xl text-[var(--navy)]">
                Group runs every week — all year round
              </p>
            </div>
            <Countdown />
          </div>

          {/* big headline */}
          <div className="relative z-10 mx-auto w-[min(94%,72rem)] pb-12">
            <h1 className="display text-[clamp(3rem,9.5vw,7.5rem)] text-white">
              RUN GOA. TOGETHER.
            </h1>
            <p className="mt-3 max-w-2xl text-lg font-medium text-white/90">
              From your first 5K to the full 42.2 — train with a crew that
              waits at the finish line for the last runner in.
            </p>
          </div>
        </section>

        {/* ---------- statement + cards ---------- */}
        <section className="mx-auto w-[min(94%,72rem)] py-16 sm:py-24">
          <h2 className="display mx-auto max-w-3xl text-center text-[clamp(1.7rem,3.6vw,2.7rem)] text-[var(--navy)]">
            A marathon is more than a race — it&apos;s a crew that gets you to
            the start line, and home from the finish.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <figure key={c.img} className="photo-card aspect-[4/3]">
                <img src={`${bp}/images/${c.img}`} alt={c.title} />
                <figcaption className="card-caption">
                  <p className="text-lg font-semibold">{c.title}</p>
                  <p className="mt-1 text-sm text-white/85">{c.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- choose your challenge ---------- */}
        <section
          id="challenge"
          className="mx-auto w-[min(94%,72rem)] pb-16 sm:pb-24"
        >
          <div className="photo-card">
            <img
              src={`${bp}/images/challenge.jpg`}
              alt="Runner passing the checkered curb on a Goa road"
              className="max-h-[34rem] w-full object-cover"
            />
            <div
              className="absolute inset-0 flex flex-col justify-between p-7 sm:p-12"
              style={{
                background:
                  "linear-gradient(100deg, rgba(19,28,64,0.78) 0%, rgba(19,28,64,0.25) 60%, transparent 100%)",
              }}
            >
              <div>
                <h2 className="display text-[clamp(2rem,4.5vw,3.4rem)] text-white">
                  Choose your challenge
                </h2>
                <p className="mt-2 max-w-md font-medium text-white/85">
                  First-time runner or seasoned athlete — there&apos;s a
                  distance with your name on it.
                </p>
              </div>
              <div className="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {distances.map((d) => (
                  <div key={d.num} className="distance">
                    <div className="d-num">{d.num}</div>
                    <div className="eyebrow mt-1">{d.unit}</div>
                    <div className="mt-1 text-xs text-white/80">{d.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- weekly runs ---------- */}
        <section id="runs" className="bg-[var(--ice)]">
          <div className="mx-auto w-[min(94%,72rem)] py-16 sm:py-24">
            <p className="eyebrow" style={{ color: "var(--cyan-deep)" }}>
              The weekly schedule
            </p>
            <h2 className="display mt-2 text-[clamp(1.9rem,4vw,3rem)] text-[var(--navy)]">
              Show up. We handle the rest.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {runs.map((run) => (
                <article
                  key={run.name}
                  className="rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(19,28,64,0.08)]"
                >
                  <span
                    className="eyebrow inline-block rounded-full px-3.5 py-1.5 text-white"
                    style={{
                      background:
                        "linear-gradient(120deg, var(--cyan), var(--cyan-deep))",
                    }}
                  >
                    {run.distance}
                  </span>
                  <h3 className="display mt-4 text-xl text-[var(--navy)]">
                    {run.name}
                  </h3>
                  <p className="mt-3 font-semibold">{run.when}</p>
                  <p className="text-[var(--muted)]">{run.where}</p>
                  <p className="mt-3 text-sm text-[var(--muted)]">{run.pace}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- about + stats ---------- */}
        <section id="about" className="mx-auto w-[min(94%,72rem)] py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <figure className="photo-card aspect-[4/3]">
              <img
                src={`${bp}/images/about.jpg`}
                alt="Runners celebrating on a group run"
              />
            </figure>
            <div>
              <p className="eyebrow" style={{ color: "var(--cyan-deep)" }}>
                Who we are
              </p>
              <h2 className="display mt-2 text-[clamp(1.9rem,4vw,3rem)] text-[var(--navy)]">
                Built before sunrise.
              </h2>
              <p className="mt-4 font-medium text-[var(--muted)]">
                I-Run Goa Marathon started with a handful of runners meeting on
                quiet Goa roads before the sun came up. Today we&apos;re a full
                crew — first-timers chasing their first 5K, veterans chasing
                personal bests, and everyone in between.
              </p>
              <p className="mt-3 font-medium text-[var(--muted)]">
                We train as a group: shared plans, pace groups, water stops on
                long-run routes, and a cheer squad at every race we enter.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="stat">
                    <div className="s-num">{s.num}</div>
                    <div className="text-sm font-medium text-[var(--muted)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- gallery ---------- */}
        <section id="gallery" className="mx-auto w-[min(94%,72rem)] pb-16 sm:pb-24">
          <p className="eyebrow" style={{ color: "var(--cyan-deep)" }}>
            Moments from the road
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((g, i) => (
              <figure key={g} className="photo-card aspect-[4/3]">
                <img
                  src={`${bp}/images/${g}`}
                  alt={`I-Run Goa Marathon group run photo ${i + 1}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- join ---------- */}
        <section id="join" className="mx-auto w-[min(94%,72rem)] pb-16 sm:pb-24">
          <div
            className="rounded-[2rem] p-10 text-center sm:p-16"
            style={{
              background:
                "linear-gradient(135deg, var(--navy) 0%, var(--navy-deep) 100%)",
            }}
          >
            <h2 className="display text-[clamp(2.2rem,5.5vw,4.2rem)] text-white">
              Your first run is this weekend.
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-medium text-white/80">
              No fees, no minimum pace, no forms. Message us, show up, and
              we&apos;ll pair you with a pace group.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/910000000000" className="btn btn-cyan">
                Message us on WhatsApp
              </a>
              <a href="mailto:irungoamarathon@gmail.com" className="btn btn-white">
                Email the crew
              </a>
            </div>
          </div>
        </section>

        {/* ---------- footer ---------- */}
        <footer className="border-t border-[var(--ice)] py-8 text-center">
          <p className="text-sm font-medium text-[var(--muted)]">
            I-Run Goa Marathon · see you on the road
          </p>
        </footer>
      </main>
    </div>
  );
}
