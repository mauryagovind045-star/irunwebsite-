import Countdown from "./countdown";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const sessions = [
  {
    img: "g5.jpg",
    day: "Wednesday",
    name: "Speed Run",
    dist: "[ 5–8 KM ]",
    time: "6:00 PM — 7:00 PM",
    desc: "Track intervals with a warm-up jog, sprint repeats, recovery laps, and a cool-down stretch. Coach-led.",
  },
  {
    img: "route.jpg",
    day: "Saturday",
    name: "Long Run",
    dist: "[ 10–21 KM ]",
    time: "5:30 AM — 7:30 AM",
    desc: "The marathon builder. Steady pace groups, water stops on route, and sunrise over Goa's winding roads.",
  },
  {
    img: "g2.jpg",
    day: "Sunday",
    name: "Easy Run",
    dist: "[ 5 KM ]",
    time: "6:00 AM — 7:00 AM",
    desc: "Conversational pace, zero pressure. This is where first-timers start and fast runners recover.",
  },
];

const divisions = [
  { num: "01", img: "g4.jpg", name: "Road Running" },
  { num: "02", img: "g6.jpg", name: "Trail Running" },
  { num: "03", img: "family.jpg", name: "Community Runs" },
];

const faqs = [
  {
    q: "How do I join the club?",
    a: "Message us on WhatsApp or just show up at any session. We'll pair you with a pace group and introduce you around. No forms, no fees.",
  },
  {
    q: "Do I need to be an experienced runner?",
    a: "No. Every session has pace groups from 5:00 to 8:00 min/km, and the Sunday easy run is built for beginners. The only requirement is showing up.",
  },
  {
    q: "What should I bring to a group run?",
    a: "Running shoes, comfortable clothes, and a water bottle. We plan the route, mark the water stops, and nobody gets left behind.",
  },
  {
    q: "Is there a membership fee?",
    a: "No. Running with us is free — you pay only your own race entry fees when we travel to events as a crew.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ---------- nav ---------- */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex w-[min(94%,80rem)] items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={`${bp}/logo-mark.png`}
              alt="I-Run Goa Marathon logo"
              className="h-9 w-auto"
            />
            <span className="label">I-Run Goa Marathon</span>
          </a>
          <div className="nav-links items-center gap-10">
            <a href="#story" className="label text-white/70 hover:text-white">
              Our story
            </a>
            <a href="#schedule" className="label text-white/70 hover:text-white">
              Schedule
            </a>
            <a href="#divisions" className="label text-white/70 hover:text-white">
              Divisions
            </a>
            <a href="#faq" className="label text-white/70 hover:text-white">
              FAQ
            </a>
          </div>
          <a href="#join" className="label" style={{ color: "var(--accent)" }}>
            Join us now ↗
          </a>
        </nav>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top" className="relative">
        <div className="treat relative h-[86vh] min-h-[34rem]">
          <img
            src={`${bp}/images/hero.jpg`}
            alt="I-Run Goa Marathon crew on a sunrise group run"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,12,14,0.5) 0%, rgba(11,12,14,0.08) 40%, rgba(11,12,14,0.92) 100%)",
            }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 pb-10">
          <div className="mx-auto flex w-[min(94%,80rem)] flex-wrap items-end justify-between gap-8">
            <div>
              <p className="label mb-4" style={{ color: "var(--accent)" }}>
                [ Join the club ]
              </p>
              <h1 className="display max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)]">
                Where Goa&apos;s runners meet, motivate, and move forward
              </h1>
            </div>
            <div className="label text-right leading-loose text-white/60">
              Based in — Goa, India
              <br />© 2026
            </div>
          </div>
        </div>
      </section>

      {/* ---------- our story ---------- */}
      <section id="story" style={{ background: "var(--slate)" }}>
        <div className="mx-auto w-[min(94%,64rem)] py-24 text-center sm:py-32">
          <p className="label mb-10 text-white/50">Our story</p>
          <h2 className="display mx-auto text-[clamp(1.5rem,3.2vw,2.4rem)] leading-tight">
            Running has always been more than sport. For us it&apos;s sunrise
            alarms, quiet roads, and a crew{" "}
            <span className="text-white/40">
              that turns strangers into training partners — every single week.
            </span>
          </h2>
          <div className="mt-20">
            <p className="ghost text-[clamp(4.5rem,15vw,13rem)]">48,000 KM</p>
            <p className="label mt-6 text-white/50">
              Run together on Goa&apos;s roads and trails
            </p>
          </div>
        </div>
      </section>

      {/* ---------- the path ---------- */}
      <section className="treat">
        <img
          src={`${bp}/images/challenge.jpg`}
          alt="Runner passing the checkered curb at dawn"
          className="h-[52vh] min-h-[20rem] w-full object-cover"
        />
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
            <p className="label leading-loose text-white/50">
              It&apos;s not about how fast you run. It&apos;s about not
              stopping.
            </p>
            <h2 className="display text-[clamp(2.2rem,5.5vw,4.6rem)]">
              We chase the path — from dawn till{" "}
              <span style={{ color: "var(--accent)" }}>dusk/.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ---------- training schedule ---------- */}
      <section id="schedule" style={{ background: "var(--coal)" }}>
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <div className="mb-14 flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="label" style={{ color: "var(--accent)" }}>
                [ Upcoming session ]
              </p>
              <Countdown />
            </div>
            <p className="label text-white/60">— Training schedule</p>
          </div>

          {sessions.map((s) => (
            <article key={s.day} className="session-row treat">
              <img
                src={`${bp}/images/${s.img}`}
                alt={`${s.day} ${s.name}`}
                className="h-24 w-full max-w-[11rem] object-cover"
              />
              <div>
                <h3 className="display text-[clamp(1.5rem,3vw,2.2rem)]">
                  {s.day} —{" "}
                  <span style={{ color: "var(--accent)" }}>{s.name}</span>
                </h3>
                <p className="label tick mt-3 text-white/80">
                  {s.dist}{" "}
                  <span style={{ color: "var(--accent)" }}>{s.time}</span>
                </p>
              </div>
              <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- running division ---------- */}
      <section
        id="divisions"
        style={{ background: "var(--bone)", color: "var(--ink)" }}
      >
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <p className="label mb-14 text-center">Running division</p>
          <div className="mb-12 max-w-xl">
            <h2 className="display text-[clamp(2rem,4.5vw,3.4rem)]">
              Run with purpose,{" "}
              <span style={{ color: "var(--gray)" }}>connect with others</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {divisions.map((d) => (
              <figure key={d.num}>
                <figcaption className="label mb-3">{d.num}</figcaption>
                <div className="mono-photo aspect-[4/5] overflow-hidden">
                  <img
                    src={`${bp}/images/${d.img}`}
                    alt={d.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="display mt-4 text-xl">{d.name}</p>
              </figure>
            ))}
          </div>
          <div className="mt-24 grid items-start gap-10 lg:grid-cols-[16rem_1fr]">
            <div className="mono-photo aspect-[4/3] w-full max-w-[16rem] overflow-hidden">
              <img
                src={`${bp}/images/g3.jpg`}
                alt="Two runners pacing each other"
                className="h-full w-full object-cover"
              />
            </div>
            <blockquote>
              <p className="display text-[clamp(1.5rem,3.4vw,2.6rem)]">
                &ldquo;Whether it&apos;s personal milestones or team
                achievements,{" "}
                <span style={{ color: "var(--gray)" }}>
                  we run with purpose, pushing limits and celebrating
                  progress.&rdquo;
                </span>
              </p>
              <p className="mt-8 max-w-lg text-sm leading-relaxed" style={{ color: "var(--gray-dark)" }}>
                From casual joggers to competitive athletes chasing podiums —
                we&apos;ve got a pace group that fits your ambition. Explore the
                divisions and find where you belong.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ---------- join the club ---------- */}
      <section id="join">
        <div className="mx-auto w-[min(94%,80rem)] py-24 sm:py-32">
          <p className="label mb-16 text-center text-white/50">
            Est · Goa — present
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            <h2 className="display text-[clamp(4rem,13vw,11rem)]">Join</h2>
            <div className="treat h-[clamp(5rem,14vw,11rem)] w-[clamp(8rem,22vw,18rem)] overflow-hidden">
              <img
                src={`${bp}/images/crew.jpg`}
                alt="Two smiling runners mid-stride"
                className="h-full w-full object-cover"
              />
            </div>
            <h2
              className="display text-[clamp(4rem,13vw,11rem)]"
              style={{ color: "var(--accent)" }}
            >
              the club
            </h2>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-10">
            <p className="label max-w-[16rem] leading-loose text-white/50">
              We value discipline, encouragement, and fun — a community that
              grows stronger with every stride.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/910000000000" className="btn btn-accent">
                Join on WhatsApp ↗
              </a>
              <a href="mailto:irungoamarathon@gmail.com" className="btn btn-ghost">
                Email the crew ↗
              </a>
            </div>
            <p className="label text-right leading-loose text-white/50">
              Based in
              <br />
              Goa, India
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section
        id="faq"
        style={{ background: "var(--bone)", color: "var(--ink)" }}
      >
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <h2 className="display text-[clamp(2.4rem,5vw,3.8rem)]">FAQ /</h2>
          <p className="label mt-2 mb-12" style={{ color: "var(--gray-dark)" }}>
            Frequently asked questions
          </p>
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item">
              <summary>
                <span className="label" style={{ color: "var(--gray-dark)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {f.q}
              </summary>
              <p className="faq-body text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer>
        <div className="mx-auto flex w-[min(94%,80rem)] items-center justify-between pt-16 pb-6">
          <p className="display text-[clamp(1rem,2.4vw,1.8rem)]">
            We don&apos;t just run
          </p>
          <p className="display text-[clamp(1rem,2.4vw,1.8rem)] text-white/60">
            We grow together
          </p>
        </div>
        <div className="giant-wrap text-center" aria-hidden="true">
          <p className="giant">I-RUN GOA</p>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex w-[min(94%,80rem)] flex-wrap items-center justify-between gap-4 py-5">
            <img
              src={`${bp}/logo-mark.png`}
              alt=""
              aria-hidden="true"
              className="h-7 w-auto"
            />
            <p className="label text-white/40">
              © 2026 I-Run Goa Marathon — see you on the road
            </p>
            <a
              href="https://wa.me/910000000000"
              className="label"
              style={{ color: "var(--accent)" }}
            >
              Join us now ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
