
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";
import { ArrowLeft, ArrowRight, Heart, Sparkles, Stars } from "lucide-react";

const confettiColors = [
  "#6f3947",
  "#d6a6a9",
  "#e5bd75",
  "#a7b69b",
  "#f5d9d6",
];

const balloons = [
  { left: "3%", delay: 0, color: "#d9a5aa", size: 43 },
  { left: "88%", delay: 3, color: "#9e6877", size: 48 },
  { left: "15%", delay: 6, color: "#d6b979", size: 35 },
  { left: "78%", delay: 2, color: "#b2bda5", size: 40 },
  { left: "56%", delay: 8, color: "#edc5c5", size: 36 },
  { left: "35%", delay: 5, color: "#c78b98", size: 32 },
];

const floatingSymbols = [
  { symbol: "💗", left: "8%", top: "22%", delay: 0 },
  { symbol: "✨", left: "24%", top: "43%", delay: 1 },
  { symbol: "💕", left: "88%", top: "35%", delay: 2 },
  { symbol: "✦", left: "73%", top: "18%", delay: 0.5 },
  { symbol: "💖", left: "44%", top: "12%", delay: 1.5 },
  { symbol: "✧", left: "94%", top: "65%", delay: 2.5 },
  { symbol: "✨", left: "5%", top: "72%", delay: 1.2 },
  { symbol: "💗", left: "62%", top: "76%", delay: 2.2 },
];

function FloatingDecorations() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {/* Falling confetti */}
      {Array.from({ length: 32 }).map((_, i) => (
        <motion.span
          key={`confetti-${i}`}
          className="absolute top-[-5%] h-3 w-2 rounded-sm"
          style={{
            left: `${(i * 37) % 100}%`,
            backgroundColor: confettiColors[i % confettiColors.length],
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, i % 2 === 0 ? 45 : -45, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 9 + (i % 7),
            repeat: Infinity,
            delay: (i % 12) * 1.1,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating balloons */}
      {balloons.map((balloon, i) => (
        <motion.div
          key={`balloon-${i}`}
          className="absolute bottom-[-170px]"
          style={{ left: balloon.left }}
          animate={{
            y: [0, "-125vh"],
            x: [0, 18, -12, 0],
            rotate: [-5, 5, -3, 0],
          }}
          transition={{
            duration: 19 + i * 2,
            repeat: Infinity,
            delay: balloon.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="relative rounded-[50%] shadow-md"
            style={{
              width: balloon.size,
              height: balloon.size * 1.25,
              backgroundColor: balloon.color,
              borderRadius: "50% 50% 45% 45%",
            }}
          >
            <div className="absolute left-[25%] top-[15%] h-[25%] w-[18%] rounded-full bg-white/50 blur-[1px]" />
            <div
              className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"
              style={{ backgroundColor: balloon.color }}
            />
          </div>

          <div className="mx-auto h-20 w-px bg-[#9c7a76]/45" />
        </motion.div>
      ))}

      {/* Twinkling hearts and sparkles */}
      {floatingSymbols.map((item, i) => (
        <motion.span
          key={`symbol-${i}`}
          className="absolute text-xl"
          style={{ left: item.left, top: item.top }}
          animate={{
            y: [0, -18, 0],
            rotate: [-8, 8, -8],
            opacity: [0.4, 1, 0.4],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          {item.symbol}
        </motion.span>
      ))}
    </div>
  );
}

function BirthdayCake() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex min-h-[220px] flex-col items-center justify-center">
      {/* Floating sparkles around the cake */}
      {!reduceMotion &&
        [0, 1, 2, 3, 4, 5].map((i) => (
          <motion.span
            key={`cake-sparkle-${i}`}
            className="absolute text-xl text-[#a46b76]"
            style={{
              left: `${12 + i * 14}%`,
              top: `${12 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ✦
          </motion.span>
        ))}

      {/* Animated candle flames */}
      <div className="relative z-10 mb-[-4px] flex items-end gap-4">
        {[0, 1, 2].map((candle) => (
          <div
            key={candle}
            className="flex flex-col items-center"
          >
            {!reduceMotion ? (
              <motion.span
                className="mb-1 text-xl text-[#e5a34b]"
                animate={{
                  scale: [1, 1.2, 0.9, 1.15, 1],
                  opacity: [0.8, 1, 0.75, 1, 0.8],
                }}
                transition={{
                  duration: 0.7 + candle * 0.15,
                  repeat: Infinity,
                }}
              >
                🔥
              </motion.span>
            ) : (
              <span className="mb-1 text-xl">🕯️</span>
            )}

            <div
              className="h-9 w-2 rounded-t-sm"
              style={{
                backgroundColor: ["#d9a5aa", "#e5bd75", "#a7b69b"][candle],
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating cake */}
      <motion.div
        className="relative z-10 text-8xl sm:text-9xl"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -8, 0], rotate: [-2, 2, -2] }
        }
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎂
      </motion.div>

      {!reduceMotion && (
        <motion.span
          className="absolute right-[18%] top-[18%] text-3xl"
          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          ✨
        </motion.span>
      )}
    </div>
  );
}

export default function BirthdayExperiencePage() {
  const reduceMotion = useReducedMotion();

  function celebrate() {
    const duration = 2200;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.65 },
        colors: confettiColors,
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.65 },
        colors: confettiColors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    confetti({
      particleCount: 120,
      spread: 100,
      startVelocity: 42,
      origin: { y: 0.65 },
      colors: confettiColors,
    });

    frame();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f0e7] text-[#29251f]">
      <FloatingDecorations />

      {/* Navigation */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.2em] text-[#6f3947]"
        >
          AURA
        </Link>

        <Link
          href="/#contact"
          className="rounded-full border border-[#6f3947]/25 bg-[#f8f0e7]/80 px-5 py-3 text-xs transition hover:bg-[#6f3947] hover:text-white"
        >
          Create your own
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[82vh] items-center justify-center px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(190,132,137,0.24),_transparent_65%)]" />

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-8 inline-flex rounded-full bg-white/80 p-5 text-[#9b5968] shadow-sm"
          >
            <Sparkles size={30} strokeWidth={1.3} />
          </motion.div>

          <p className="text-xs uppercase tracking-[0.35em] text-[#6f3947]/70">
            A little example of what&apos;s possible
          </p>

          <h1 className="mt-8 font-serif text-6xl leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-9xl">
            A day
            <br />
            <span className="italic text-[#8c4e5e]">all about you.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-black/65 md:text-lg">
            Imagine opening a little world made just for someone you love —
            their favourite memories, heartfelt words, and a birthday surprise
            they never saw coming.
          </p>

          <button
            type="button"
            onClick={celebrate}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#6f3947] px-7 py-4 text-sm text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#4d2933]"
          >
            Celebrate!
            <Sparkles size={17} />
          </button>

          <p className="mt-4 text-xs text-black/45">
            Go on, give it a little celebration ✨
          </p>
        </motion.div>

        <div className="pointer-events-none absolute left-[8%] top-[18%] text-[#b27c83]/80">
          <Stars size={25} strokeWidth={1} />
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-[18%] right-[10%] text-[#b27c83]/80"
          animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Heart size={28} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Birthday story section */}
      <section className="relative z-10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] bg-[#e8d4cf] p-8 shadow-lg"
          >
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/60" />

            <div className="relative z-10 text-center">
              <BirthdayCake />

              <p className="mt-3 font-serif text-3xl italic text-[#6f3947]">
                Make a wish...
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#6f3947]/65">
                Your moment. Your memories.
              </p>

              <div className="mt-5 flex justify-center gap-3 text-xl">
                <span>🎈</span>
                <span>🎉</span>
                <span>🎁</span>
                <span>💝</span>
              </div>
            </div>

            {/* Decorative background balloons */}
            <motion.span
              className="absolute left-5 top-8 text-4xl"
              animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [-8, 8, -8] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              🎈
            </motion.span>

            <motion.span
              className="absolute bottom-10 right-5 text-4xl"
              animate={reduceMotion ? undefined : { y: [0, -15, 0], rotate: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🎈
            </motion.span>

            <motion.span
              className="absolute right-8 top-12 text-xl"
              animate={reduceMotion ? undefined : { scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6f3947]/65">
              More than a birthday message
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              A surprise they can
              <span className="italic text-[#8c4e5e]"> keep forever.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-black/60 md:text-base">
              • The best birthday gift isn't found in a box; it’s found in the memories we make. It can be a little journey
              through the moments that made your relationship special.
            </p>

            <div className="mt-8 space-y-5">
              {[
                [
                  "01",
                  "Their favourite memories",
                  "Photos and moments that mean something to both of you.",
                ],
                [
                  "02",
                  "Words from the heart",
                  "A personal letter, a funny story, or a message they can revisit.",
                ],
                [
                  "03",
                  "A magical reveal",
                  "A thoughtful ending that turns the whole experience into a surprise.",
                ],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-4">
                  <span className="pt-1 font-serif text-sm italic text-[#8c4e5e]">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-black/55">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Celebration feature strip */}
      <section className="relative z-10 px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#6f3947]/10 bg-white/60 px-6 py-10 text-center shadow-sm md:px-12 md:py-14">
          <div className="flex justify-center gap-5 text-3xl md:text-4xl">
            {["🎈", "🎂", "🎁", "🎊", "💖"].map((item, i) => (
              <motion.span
                key={item}
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 2 + (i % 3) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          <h2 className="mt-7 font-serif text-3xl italic text-[#6f3947] md:text-4xl">
            Every little detail can be personal.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/55">
            From the first surprise to the final message, your birthday
            experience can be designed around the person you love.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 bg-[#eadfce] px-6 py-24 text-center md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-[#6f3947]/65">
          Your person deserves something special
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Make their birthday
          <span className="italic text-[#8c4e5e]"> a memory.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-black/60 md:text-base">
          Tell me about the person, the memories, and the little things that
          make them special. I&apos;ll help turn them into a website made just
          for them.
        </p>

        <Link
          href="/#contact"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#25251f] px-7 py-4 text-sm text-white transition hover:bg-[#6f3947]"
        >
          Tell me your idea
          <ArrowRight size={17} />
        </Link>

        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-black/55 transition hover:text-[#6f3947]"
          >
            <ArrowLeft size={16} />
            Back to AURA
          </Link>
        </div>
      </section>
    </main>
  );
}

