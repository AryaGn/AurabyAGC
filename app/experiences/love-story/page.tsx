
"use client";

import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Heart,
  HeartHandshake,
  LockKeyhole,
  MailOpen,
  Sparkles,
  Stars,
  X,
} from "lucide-react";
import Link from "next/link";

const memories = [
  {
    number: "01",
    date: "THE BEGINNING",
    title: "The day everything changed",
    description:
      "Somehow, an ordinary day became the beginning of something extraordinary.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1100&q=85",
    rotate: "-3deg",
  },
  {
    number: "02",
    date: "THE LITTLE THINGS",
    title: "Our kind of magic",
    description:
      "The laughter, the late-night conversations, and the little things nobody else would understand.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1100&q=85",
    rotate: "2.5deg",
  },
  {
    number: "03",
    date: "STILL MY FAVOURITE",
    title: "A thousand more memories",
    description:
      "Not a perfect story. Just our story. And a thousand reasons to keep writing it.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85",
    rotate: "-1.5deg",
  },
];

const timeline = [
  {
    number: "01",
    title: "When our worlds met",
    text: "The first hello. The first smile. The moment that would become a favourite memory.",
    symbol: "✧",
  },
  {
    number: "02",
    title: "When you became my person",
    text: "Somewhere between the conversations and the laughter, you started feeling like home.",
    symbol: "♡",
  },
  {
    number: "03",
    title: "Our little universe",
    text: "The private jokes, familiar looks, silly traditions, and all the things that are simply us.",
    symbol: "∞",
  },
  {
    number: "04",
    title: "Everything still to come",
    text: "More places to see, more memories to make, and more ordinary days worth remembering.",
    symbol: "✦",
  },
];

const reasons = [
  {
    title: "The way you understand me",
    text: "Even when I don't know how to explain myself.",
    symbol: "♡",
  },
  {
    title: "The little things you do",
    text: "The tiny moments that somehow mean everything.",
    symbol: "✧",
  },
  {
    title: "How life feels with you",
    text: "A little softer, a little brighter, a little more like home.",
    symbol: "☾",
  },
  {
    title: "Simply because it's you",
    text: "Not one big reason. A million little ones.",
    symbol: "∞",
  },
];

function FloatingAtmosphere() {
  const butterflies = Array.from({ length: 22 }, (_, id) => ({
    id,
    left: `${(id * 37 + 4) % 97}%`,
    top: `${(id * 29 + 7) % 95}%`,
    delay: `${-((id * 1.7) % 25)}s`,
    duration: `${15 + (id % 7) * 2}s`,
    size: `${17 + (id % 4) * 5}px`,
    flight: `${id % 2 === 0 ? 1 : -1 * (35 + (id % 5) * 10)}px`,
  }));

  const cupids = Array.from({ length: 9 }, (_, id) => ({
    id,
    left: `${(id * 53 + 12) % 94}%`,
    top: `${(id * 31 + 16) % 91}%`,
    delay: `${-((id * 2.2) % 20)}s`,
    duration: `${19 + (id % 5) * 3}s`,
    size: `${21 + (id % 4) * 5}px`,
  }));

  const hearts = Array.from({ length: 18 }, (_, id) => ({
    id,
    left: `${(id * 43 + 3) % 98}%`,
    delay: `${-((id * 1.8) % 18)}s`,
    duration: `${12 + (id % 6) * 2}s`,
    size: `${13 + (id % 4) * 5}px`,
  }));

  const sparkles = Array.from({ length: 25 }, (_, id) => ({
    id,
    left: `${(id * 41 + 9) % 97}%`,
    top: `${(id * 19 + 13) % 94}%`,
    delay: `${-((id % 8) * 0.8)}s`,
    size: `${8 + (id % 3) * 5}px`,
  }));

  return (
    <div className="love-atmosphere" aria-hidden="true">
      {sparkles.map((item) => (
        <span
          key={`sparkle-${item.id}`}
          className="love-sparkle"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
            fontSize: item.size,
          }}
        >
          ✧
        </span>
      ))}

      {butterflies.map((item) => (
        <span
          key={`butterfly-${item.id}`}
          className="love-butterfly"
          style={
            {
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
              animationDuration: item.duration,
              fontSize: item.size,
              "--flight": `${(item.id % 2 === 0 ? 1 : -1) * (35 + (item.id % 5) * 10)}px`,
            } as CSSProperties
          }
        >
          🦋
        </span>
      ))}

      {cupids.map((item) => (
        <span
          key={`cupid-${item.id}`}
          className="love-cupid"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
          }}
        >
          {item.id % 3 === 0 ? "💘" : item.id % 3 === 1 ? "👼" : "🏹"}
        </span>
      ))}

      {hearts.map((item) => (
        <span
          key={`heart-${item.id}`}
          className="love-floating-heart"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
          }}
        >
          {item.id % 3 === 0 ? "♥" : "♡"}
        </span>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#a56d7d] sm:text-xs">
      <span className="h-px w-7 bg-[#d9abb5]" />
      {children}
      <span className="h-px w-7 bg-[#d9abb5]" />
    </div>
  );
}

export default function LoveStoryPage() {
  const [letterOpen, setLetterOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf4f0] text-[#402a32] selection:bg-[#e8c0ca]">
      <FloatingAtmosphere />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-9 md:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs tracking-[0.22em] text-[#75535d] transition hover:text-[#b66f85]"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
          AURA
        </Link>

        <div className="hidden items-center gap-6 text-[10px] uppercase tracking-[0.17em] text-[#987984] sm:flex">
          <a href="#memories" className="transition hover:text-[#b66f85]">
            Memories
          </a>
          <a href="#our-story" className="transition hover:text-[#b66f85]">
            Our story
          </a>
          <a href="#love-letter" className="transition hover:text-[#b66f85]">
            Love letter
          </a>
        </div>

        <a
          href="#love-letter"
          className="rounded-full border border-[#e7cbd0] bg-white/60 px-4 py-2 text-[10px] tracking-[0.13em] text-[#946476] backdrop-blur transition hover:bg-white"
        >
          A LITTLE SURPRISE ♡
        </a>
      </nav>

      {/* Cinematic hero */}
      <section className="relative z-10 flex min-h-[790px] items-center justify-center px-5 pb-24 pt-10 sm:min-h-[850px] sm:px-8">
        <div className="pointer-events-none absolute left-1/2 top-[44%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#edc6ce]/40 blur-[100px] sm:h-[600px] sm:w-[600px]" />

        <div className="relative mx-auto w-full max-w-6xl">
          {/* Floating photo on left */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 1.3, delay: 0.4 }}
            className="hero-photo hero-photo-left absolute left-[1%] top-[10%] hidden w-[190px] sm:block md:left-[7%] md:w-[225px]"
          >
            <div className="rounded-[5px] bg-white p-2 pb-8 shadow-2xl shadow-[#825363]/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=650&q=85"
                alt="A romantic memory"
                className="h-[230px] w-full object-cover md:h-[265px]"
              />
              <p className="pt-3 text-center font-serif text-sm italic text-[#98717e]">
                just us ♡
              </p>
            </div>
          </motion.div>

          {/* Floating photo on right */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 7 }}
            transition={{ duration: 1.3, delay: 0.6 }}
            className="hero-photo hero-photo-right absolute right-[1%] top-[15%] hidden w-[180px] sm:block md:right-[7%] md:w-[220px]"
          >
            <div className="rounded-[5px] bg-white p-2 pb-8 shadow-2xl shadow-[#825363]/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=650&q=85"
                alt="A romantic moment together"
                className="h-[215px] w-full object-cover md:h-[255px]"
              />
              <p className="pt-3 text-center font-serif text-sm italic text-[#98717e]">
                my favourite person
              </p>
            </div>
          </motion.div>

          {/* Tiny decorative photo on mobile */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, y: 20 }}
            animate={{ opacity: 1, rotate: -7, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -left-1 top-2 w-[94px] sm:hidden"
          >
            <div className="rounded-sm bg-white p-1.5 pb-4 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=300&q=75"
                alt=""
                className="h-[105px] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e9ccd2] bg-white/65 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#a36d7e] shadow-sm backdrop-blur-md sm:text-xs">
              <Sparkles size={13} />
              A little universe made for two
              <Heart size={13} />
            </div>

            <h1 className="font-serif text-[3.4rem] leading-[0.99] tracking-[-0.055em] sm:text-7xl md:text-[6.8rem] lg:text-[7.6rem]">
              Some stories
              <br />
              are written
              <br />
              <span className="love-gradient-text italic">in the stars.</span>
            </h1>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 86, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-[#c88b9b] to-transparent"
            />

            <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-[#886e75] sm:text-base">
              Out of all the people, places, and possibilities in this world,
              somehow, your story became my favourite.
            </p>

            <a
              href="#memories"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#9e6579] px-7 py-4 text-xs tracking-[0.12em] text-white shadow-xl shadow-[#9e6579]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#80495f]"
            >
              STEP INTO OUR STORY
              <ArrowDown
                size={15}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>

            <div className="mt-8 flex items-center justify-center gap-2 text-[#bc8a98]">
              <span className="text-sm">♡</span>
              <span className="text-[9px] uppercase tracking-[0.24em]">
                Every little detail matters
              </span>
              <span className="text-sm">♡</span>
            </div>
          </motion.div>

          {/* Bottom photo */}
          <motion.div
            initial={{ opacity: 0, y: 35, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 1.1, delay: 0.9 }}
            className="hero-photo absolute -bottom-16 right-[9%] hidden w-[145px] sm:block md:right-[20%] md:w-[165px]"
          >
            <div className="rounded-sm bg-white p-2 pb-7 shadow-xl shadow-[#825363]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80"
                alt="A memory worth keeping"
                className="h-[145px] w-full object-cover md:h-[160px]"
              />
              <p className="pt-2 text-center font-serif text-xs italic text-[#98717e]">
                and always ♡
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#b18a96]">
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Keep scrolling
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={15} />
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative z-10 px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#e9cdd3] bg-white/70 text-[#bc8292] shadow-sm">
            <HeartHandshake size={25} strokeWidth={1.3} />
          </div>

          <SectionLabel>Not just another love story</SectionLabel>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
            The world is full of stories.
            <br />
            <span className="love-gradient-text italic">
              This one is yours.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#876d75] sm:text-base">
            The best stories aren't always grand gestures and perfect
            photographs. Sometimes they're sleepy conversations, terrible
            jokes, shared secrets, and a familiar hand finding yours. Those
            little moments deserve more than a place in your camera roll.
          </p>

          <div className="mt-9 font-serif text-2xl italic text-[#bd8797]">
            They deserve to be felt again.
          </div>
        </motion.div>
      </section>

      {/* Memory scrapbook */}
      <section
        id="memories"
        className="relative z-10 overflow-hidden bg-[#f4e7e5]/75 px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-white/60 blur-[90px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#eac3cc]/35 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center sm:mb-20">
            <SectionLabel>The memory collection</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Little moments.
              <br />
              <span className="love-gradient-text italic">
                A lifetime of meaning.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#896f76]">
              Imagine opening a little scrapbook of the things that made you,
              you.
            </p>
          </div>

          <div className="grid items-start gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {memories.map((memory, index) => (
              <motion.article
                key={memory.number}
                initial={{ opacity: 0, y: 45, rotate: index === 1 ? 3 : -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                whileHover={{ y: -8, rotate: index === 1 ? 1 : -1 }}
                className="memory-polaroid group mx-auto w-full max-w-[390px] bg-white p-3 pb-7 shadow-xl shadow-[#825363]/10 sm:p-4 sm:pb-8"
              >
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={memory.image}
                    alt={memory.title}
                    loading="lazy"
                    className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[370px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#462b35]/35 via-transparent to-transparent opacity-70" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-[#8c596c] backdrop-blur">
                    {memory.date}
                  </span>
                  <span className="absolute bottom-4 right-4 font-serif text-3xl text-white/90">
                    {memory.number}
                  </span>
                </div>

                <div className="px-3 pt-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl text-[#50343e]">
                      {memory.title}
                    </h3>
                    <Heart
                      size={17}
                      className="mt-1 shrink-0 text-[#c48b9a] transition group-hover:fill-[#e8c1ca]"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#8a7178]">
                    {memory.description}
                  </p>
                  <div className="mt-5 font-serif text-sm italic text-[#b57e8e]">
                    A moment to keep forever.
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <span className="font-serif text-xl italic text-[#a87888]">
              And these are only the beginning...
            </span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="our-story"
        className="relative z-10 px-5 py-28 sm:px-8 sm:py-36"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center sm:mb-20">
            <SectionLabel>Our little timeline</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl">
              From hello to
              <span className="love-gradient-text italic"> always.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#896f76]">
              Every chapter brought you a little closer. Every little moment
              became part of the bigger picture.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="timeline-line absolute bottom-8 left-[23px] top-8 w-px sm:left-1/2 sm:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7 }}
                className={`relative mb-12 flex items-start gap-6 last:mb-0 sm:w-1/2 sm:gap-8 ${
                  index % 2 === 0
                    ? "sm:pr-12"
                    : "sm:ml-auto sm:flex-row-reverse sm:pl-12"
                }`}
              >
                <div className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e7c7cf] bg-[#fbf4f0] font-serif text-xl text-[#b27b8b] shadow-sm sm:absolute sm:left-full sm:-translate-x-1/2">
                  {item.symbol}
                </div>

                <div className="flex-1 rounded-2xl border border-[#edd9dc] bg-white/65 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#a56d7d]/5 sm:p-7">
                  <span className="text-[10px] uppercase tracking-[0.23em] text-[#b47d8d]">
                    CHAPTER {item.number}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#8a7178]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="relative z-10 overflow-hidden bg-[#f2e2e2]/75 px-5 py-28 sm:px-8 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f9dce2]/50 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <SectionLabel>The little things</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              A million little reasons.
              <br />
              <span className="love-gradient-text italic">
                One favourite person.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex gap-5 rounded-2xl border border-white/80 bg-white/60 p-6 backdrop-blur-md transition hover:bg-white/90 sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4e0e4] font-serif text-2xl text-[#b47789] transition group-hover:bg-[#e9c4ce]">
                  {reason.symbol}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#8a7178]">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center font-serif text-xl italic text-[#a87888]">
            You don't need a thousand words. Sometimes, you just need them.
          </p>
        </div>
      </section>

      {/* Interactive letter */}
      <section
        id="love-letter"
        className="relative z-10 px-5 py-28 sm:px-8 sm:py-36"
      >
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>A little something for you</SectionLabel>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            There is something
            <br />
            <span className="love-gradient-text italic">
              I want you to know.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#896f76]">
            Some words are too special to leave unsaid. This little letter is
            waiting for you.
          </p>

          <div className="relative mx-auto mt-12 flex min-h-[350px] max-w-2xl items-center justify-center">
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#eac4ce]/45 blur-[85px]" />

            <AnimatePresence mode="wait">
              {!letterOpen ? (
                <motion.button
                  key="sealed-letter"
                  type="button"
                  onClick={() => setLetterOpen(true)}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  whileHover={{ y: -7, rotate: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative w-[280px] cursor-pointer sm:w-[360px]"
                  aria-label="Open your love letter"
                >
                  <div className="letter-envelope relative flex h-[210px] items-center justify-center border border-[#dfb7c0] bg-[#f1d5da] shadow-2xl shadow-[#9e6579]/15 sm:h-[245px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#dcaeb9]/35" />
                    <div className="envelope-flap absolute inset-x-0 top-0 h-1/2 origin-top bg-[#e8c2cb]" />

                    <div className="relative z-[1] flex h-[65px] w-[65px] items-center justify-center rounded-full border border-[#c98d9e] bg-[#a96d80] text-[#fff7f5] shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Heart size={27} fill="currentColor" strokeWidth={1.2} />
                    </div>

                    <div className="absolute bottom-4 left-0 right-0 z-[1] text-center font-serif text-sm italic tracking-wide text-[#88586b]">
                      sealed with love
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a36d7e]">
                    <LockKeyhole size={14} />
                    Click to open your letter
                    <Sparkles size={14} />
                  </div>
                </motion.button>
              ) : (
                <motion.div
                  key="open-letter"
                  initial={{ opacity: 0, scale: 0.92, y: 25, rotate: 1 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.65 }}
                  className="relative z-[1] w-full max-w-xl rounded-sm border border-[#ead4c5] bg-[#fffaf0] px-7 py-10 text-left shadow-2xl shadow-[#9e6579]/15 sm:px-12 sm:py-14"
                >
                  <button
                    type="button"
                    onClick={() => setLetterOpen(false)}
                    aria-label="Close love letter"
                    className="absolute right-4 top-4 rounded-full p-2 text-[#a77b82] transition hover:bg-[#f5e5e3]"
                  >
                    <X size={17} />
                  </button>

                  <div className="mb-7 flex items-center justify-center gap-2 text-[#bd8594]">
                    <Sparkles size={17} />
                    <span className="text-[10px] uppercase tracking-[0.24em]">
                      A letter from the heart
                    </span>
                    <Sparkles size={17} />
                  </div>

                  <div className="font-serif text-3xl italic text-[#a96d80]">
                    My favourite person,
                  </div>

                  <div className="mt-6 space-y-5 font-serif text-base leading-8 text-[#71565c] sm:text-lg">
                    <p>
                      If I could keep one feeling forever, it would be the
                      feeling of being with you.
                    </p>
                    <p>
                      Not because every day is perfect, but because even the
                      ordinary days become a little more beautiful when
                      you're part of them.
                    </p>
                    <p>
                      If life is a story, then meeting you is one of my
                      favourite chapters. And if I could ask for one more
                      thing, it would be a thousand more pages with you.
                    </p>
                  </div>

                  <div className="mt-9 border-t border-[#ead8d0] pt-6">
                    <p className="font-serif text-xl italic text-[#a96d80]">
                      Always, in all the little ways. ♡
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs text-[#b27e8d]">
                      <Heart size={13} fill="currentColor" />
                      A little reminder that you are loved.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Closing scene */}
      <section className="relative z-10 overflow-hidden px-5 pb-28 pt-10 sm:px-8 sm:pb-36">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[450px] bg-gradient-to-t from-[#f0dadd]/80 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-7 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e8c8d0] bg-white/65 text-[#bc8193] shadow-sm">
              <Heart size={28} strokeWidth={1.2} />
            </div>
          </div>

          <SectionLabel>The story continues</SectionLabel>

          <h2 className="font-serif text-4xl leading-[1.12] sm:text-5xl md:text-7xl">
            A thousand tomorrows.
            <br />
            <span className="love-gradient-text italic">
              Still choosing you.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#876d75] sm:text-base">
            Your first hello, your favourite photographs, your words, your
            memories. All the pieces that make your love story yours,
            gathered into one experience made just for you.
          </p>

          <Link
            href="/#contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#9e6579] px-8 py-4 text-xs tracking-[0.12em] text-white shadow-xl shadow-[#9e6579]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#80495f]"
          >
            LET'S CREATE YOUR STORY
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <div className="mt-12 flex items-center justify-center gap-3 text-[#b78191]">
            <span className="h-px w-10 bg-[#dfbdc4]" />
            <span className="font-serif text-xl">♡</span>
            <span className="h-px w-10 bg-[#dfbdc4]" />
          </div>

          <p className="mt-5 font-serif text-sm italic text-[#a47d86]">
            Some memories deserve their own little universe.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#e8d6d7] bg-[#fbf4f0]/80 px-5 py-8 text-center backdrop-blur-sm">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.25em] text-[#89576a]"
        >
          AURA
        </Link>
        <p className="mt-3 text-[10px] tracking-[0.12em] text-[#a18489]">
          MADE WITH LOVE · FOR STORIES THAT MATTER
        </p>
      </footer>
    </main>
  );
}