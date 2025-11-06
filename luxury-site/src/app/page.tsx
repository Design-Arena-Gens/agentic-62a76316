/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Celestial Residences",
    description:
      "Architectural poetry suspended between horizon and heaven featuring reactive lighting, scent choreography, and intelligent servants attuned to your aura.",
    badge: "Skyborne Estates",
    emoji: "🏛️",
  },
  {
    title: "Immersive Epics",
    description:
      "Narrative sanctuaries that respond to your heart rate, voice, and ritualistic gestures for a living story tailored to the chosen few.",
    badge: "Narrative Alchemy",
    emoji: "🎼",
  },
  {
    title: "Metaverse Soirées",
    description:
      "Invite-only realms twinning haute couture with real-time volumetric performance, accessible only via K-coded crystals and quantum invitations.",
    badge: "Quantum Club",
    emoji: "🪩",
  },
];

const pillars = [
  {
    title: "Omni-Sensory Craft",
    copy: "Every surface, scent, waveform, and tactility is orchestrated to elicit uncompromising awe.",
    accent: "Sculpted Perfection",
  },
  {
    title: "Hyper-Intelligence",
    copy: "Predictive ambient intelligence learns your rituals and anticipates desires before consciousness.",
    accent: "24K Insight",
  },
  {
    title: "Ultra Responsiveness",
    copy: "Fluid design system scales from wristwatch to metropolis with frame-perfect opulence.",
    accent: "Beyond Responsive",
  },
];

const testimonials = [
  {
    name: "Her Excellency Aurelia V.",
    role: "Sovereign Council of Zephyria",
    quote:
      "K transformed our summit into a celestial opera. Every moment responded to my breath—purely divine.",
  },
  {
    name: "Caspian Ren",
    role: "Founder, Polaris Holdings",
    quote:
      "This is not design. It is orchestration of emotion, light, and quantum hospitality. We signed moments after the reveal.",
  },
  {
    name: "Iset al’Lumen",
    role: "Curator, Museum of Eternal Futures",
    quote:
      "The exhibition they crafted for us has a pulse. Visitors leave altered. K rewrote the definition of prestige.",
  },
];

const stats = [
  { label: "Legacy Patron Score", value: "99.97", suffix: "/100" },
  { label: "Invite-Only Immersions", value: "144", suffix: " curated" },
  { label: "Bespoke Worlds Delivered", value: "28", suffix: " realities" },
  { label: "Élite Satisfaction Index", value: "∞", suffix: " uncompromised" },
];

const futureLines = [
  "Bulletproof experiential strategy for sovereign-level brands.",
  "AI-orchestrated scenography with human soul and celestial pace.",
  "Ultra-premium art direction calibrated to your energy signature.",
  "Sustainable opulence engineered with zero-compromise craftsmanship.",
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function OrbitGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-12 h-72 w-72 animate-pulse-glow rounded-full bg-gradient-to-br from-[#6c5ce7] via-transparent to-transparent opacity-50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 animate-float-slow rounded-full bg-gradient-to-tr from-[#e8c280]/80 via-transparent to-transparent opacity-60 blur-[120px]" />
    </div>
  );
}

function AuroraDivider() {
  return (
    <div className="relative my-16 flex justify-center">
      <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-[#e8c280]/30 to-transparent" />
      <motion.span
        className="absolute -top-3 flex items-center gap-2 rounded-full border border-[#e8c280]/30 bg-[#0b0d17]/80 px-4 py-1 text-xs uppercase tracking-[0.5em] text-[#f8f7f3]/70"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ✨ <span>Beyond Compare</span> ✨
      </motion.span>
    </div>
  );
}

function MagneticLine({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 10%"],
  });
  const translateX = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);

  return (
    <motion.p
      ref={ref}
      className="text-lg text-[#d6d9ff]/80 transition will-change-transform md:text-xl"
      style={{ x: translateX }}
    >
      {text}
    </motion.p>
  );
}

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  useEffect(() => {
    const target = parseFloat(value.replace(/[^\d.]/g, ""));
    if (!Number.isFinite(target)) {
      const instant = requestAnimationFrame(() => setDisplayValue(value));
      return () => cancelAnimationFrame(instant);
    }
    let frame = 0;
    const totalFrames = 60;
    let animation: number;
    const animationFrame = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;
      setDisplayValue(current.toFixed(target % 1 === 0 ? 0 : 2));
      if (progress < 1) {
        animation = requestAnimationFrame(animationFrame);
      }
    };
    animation = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(animation);
  }, [value]);

  return (
    <div className="flex flex-col gap-1 rounded-3xl border border-white/5 bg-white/5 px-6 py-5 backdrop-blur-xl">
      <span className="text-4xl font-light tracking-tight text-gradient md:text-5xl">
        {displayValue}
      </span>
      <span className="text-xs uppercase tracking-[0.4em] text-[#e8c280]/70">
        {suffix}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24 text-[#f8f7f3]">
      <div className="absolute inset-0 noise-layer opacity-45 mix-blend-screen" />

      <header className="relative z-10">
        <nav className="lux-container flex items-center justify-between pt-12">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-3xl">
            <span className="text-2xl font-semibold text-gradient">K</span>
            <span className="text-xs uppercase tracking-[0.4em] text-[#e8c280]/70">
              House of Opulence
            </span>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            {["Manifesto", "Immersions", "Coterie", "Commissions"].map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -2, opacity: 1 }}
                className="rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#d6d9ff]/60 transition hover:border-[#e8c280]/40 hover:text-[#fefbf5]"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <a
            className="btn-gradient hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] md:inline-flex"
            href="#commissions"
          >
            Enter K
          </a>
        </nav>
      </header>

      <main className="relative z-10 mt-20 space-y-24">
        <section
          id="manifesto"
          className="lux-container relative overflow-hidden rounded-[42px] border border-white/10 bg-[rgba(9,11,23,0.86)] px-8 py-16 shadow-[0_40px_140px_-60px_rgba(105,111,255,0.65)] sm:px-12 md:px-20"
        >
          <OrbitGlow />
          <motion.div
            className="mx-auto flex max-w-5xl flex-col gap-10 text-center md:text-left"
            initial="hidden"
            animate="show"
            variants={fadeIn}
          >
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-center">
              <span className="pill sparkle">GOD LEVEL EXCLUSIVITY</span>
              <motion.span
                className="flex items-center gap-3 text-sm uppercase tracking-[0.42em] text-[#d6d9ff]/70"
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, letterSpacing: "0.42em" }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                👁️‍🗨️ Ultra Private Invitation Only
              </motion.span>
            </div>
            <motion.h1
              className="text-balance text-4xl font-light leading-tight text-[#fdf4e3] md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              God level super premium worlds for the{" "}
              <span className="text-gradient">top 0.001% visionaries</span>.
            </motion.h1>
            <p className="max-w-3xl text-lg text-[#d6d9ff]/80 md:text-xl">
              We sculpt ultra-luxurious universes that feel impossibly smooth, impossibly
              intelligent, impossibly you. K orchestrates light, sound, data, and emotion into
              a bespoke moment that only your signature can unlock.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#commissions"
                className="btn-gradient flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.38em]"
              >
                ⚡ Book an Immersion
              </a>
              <a
                href="#coterie"
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.38em] text-[#fdf4e3]/80 transition hover:border-[#e8c280]/40 hover:text-[#fdf4e3]"
              >
                💫 Meet the Inner Circle
              </a>
            </div>
          </motion.div>
          <div className="relative mt-16 flex justify-center">
            <motion.div
              className="gradient-border relative w-full max-w-5xl overflow-hidden rounded-[38px]"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="/hero-luxury.jpg"
                alt="Ultra luxurious environment crafted by K"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1f]/60 via-transparent to-[#050505]/80" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-3xl">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.42em] text-[#e8c280]">
                  ✨ Signature Opulence
                </div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-[#d6d9ff]/70">
                  <span>Quantum Scent</span>
                  <span>Ultra Smooth Visuals</span>
                  <span>AI Concierges</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="immersions" className="lux-container">
          <motion.div
            className="grid gap-10 md:grid-cols-3"
            variants={{
              show: {
                transition: { staggerChildren: 0.16 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeIn}
                className="relative flex flex-col gap-6 rounded-[32px] border border-white/10 bg-[#0b0d17]/50 p-8 transition duration-500 hover:-translate-y-2 hover:border-[#e8c280]/35 hover:shadow-aurora"
              >
                <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-2xl">
                  {item.emoji}
                </div>
                <span className="mt-4 text-xs uppercase tracking-[0.4em] text-[#e8c280]/70">
                  {item.badge}
                </span>
                <h3 className="text-2xl font-light text-[#fdf4e3]">{item.title}</h3>
                <p className="text-sm leading-7 text-[#d6d9ff]/80">{item.description}</p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#7a6bff]/70">
                  <span>Explore</span> <span>→</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <AuroraDivider />

        <section className="lux-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#0f1428]/70 p-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <OrbitGlow />
            <span className="pill">GOD LEVEL SUPER PRIMIUM FRAMEWORK</span>
            <h2 className="mt-6 text-4xl font-light text-[#fdf4e3]">
              We design the future of elite experiential empires.
            </h2>
            <div className="mt-10 space-y-10">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-3xl"
                  whileHover={{ scale: 1.02, x: 6 }}
                >
                  <div className="text-xs uppercase tracking-[0.45em] text-[#e8c280]/80">
                    {pillar.accent}
                  </div>
                  <h3 className="mt-3 text-2xl font-light text-[#fdf4e3]/95">{pillar.title}</h3>
                  <p className="mt-4 text-sm text-[#d6d9ff]/80">{pillar.copy}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="rounded-[38px] border border-[#e8c280]/20 bg-[#0b0d17]/60 p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h3 className="text-lg uppercase tracking-[0.45em] text-[#e8c280]/80">
              Ultra Smooth Metrics
            </h3>
            <p className="mt-6 text-sm text-[#d6d9ff]/75">
              Each engagement is guided by predictive data choreography for flawless performance
              and high-impact storytelling.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} />
              ))}
            </div>
            <div className="mt-10 space-y-3">
              {futureLines.map((line) => (
                <MagneticLine key={line} text={line} />
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="coterie"
          className="lux-container relative overflow-hidden rounded-[42px] border border-white/10 bg-[#100c1b]/80 px-8 py-16"
        >
          <OrbitGlow />
          <div className="mx-auto max-w-4xl text-center">
            <span className="pill">THE INNER CIRCLE</span>
            <h2 className="mt-6 text-4xl font-light text-[#fdf4e3]">
              Testimonials from the ultra select few.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimony) => (
              <motion.blockquote
                key={testimony.name}
                className="relative flex h-full flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 text-left backdrop-blur-3xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-4xl">“</span>
                <p className="text-sm leading-7 text-[#d6d9ff]/80">{testimony.quote}</p>
                <div className="mt-auto">
                  <div className="text-base font-medium text-[#fdf4e3]">{testimony.name}</div>
                  <div className="text-xs uppercase tracking-[0.4em] text-[#e8c280]/70">
                    {testimony.role}
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section
          id="commissions"
          className="lux-container relative overflow-hidden rounded-[42px] border border-white/10 bg-[#050508]/80 px-10 py-16"
        >
          <OrbitGlow />
          <div className="flex flex-col gap-12 lg:flex-row">
            <motion.div
              className="flex-1 space-y-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <span className="pill">COMMISSION A UNIVERSE</span>
              <h2 className="text-4xl font-light leading-tight text-[#fdf4e3]">
                Ready for your next god level super premium masterpiece?
              </h2>
              <p className="text-sm text-[#d6d9ff]/80">
                Submit your encrypted introduction. Our custodians will respond with a bespoke
                immersion protocol designed expressly for your legacy.
              </p>
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.45em] text-[#e8c280]/70">
                  Entry Protocol
                </div>
                <ul className="mt-4 space-y-4 text-sm text-[#d6d9ff]/75">
                  <li>🪙 Share the impossible brief only you can imagine.</li>
                  <li>🪐 Schedule an astral consultation across time zones.</li>
                  <li>🔮 Receive an encrypted sensory storyboard within 72 hours.</li>
                  <li>👑 Host the unveiling in your chosen reality.</li>
                </ul>
              </div>
            </motion.div>
            <motion.form
              className="flex-1 space-y-6 rounded-[36px] border border-white/15 bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur-3xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-[0.45em] text-[#e8c280]/70">
                  Sovereign Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your elite moniker"
                  className="mt-3 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-[#fdf4e3] outline-none transition focus:border-[#e8c280]/60 focus:ring-2 focus:ring-[#6c5ce7]/30"
                />
              </div>
              <div>
                <label htmlFor="realm" className="text-xs uppercase tracking-[0.45em] text-[#e8c280]/70">
                  Realm of Influence
                </label>
                <input
                  id="realm"
                  type="text"
                  placeholder="Galactic Finance, Immortal Artistry, Quantum Hospitality…"
                  className="mt-3 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-[#fdf4e3] outline-none transition focus:border-[#e8c280]/60 focus:ring-2 focus:ring-[#6c5ce7]/30"
                />
              </div>
              <div>
                <label
                  htmlFor="vision"
                  className="text-xs uppercase tracking-[0.45em] text-[#e8c280]/70"
                >
                  Vision Signal
                </label>
                <textarea
                  id="vision"
                  placeholder="Describe the universe we shall manifest just for you."
                  rows={4}
                  className="mt-3 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-[#fdf4e3] outline-none transition focus:border-[#e8c280]/60 focus:ring-2 focus:ring-[#6c5ce7]/30"
                />
              </div>
              <button
                type="submit"
                className="btn-gradient flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm uppercase tracking-[0.4em]"
              >
                🚀 Transmit Request
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="lux-container mt-24 flex flex-col items-center gap-6 pb-6 text-center text-xs uppercase tracking-[0.35em] text-[#e8c280]/70">
        <div className="flex items-center gap-3">
          <span className="text-gradient text-lg font-semibold">K</span>
          <span>House of Opulence</span>
        </div>
        <p className="text-[0.68rem] text-[#d6d9ff]/60">
          © {new Date().getFullYear()} K Consortium. Crafted for the elite. Ultra confidential.
        </p>
      </footer>
    </div>
  );
}
