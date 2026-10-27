
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Stars,
  X,
  MailOpen,
  Moon,
  Flower2,
  Footprints,
  Infinity,
} from "lucide-react";

const memories = [
  {
    title: "The beginning",
    caption: "We didn't know we were making memories.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    rotation: "-5deg",
  },
  {
    title: "Our kind of chaos",
    caption: "The laughs that never make sense to anyone else.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
    rotation: "4deg",
  },
  {
    title: "Little adventures",
    caption: "Ordinary days became extraordinary with you.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=85",
    rotation: "-3deg",
  },
];

const moments = [
  {
    number: "01",
    title: "The first hello",
    text: "Somehow, a simple hello became the beginning of something beautiful.",
    Icon: Sparkles,
  },
  {
    number: "02",
    title: "The inside jokes",
    text: "The jokes nobody else understands. The looks that say everything.",
    Icon: Heart,
  },
  {
    number: "03",
    title: "The unforgettable days",
    text: "Random plans, unexpected adventures, and stories we will tell forever.",
    Icon: Stars,
  },
  {
    number: "04",
    title: "The always",
    text: "Growing, changing, taking different roads — but still having each other.",
    Icon: Infinity,
  },
];

const littleThings = [
  {
    title: "The inside jokes",
    text: "Completely ridiculous. Completely ours.",
    Icon: Heart,
  },
  {
    title: "The long talks",
    text: "One conversation turning into a whole night.",
    Icon: Moon,
  },
  {
    title: "The adventures",
    text: "The plan is optional. The memories aren't.",
    Icon: Footprints,
  },
  {
    title: "The comfort",
    text: "Being yourself without explaining a thing.",
    Icon: Flower2,
  },
];

export default function FriendshipPage() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [activeMemory, setActiveMemory] = useState<number | null>(null);

  return (
    <main className="friendship-page min-h-screen overflow-hidden bg-[#f7f4f0] text-[#332923]">
      {/* HERO */}
      <section className="friendship-hero relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#e7e2fa_0%,transparent_56%),radial-gradient(ellipse_at_bottom,#d9eee7_0%,transparent_48%)]" />

    <motion.div
  aria-hidden="true"
  className="absolute left-[12%] top-[22%] text-[#a69acb]"
  animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Stars size={34} strokeWidth={1} />
</motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute right-[12%] top-[28%] text-[#8bbdb0]"
          animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Flower2 size={38} strokeWidth={1} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d9cde8] bg-white/60 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#80719e] backdrop-blur-sm">
            <Sparkles size={14} />
            A little celebration of us
          </div>

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9b829e]">
            To my favourite human
          </p>

          <h1 className="mx-auto max-w-5xl font-serif text-5xl leading-[1.12] sm:text-7xl md:text-8xl">
            Some people become
            <span className="mt-2 block font-serif italic text-[#9b83bd]">
              your favourite memories.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#766d7d] sm:text-lg">
            And somehow, without even trying, you became one of the best parts
            of my story.
          </p>

          <motion.a
            href="#garden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#39334e] px-7 py-4 text-sm text-white shadow-lg shadow-[#39334e]/15 transition hover:bg-[#51466e]"
          >
            Step into our little world
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </section>

      {/* FLOATING FRIENDSHIP SCRAPBOOK */}
      <section
        id="garden"
        className="relative overflow-hidden bg-[#f7f4f0] px-5 py-24 sm:px-10 md:py-32"
      >
        {/* Soft scrapbook-paper texture and colour */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_25%,rgba(224,210,240,0.42),transparent_38%),radial-gradient(ellipse_at_85%_75%,rgba(213,231,219,0.48),transparent_38%)]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#9281b0]">
              Little pieces of forever
            </p>

            
<h2 className="font-serif text-4xl leading-tight text-[#332923] sm:text-6xl float-memory-text">
  Our memories,
  <span className="block italic text-[#9b83bd] float-memory-text">
    scattered like magic.
  </span>
</h2>
            <p className="mx-auto mt-6 max-w-xl leading-8 text-[#797183]">
              The silly moments, the unexpected adventures, and the people
              who turn ordinary days into stories worth keeping.
            </p>
          </motion.div>

          {/* Floating scrapbook cards */}
          <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {memories.map((memory, index) => (
              <motion.button
                key={memory.title}
                type="button"
                onClick={() => setActiveMemory(index)}
                aria-label={`Open memory: ${memory.title}`}
                initial={{
                  opacity: 0,
                  y: 35,
                  rotate: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: Number.parseFloat(memory.rotation),
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.16,
                }}
                animate={{
                  y: [0, -9, 0, 5, 0],
                }}
                whileHover={{
                  y: -12,
                  rotate: 0,
                  scale: 1.035,
                  transition: { duration: 0.25 },
                }}
                className="group relative mx-auto w-full max-w-[340px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b83bd] focus-visible:ring-offset-4"
                style={{
                  animationDelay: `${index * 0.7}s`,
                }}
              >
                {/* Paper shadow beneath the Polaroid */}
                <div className="absolute -inset-2 rotate-2 rounded-sm bg-[#d8cde2]/45 shadow-xl transition-transform duration-500 group-hover:rotate-[-2deg]" />

                <div className="relative bg-[#fffdf9] p-3 pb-6 shadow-[0_16px_40px_rgba(74,48,75,0.13)] sm:p-4 sm:pb-7">
                  {/* Washi tape */}
                  <div
                    aria-hidden="true"
                    className={`absolute -top-3 left-1/2 z-10 h-7 w-[76px] -translate-x-1/2 rotate-[-5deg] ${
                      index === 0
                        ? "bg-[#d9c9ed]/80"
                        : index === 1
                          ? "rotate-[4deg] bg-[#f0d7b8]/85"
                          : "bg-[#c5e0d5]/85"
                    }`}
                  />

                  {/* Photo */}
                  <div className="relative overflow-hidden bg-[#e9e1e9]">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      loading="lazy"
                      className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-[330px]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#302638]/25 via-transparent to-white/10 opacity-70" />

                    {/* Tiny corner detail */}
                    <div className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/50 bg-white/20 p-2 text-white backdrop-blur-sm">
                      <Heart size={15} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Handwritten-style caption */}
                  <div className="px-2 pt-5">
                    <h3
                      className="font-serif text-2xl text-[#4d3c51]"
                      style={{
                        fontStyle: "italic",
                      }}
                    >
                      {memory.title}
                    </h3>

                    <p className="mt-2 font-serif text-sm italic leading-6 text-[#958399]">
                      {memory.caption}
                    </p>
                  </div>

                  {/* Pressed-flower decoration */}
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-4 -right-3 text-[#a9a0c6]"
                    animate={{
                      rotate: [0, 8, -5, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Flower2
                      size={43}
                      strokeWidth={1}
                      className="drop-shadow-sm"
                    />
                  </motion.div>
                </div>

                <span className="mt-5 block text-center text-[10px] uppercase tracking-[0.23em] text-[#a092aa] opacity-80 transition-opacity group-hover:opacity-100">
                  Open this little memory ↗
                </span>
              </motion.button>
            ))}
          </div>

          {/* Little handwritten note */}
          <motion.div
            initial={{ opacity: 0, y: 18, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-20 max-w-md border border-[#e6dce9] bg-[#fffdf8]/80 px-7 py-6 text-center shadow-[0_8px_30px_rgba(74,48,75,0.05)]"
          >
            <Sparkles
              size={19}
              strokeWidth={1.3}
              className="mx-auto mb-3 text-[#aa96c4]"
            />
            <p className="font-serif text-xl italic leading-8 text-[#77667e]">
              Some days become memories.
              <span className="block">Some people become home.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* MEMORY GALLERY */}
      <section id="memories" className="px-5 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9281b0]">
              Little pieces of forever
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              If these walls could talk,
              <span className="block italic text-[#9b83bd]">
                they would never stop.
              </span>
            </h2>
            <p className="mt-6 leading-8 text-[#797183]">
              A collection of moments that might look ordinary to the world,
              but mean everything to us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {memories.map((memory, index) => (
              <motion.button
                type="button"
                key={memory.title}
                onClick={() => setActiveMemory(index)}
                initial={{ opacity: 0, y: 35, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: memory.rotation,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -12, rotate: 0, scale: 1.035 }}
                className="group mx-auto w-full max-w-[350px] bg-white p-3 pb-6 text-left shadow-[0_15px_45px_rgba(74,48,75,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    loading="lazy"
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#39281f]/0 transition duration-500 group-hover:bg-[#39281f]/10" />
                </div>

                <div className="px-3 pt-5">
                  <h3 className="font-serif text-2xl">{memory.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#85788a]">
                    {memory.caption}
                  </p>
                  <span className="mt-4 inline-block text-xs uppercase tracking-[0.18em] text-[#9281b0]">
                    Open this memory ↗
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-[#9b8da0]">
            These are sample photographs. Your own memories will make this
            story truly yours.
          </p>
        </div>
      </section>

      {/* FRIENDSHIP STORY */}
      <section className="relative overflow-hidden bg-[#22233f] px-6 py-24 text-[#f8f3ff] sm:px-10 md:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#a89ad9]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[#8bd1bf]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c8b9ed]">
              Chapter after chapter
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl">
              Our little story
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-[#c9c5df]">
              Not every friendship is written in books. Some are written in
              late-night conversations, ridiculous laughter, and showing up.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#b9a8e0]/45 sm:left-1/2 sm:-translate-x-1/2" />

            {moments.map((moment, index) => {
              const Icon = moment.Icon;

              return (
                <motion.div
                  key={moment.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-12 flex pl-12 last:mb-0 sm:w-1/2 sm:pl-0 ${
                    index % 2 === 0
                      ? "sm:ml-0 sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  <div
                    className={`absolute left-[8px] top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#b9a8e0] bg-[#22233f] text-[#e1d5ff] ${
                      index % 2 === 0
                        ? "sm:left-auto sm:right-[-12px]"
                        : "sm:left-[-12px]"
                    }`}
                  >
                    <Icon size={12} strokeWidth={1.5} />
                  </div>

                  <div className="w-full rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition hover:bg-white/[0.09] sm:p-7">
                    <p className="mb-3 text-xs tracking-[0.25em] text-[#c8b9ed]">
                      CHAPTER {moment.number}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {moment.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#c9c5df]">
                      {moment.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE LITTLE THINGS */}
      <section className="px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9281b0]">
                The things that make us, us
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
                It's the little things
                <span className="block italic text-[#9b83bd]">
                  I'll remember most.
                </span>
              </h2>
              <p className="mt-6 leading-8 text-[#797183]">
                The conversations that start with “one last thing,” the
                laughter that makes absolutely no sense, and the comfort of
                having someone who just gets you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {littleThings.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-[#e3d9ed] bg-white/75 p-6 transition hover:shadow-xl hover:shadow-[#7854a1]/5 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e0d4ef] bg-[#f1ebfa] text-[#9481b8]">
                      <Icon size={23} strokeWidth={1.3} />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#85788a]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LETTER */}
      <section className="relative overflow-hidden bg-[#eae4f3] px-6 py-24 text-center sm:px-10 md:py-32">
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 8, -8, 0], y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#c9b8e1] bg-white/60 text-[#9481b8]"
        >
          <MailOpen size={32} strokeWidth={1.2} />
        </motion.div>

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8877a5]">
          Something I've been meaning to say
        </p>
        <h2 className="font-serif text-4xl sm:text-6xl">
          A little letter,
          <span className="block italic text-[#9b83bd]">just for you.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-8 text-[#766d7d]">
          Some things are easier to write than say out loud. So here's a little
          something from the heart.
        </p>

        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setLetterOpen(true)}
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#39334e] px-8 py-4 text-sm text-white shadow-xl shadow-[#39334e]/15 transition hover:bg-[#51466e]"
        >
          <MailOpen size={17} />
          Open your letter
        </motion.button>

        <AnimatePresence>
          {letterOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#171629]/75 p-5 backdrop-blur-sm"
              onClick={() => setLetterOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={(event) => event.stopPropagation()}
                className="relative my-auto max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#e1d4ef] bg-[#fffaff] p-7 text-left shadow-2xl sm:p-12"
              >
                <button
                  type="button"
                  onClick={() => setLetterOpen(false)}
                  aria-label="Close letter"
                  className="absolute right-5 top-5 rounded-full p-2 text-[#806b91] transition hover:bg-[#eee6f7]"
                >
                  <X size={20} />
                </button>

                <Heart className="mb-6 text-[#9b83bd]" size={30} />

                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#8877a5]">
                  A note from the heart
                </p>

                <h3 className="font-serif text-3xl sm:text-4xl">
                  To my favourite person,
                </h3>

                <div className="mt-7 space-y-5 font-serif text-lg leading-8 text-[#66576f]">
                  <p>
                    I don't think you realise how much happiness you have
                    brought into my life.
                  </p>
                  <p>
                    Thank you for the random laughs, the little moments, the
                    memories that still make me smile, and for being someone I
                    can be completely myself around.
                  </p>
                  <p>
                    Life will keep changing. We might find ourselves on
                    different paths, meet new people, and make new memories.
                    But a part of my story will always have you in it.
                  </p>
                  <p>
                    No matter how much time passes, I hope we always find our
                    way back to the same silly jokes and the same familiar
                    feeling.
                  </p>
                  <p className="italic text-[#9b83bd]">
                    Thank you for being you. I'm really glad our paths crossed.
                  </p>
                </div>

                <div className="mt-9 border-t border-[#e5d9ef] pt-6">
                  <p className="font-serif text-xl">With all my love,</p>
                  <p className="mt-1 text-sm text-[#8877a5]">
                    Your forever friend
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden px-6 py-28 text-center sm:px-10 md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ded6f2]/50 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9281b0]">
            To all the memories we've made
          </p>
          <h2 className="font-serif text-5xl leading-tight sm:text-7xl">
            Here's to us.
            <span className="mt-2 block italic text-[#9b83bd]">
              And everything still to come.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#797183]">
            Some friendships are not just a chapter. They become part of every
            chapter that follows.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#39334e] px-8 py-4 text-sm text-white transition hover:bg-[#51466e]"
            >
              Create a story of your own
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#d7c9e5] px-7 py-4 text-sm text-[#654d79] transition hover:bg-white"
            >
              <ArrowLeft size={16} />
              Back to AURA
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e3d9ed] px-6 py-8 text-center">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.2em] text-[#654d79]"
        >
          AURA
        </Link>
        <p className="mt-3 text-xs tracking-wide text-[#9b8da0]">
          Personal stories. Beautifully experienced.
        </p>
      </footer>

      {/* MEMORY PREVIEW */}
      <AnimatePresence>
        {activeMemory !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#171629]/85 p-5 backdrop-blur-sm"
            onClick={() => setActiveMemory(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg bg-[#fffaff] p-4 pb-7 shadow-2xl sm:p-6 sm:pb-8"
            >
              <button
                type="button"
                aria-label="Close memory"
                onClick={() => setActiveMemory(null)}
                className="absolute right-5 top-5 z-10 rounded-full bg-white/90 p-2 text-[#39334e] shadow"
              >
                <X size={19} />
              </button>
              <img
                src={memories[activeMemory].image}
                alt={memories[activeMemory].title}
                className="h-[50vh] max-h-[480px] w-full object-cover"
              />
              <h3 className="mt-6 font-serif text-3xl">
                {memories[activeMemory].title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#85788a]">
                {memories[activeMemory].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}