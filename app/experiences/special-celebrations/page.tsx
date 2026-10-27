
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SpecialCelebrationsPage() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c2a] text-white">
      {/* Magical sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#8c398e_0%,#30205f_35%,#090c2a_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#17103b]/20 to-[#050817]" />

      {/* Stars */}
      {Array.from({ length: 85 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#ffe8b1]"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 23) % 85}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.3],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: 2 + (i % 4),
            repeat: Infinity,
            delay: (i % 7) * 0.3,
          }}
        />
      ))}

      {/* Violet and pink nebula glow */}
      <motion.div
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-[100px]"
        animate={{ x: [0, 70, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/25 blur-[100px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating golden lights */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute h-2 w-2 rounded-full bg-amber-200 shadow-[0_0_18px_6px_rgba(255,190,75,0.45)]"
          style={{
            left: `${(i * 53 + 7) % 100}%`,
            top: `${30 + ((i * 19) % 60)}%`,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-[#f5d9bc] transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </header>

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.section
            key="entrance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center px-6 pb-16 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="mb-6 text-amber-200"
            >
              <Sparkles size={30} />
            </motion.div>

            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#f5c5e8]">
              Special Celebrations
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-tight sm:text-7xl md:text-8xl">
              Step into a world of
              <span className="block italic text-[#f0a0e2]">magic</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#e8d9f3]/85 sm:text-lg">
              Where every celebration becomes a beautiful story, made just for you.
            </p>

            {/* Glowing bridge entrance */}
            <motion.button
              onClick={() => setEntered(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(255,190,100,0.25)",
                  "0 0 35px rgba(255,190,100,0.65)",
                  "0 0 15px rgba(255,190,100,0.25)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-10 flex items-center gap-3 rounded-full border border-[#ffd69a]/80 bg-[#5b3069]/70 px-7 py-4 text-sm text-[#fff0ce] backdrop-blur-md sm:text-base"
            >
              <Sparkles size={17} />
              Enter the Celebration World
              <ArrowRight size={17} />
            </motion.button>

            <p className="mt-5 text-xs tracking-widest text-white/45">
              FOLLOW THE LIGHTS
            </p>

            {/* Bridge made with glowing lights */}
            <div className="relative mt-12 flex h-20 items-start justify-center gap-2">
              {Array.from({ length: 13 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="mt-3 h-2 rounded-full bg-[#ffd38a]"
                  style={{
                    width: `${8 + Math.abs(6 - i) * 2}px`,
                    boxShadow: "0 0 16px 4px rgba(255,175,70,0.55)",
                  }}
                  animate={{ opacity: [0.35, 1, 0.35], y: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.12,
                  }}
                />
              ))}
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="inside"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center px-6 py-16 text-center"
          >
            <Sparkles className="mb-6 text-amber-200" size={38} />

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#f5c5e8]">
              You've entered
            </p>

            <h2 className="font-serif text-5xl sm:text-7xl">
              The world of
              <span className="mt-2 block italic text-[#f0a0e2]">
                celebrations
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-[#e8d9f3]/80">
              Every beautiful occasion begins with a little magic. Which memory
              shall we create together?
            </p>

            <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
              {[
                ["Birthday Magic", "A day that shines just for you"],
                ["Love & Anniversaries", "Celebrate a story worth keeping"],
                ["Beautiful Surprises", "Turn the unexpected into a memory"],
              ].map(([title, description], i) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl border border-amber-100/20 bg-white/[0.06] p-6 text-left backdrop-blur-lg"
                >
                  <span className="text-2xl text-amber-200">
                    {["✧", "♡", "✦"][i]}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-[#ffe6c0]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setEntered(false)}
              className="mt-10 text-sm text-[#f5c5e8] underline underline-offset-4"
            >
              Return to the entrance
            </button>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}