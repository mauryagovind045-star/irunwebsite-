import Reveal from "./reveal";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const REGISTER_URL =
  "https://www.townscript.com/e/irun-goa-marathon-2026-7th-edition-323112";
const RESULTS_URL =
  "https://ifinish.in/eventresult/result-I-RUN-GOA-MARATHON-2026";
const WHATSAPP_URL = "https://wa.me/919325173202";

const races = [
  {
    img: "route.jpg",
    name: "I-Run 32",
    kind: "20 Miler",
    dist: "[ 32 KM ]",
    tag: "Timed · Chip bib",
    desc: "The longest race on the card. A 20-mile test of months of training, run while Goa is still waking up.",
  },
  {
    img: "g5.jpg",
    name: "I-Run 21",
    kind: "Half Marathon",
    dist: "[ 21.1 KM ]",
    tag: "Timed · Chip bib",
    desc: "The classic half — the distance most runners train all season for, with full chip timing.",
  },
  {
    img: "g4.jpg",
    name: "I-Run 10",
    kind: "Timed Run",
    dist: "[ 10 KM ]",
    tag: "Timed · Chip bib",
    desc: "Fast, honest racing. Ten kilometres with a chip on your bib and a clock at the finish.",
  },
  {
    img: "g2.jpg",
    name: "I-Run 05",
    kind: "Timed Run",
    dist: "[ 5 KM ]",
    tag: "Timed · Chip bib",
    desc: "Your first race distance, taken seriously — timed from gun to finish line.",
  },
  {
    img: "family.jpg",
    name: "I-Run 05",
    kind: "Fun Run",
    dist: "[ 5 KM ]",
    tag: "Untimed",
    desc: "No clock, no pressure. Run, jog, or walk it with family and friends.",
  },
  {
    img: "g6.jpg",
    name: "I-Run 02",
    kind: "Charity Run",
    dist: "[ 2 KM ]",
    tag: "Untimed · For the cause",
    desc: "Two kilometres where every step goes to the cause — open to all ages.",
  },
];

const causes = [
  {
    num: "01",
    img: "g4.jpg",
    name: "Child Education",
    desc: "Through I-Educare, the foundation sponsors free education for underprivileged children across Goa.",
  },
  {
    num: "02",
    img: "g6.jpg",
    name: "A Cleaner Goa",
    desc: "I-Clean drives cleanliness and reduced plastic usage — awareness that starts on the race route.",
  },
  {
    num: "03",
    img: "family.jpg",
    name: "A Greener Goa",
    desc: "Tree plantation and soil conservation projects that outlast every finish line.",
  },
];

const ticker = [
  "Run for a cause",
  "Run for Goa",
  "Est. 2018",
  "7 editions",
  "2 — 32 KM",
  "4:30 AM start gun",
];

const partners = [
  { img: "goa-tourism.png", name: "Goa Tourism" },
  { img: "superyou.png", name: "SuperYou" },
  { img: "sumit-group.png", name: "Sumit Group" },
  { img: "ssrc-logistics.png", name: "SSRC Logistics" },
  { img: "sandu-ayurveda.png", name: "Sandu Ayurveda" },
  { img: "optica-indira.png", name: "Optica Indira" },
  { img: "mindscape-construction.png", name: "Mindscape Construction and Real Estate" },
  { img: "mindscape-properties.png", name: "Mindscape Properties" },
  { img: "luxescape-realty.png", name: "Luxescape Realty" },
  { img: "goa-luxe.png", name: "Goa Luxe" },
  { img: "eleven-eleven.png", name: "11:11" },
  { img: "squadrans-security.png", name: "Squadrans Security" },
];

const faqs = [
  {
    q: "When is the next edition?",
    a: "The 7th edition was run on Sunday, 4 January 2026 at Goa University grounds, Taleigao — 4:30 AM to 11:00 AM. The 8th edition will be announced on our Instagram and WhatsApp; registrations open on Townscript.",
  },
  {
    q: "What are the race categories?",
    a: "Six categories: I-Run 32 KM (20 Miler), 21 KM (Half Marathon), 10 KM and 5 KM timed runs, a 5 KM fun run, and a 2 KM charity run. There's a distance for every age and every pace.",
  },
  {
    q: "What does every participant get?",
    a: "A medal, an e-certificate, an event t-shirt, post-run refreshments, and official photos. Timed categories also get a chip-timing bib and results on iFinish.",
  },
  {
    q: "Where does the money go?",
    a: "The event is organised by I-Help Foundation Goa, a registered NGO. Proceeds support free education for underprivileged children (I-Educare), cleanliness and plastic-reduction drives (I-Clean), tree plantation, and soil conservation.",
  },
  {
    q: "How do I contact the team?",
    a: "WhatsApp or call 93251 73202 / 82089 26671 / 78229 57198 / 95189 20790, or email irungoamarathon@gmail.com. Office: Gera Imperium Grand, Patto-Panjim, Goa.",
  },
];

export default function Home() {
  return (
    <main>
      <Reveal />
      {/* ---------- nav ---------- */}
      <header className="border-b border-[#0e1049]/10">
        <nav className="mx-auto flex w-[min(94%,80rem)] items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={`${bp}/logo-mark-navy.png`}
              alt="I-Run Goa Marathon logo"
              className="h-9 w-auto"
            />
            <span className="label">I-Run Goa Marathon</span>
          </a>
          <div className="nav-links items-center gap-10">
            <a href="#story" className="label text-[#0e1049]/60 hover:text-[#0e1049]">
              Our story
            </a>
            <a href="#races" className="label text-[#0e1049]/60 hover:text-[#0e1049]">
              Races
            </a>
            <a href="#cause" className="label text-[#0e1049]/60 hover:text-[#0e1049]">
              The cause
            </a>
            <a href="#partners" className="label text-[#0e1049]/60 hover:text-[#0e1049]">
              Partners
            </a>
            <a href="#faq" className="label text-[#0e1049]/60 hover:text-[#0e1049]">
              FAQ
            </a>
          </div>
          <a href={REGISTER_URL} className="btn btn-accent btn-sm">
            Register ↗
          </a>
        </nav>
      </header>

      {/* ---------- hero ---------- */}
      <section id="top">
        <div className="hero-fit">
          <div className="mx-auto w-full max-w-[min(94%,80rem)] pt-8 sm:pt-12">
            <p className="rise label" style={{ color: "var(--accent)" }}>
              [ Annual charity marathon · Goa University grounds, Taleigao ]
            </p>
            <h1 className="rise rise-2 display mt-5 text-[clamp(2.3rem,6.4vw,5.6rem)]">
              The heartbeat
              <span className="streaks" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <br />
              of Goa&apos;s running
              <br />
              <span className="outline-navy">community</span>
              <span style={{ color: "var(--accent)" }}> /</span>
            </h1>
            <div className="rise rise-3 mt-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-t border-[#0e1049]/10 pt-4 pb-8">
              <p className="label" style={{ color: "var(--gray)" }}>
                6 races · 2 — 32 KM
              </p>
              <p className="label" style={{ color: "var(--gray)" }}>
                4:30 AM start gun · Sunday
              </p>
              <p className="label" style={{ color: "var(--gray)" }}>
                7th edition · by I-Help Foundation Goa
              </p>
            </div>
          </div>
          <div className="treat relative min-h-[16rem] flex-1 overflow-hidden">
            <img
              src={`${bp}/images/hero.jpg`}
              alt="Runners at the I-Run Goa Marathon"
              className="hero-settle absolute inset-0 h-full w-full object-cover object-[50%_18%]"
            />
            <p className="label absolute bottom-6 left-6 bg-[#0e1049] px-4 py-3 text-white">
              <span style={{ color: "var(--accent-bright)" }}>04:30 AM</span> —
              the start gun at Goa University
            </p>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track display">
            {[0, 1].map((n) => (
              <div className="marquee-seg" key={n}>
                {ticker.map((t) => (
                  <span className="marquee-item" key={t}>
                    {t}
                    <span className="marquee-slash">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- our story ---------- */}
      <section
        id="story"
        className="text-white"
        style={{ background: "var(--slate)" }}
      >
        <div className="mx-auto w-[min(94%,64rem)] py-24 text-center sm:py-32">
          <p className="label mb-10 text-white/50">Our story</p>
          <h2
            data-reveal
            className="display mx-auto text-[clamp(1.5rem,3.2vw,2.4rem)] leading-tight"
          >
            Since 2018, I-Run Goa Marathon has brought men, women, and children
            of every age out of their homes and onto the road —{" "}
            <span className="text-white/40">
              running as the key to health, inspiration, and community.
            </span>
          </h2>
          <div data-reveal className="relative mt-20">
            <svg
              viewBox="0 0 900 300"
              fill="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                className="route-path"
                d="M10 240 C 110 90, 190 270, 300 170 S 470 40, 580 180 S 760 260, 840 80 L 868 96"
                stroke="var(--accent-bright)"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="868" cy="96" r="5" fill="var(--accent-bright)" fillOpacity="0.55" />
            </svg>
            <p className="ghost relative text-[clamp(4.5rem,15vw,13rem)]">
              7 EDITIONS
            </p>
            <p className="label relative mt-6 text-white/50">
              2018 — 2026 · Run for a cause, run for Goa
            </p>
          </div>
        </div>
      </section>

      {/* ---------- the path ---------- */}
      <section>
        <div className="treat grain">
          <img
            src={`${bp}/images/challenge.jpg`}
            alt="Runner passing the checkered curb at dawn"
            className="h-[52vh] min-h-[20rem] w-full object-cover object-[50%_22%]"
          />
        </div>
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <div data-reveal className="grid gap-10 lg:grid-cols-[14rem_1fr]">
            <p className="label leading-loose" style={{ color: "var(--gray)" }}>
              It&apos;s not about how fast you run. It&apos;s about not
              stopping.
            </p>
            <h2 className="display text-[clamp(2.2rem,5.5vw,4.6rem)]">
              From the 4:30 AM start gun to the{" "}
              <span style={{ color: "var(--accent)" }}>last finisher/.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ---------- race categories ---------- */}
      <section
        id="races"
        className="text-white"
        style={{ background: "var(--coal)" }}
      >
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <div className="mb-14 flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="label" style={{ color: "var(--accent-bright)" }}>
                [ Race categories ]
              </p>
              <p className="label mt-3 text-white/50">
                Every edition · Sunday · 4:30 AM — 11:00 AM
              </p>
            </div>
            <a href={RESULTS_URL} className="label text-white/60 hover:text-white">
              — 2026 results on iFinish ↗
            </a>
          </div>

          {races.map((r, i) => (
            <article key={i} data-reveal className="session-row treat">
              <img
                src={`${bp}/images/${r.img}`}
                alt={`${r.name} ${r.kind}`}
                className="h-24 w-full max-w-[11rem] object-cover"
              />
              <div>
                <h3 className="display text-[clamp(1.5rem,3vw,2.2rem)]">
                  {r.name} —{" "}
                  <span style={{ color: "var(--accent-bright)" }}>{r.kind}</span>
                </h3>
                <p className="label tick mt-3 text-white/80">
                  {r.dist}{" "}
                  <span style={{ color: "var(--accent-bright)" }}>{r.tag}</span>
                </p>
              </div>
              <p className="text-sm leading-relaxed text-white/50">{r.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- the cause ---------- */}
      <section
        id="cause"
        style={{ background: "var(--bone)", color: "var(--ink)" }}
      >
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <p className="label mb-14 text-center">The cause</p>
          <div data-reveal className="mb-12 max-w-xl">
            <h2 className="display text-[clamp(2rem,4.5vw,3.4rem)]">
              Run for a cause,{" "}
              <span style={{ color: "var(--gray)" }}>run for Goa</span>
            </h2>
          </div>
          <div data-reveal className="grid gap-8 sm:grid-cols-3">
            {causes.map((c) => (
              <figure key={c.num}>
                <figcaption className="label mb-3">{c.num}</figcaption>
                <div className="mono-photo aspect-[4/5] overflow-hidden">
                  <img
                    src={`${bp}/images/${c.img}`}
                    alt={c.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="display mt-4 text-xl">{c.name}</p>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--gray-dark)" }}
                >
                  {c.desc}
                </p>
              </figure>
            ))}
          </div>
          <div
            data-reveal
            className="mt-24 grid items-start gap-10 lg:grid-cols-[16rem_1fr]"
          >
            <div className="mono-photo aspect-[4/3] w-full max-w-[16rem] overflow-hidden">
              <img
                src={`${bp}/images/g3.jpg`}
                alt="Two runners pacing each other"
                className="h-full w-full object-cover"
              />
            </div>
            <blockquote>
              <p className="display text-[clamp(1.5rem,3.4vw,2.6rem)]">
                &ldquo;Everyone who stands at the start line began their journey
                months before —{" "}
                <span style={{ color: "var(--gray)" }}>
                  training, and adding miles to their life.&rdquo;
                </span>
              </p>
              <p
                className="mt-8 max-w-lg text-sm leading-relaxed"
                style={{ color: "var(--gray-dark)" }}
              >
                Every participant crosses the line to a medal, an e-certificate,
                an event tee, refreshments, and official photos — and every
                registration funds the foundation&apos;s work across Goa.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ---------- register ---------- */}
      <section
        id="join"
        className="text-white"
        style={{ background: "var(--accent)" }}
      >
        <div className="mx-auto w-[min(94%,80rem)] py-24 sm:py-32">
          <p className="label mb-16 text-center text-white/70">
            Est. 2018 — 9 years of I-Help Foundation Goa
          </p>
          <div
            data-reveal
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          >
            <h2 className="display text-[clamp(4rem,13vw,11rem)]">Run</h2>
            <div className="treat h-[clamp(5rem,14vw,11rem)] w-[clamp(8rem,22vw,18rem)] overflow-hidden">
              <img
                src={`${bp}/images/crew.jpg`}
                alt="Two smiling runners mid-stride"
                className="h-full w-full object-cover"
              />
            </div>
            <h2
              className="display text-[clamp(4rem,13vw,11rem)]"
              style={{ color: "var(--accent-bright)" }}
            >
              for Goa
            </h2>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-10">
            <p className="label max-w-[16rem] leading-loose text-white/70">
              Fitness, joy, and the satisfaction of a finish line that gives
              back to Goa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={REGISTER_URL} className="btn btn-light">
                Register on Townscript ↗
              </a>
              <a href={WHATSAPP_URL} className="btn btn-ghost-light">
                WhatsApp the team ↗
              </a>
            </div>
            <p className="label text-right leading-loose text-white/70">
              Goa University grounds
              <br />
              Taleigao · North Goa
            </p>
          </div>
        </div>
      </section>

      {/* ---------- partners ---------- */}
      <section id="partners" className="border-t border-[#0e1049]/10">
        <div className="mx-auto w-[min(94%,80rem)] py-20 sm:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label" style={{ color: "var(--accent)" }}>
                [ Our partners ]
              </p>
              <h2 className="display mt-4 text-[clamp(1.8rem,4vw,3rem)]">
                The brands behind the start line
              </h2>
            </div>
            <p
              className="label max-w-[18rem] leading-loose"
              style={{ color: "var(--gray)" }}
            >
              Every edition runs on the support of Goa&apos;s businesses and
              institutions.
            </p>
          </div>
          <div data-reveal className="partner-grid">
            {partners.map((p) => (
              <div key={p.img} className="partner-tile" title={p.name}>
                <img
                  src={`${bp}/partners/${p.img}`}
                  alt={p.name}
                  loading="lazy"
                />
              </div>
            ))}
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
      <footer className="text-white" style={{ background: "var(--ink)" }}>
        <div className="mx-auto flex w-[min(94%,80rem)] items-center justify-between pt-16 pb-6">
          <p className="display text-[clamp(1rem,2.4vw,1.8rem)]">
            We don&apos;t just run
          </p>
          <p className="display text-[clamp(1rem,2.4vw,1.8rem)] text-white/60">
            We run for Goa
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
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://www.instagram.com/irun_goa_marathon/"
                className="label text-white/60 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/irungoamarathon"
                className="label text-white/60 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="mailto:irungoamarathon@gmail.com"
                className="label text-white/60 hover:text-white"
              >
                Email
              </a>
            </div>
            <p className="label text-white/40">
              © 2026 I-Run Goa Marathon · I-Help Foundation Goa
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
